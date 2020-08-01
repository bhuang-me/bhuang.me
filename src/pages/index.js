import React, { useEffect, useState } from "react"
import Banner from "../components/banner"
import HomeInfo from "../components/homeinfo"
import AboutInfo from "../components/aboutinfo"
import ProjectInfo from "../components/projectinfo"
import ContactInfo from "../components/contactinfo"
import "../styles/index.css"
import { window, document } from "browser-monads"

export default function Home() {
  let totalSections = ["main", "about", "projects"]
  // translateX: the translate value in the X axis of the #content element
  const [translateX, setTranslateX] = useState(0)
  const [sectionWidth, setSectionWidth] = useState(window.innerWidth)
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight) //window.innerHeight
  const [totalWidth, setTotalWidth] = useState(
    window.innerWidth * totalSections.length
  ) //window.innerWidth * totalSections.length
  // detect if mobile or desktop based on screen width
  let isMobile = window.matchMedia("only screen and (max-width: 800px)").matches
  useEffect(() => {
    function resizeMainHeightAndWidth() {
      if (isMobile) {
        setTotalWidth(window.screen.width)
      } else {
        const height = window.innerHeight
        const width = window.innerWidth
        setSectionWidth(width)
        setSectionHeight(`${height}px`)
        let newTotalWidth = width * totalSections.length
        setTotalWidth(newTotalWidth)
      }
    }
    resizeMainHeightAndWidth()

    function handleWheel(event) {
      let newTranslateX = translateX - (event.deltaY * 4) / 3
      newTranslateX = Math.min(0, newTranslateX)
      newTranslateX = Math.max(
        newTranslateX,
        -(window.innerWidth * (totalSections.length - 1))
      )
      setTranslateX(newTranslateX)
    }

    anim()
    async function anim() {
      // translateX is negative
      var nextSectionIndex = Math.floor(-translateX / (window.innerWidth * 0.7))
      var nextBreakpoint = nextSectionIndex * window.innerWidth
      if (translateX <= nextBreakpoint) {
        let items = document.getElementsByClassName(
          `beforeAnimate_${totalSections[nextSectionIndex]}`
        )
        for (let i = 0; i < items.length; i++) {
          items[i].classList.add("animate")
          await sleep(200)
        }
      }
    }

    async function animMobile() {
      var nextSectionIndex = Math.floor(
        window.scrollY / (window.innerHeight * 0.7)
      )
      var nextBreakpoint = nextSectionIndex * window.innerHeight * 0.7
      if (window.scrollY >= nextBreakpoint) {
        let items = document.getElementsByClassName(
          `beforeAnimate_${totalSections[nextSectionIndex]}`
        )
        for (let i = 0; i < items.length; i++) {
          items[i].classList.add("animate")
          await sleep(200)
        }
      }
    }

    if (isMobile) {
      window.addEventListener("scroll", animMobile)
    } else {
      window.addEventListener("wheel", anim)
    }
    window.addEventListener("wheel", handleWheel)
    window.addEventListener("resize", resizeMainHeightAndWidth)
    return () => {
      if (isMobile) {
        window.removeEventListener("scroll", animMobile)
      } else {
        window.removeEventListener("wheel", anim)
      }
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("resize", resizeMainHeightAndWidth)
    }
  })

  function moveTo(section) {
    if (isMobile) {
      var sectElement = document.getElementById(section)
      sectElement.scrollIntoView({ behavior: "smooth" })
    } else {
      let newTranslateX = -totalSections.indexOf(section) * window.innerWidth
      setTranslateX(newTranslateX)
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return (
    <div>
      <div
        style={{
          transform: `translate(${translateX}px)`,
          width: `${totalWidth}px`,
        }}
        id="content"
      >
        <div
          style={{ width: `${sectionWidth}px`, height: `${sectionHeight}` }}
          id="main"
          className={"section"}
        >
          <Banner moveTo={moveTo} />
          <HomeInfo />
        </div>
        <div
          style={{ width: `${sectionWidth}px`, height: `${sectionHeight}` }}
          id="about"
          className={"section"}
        >
          <AboutInfo />
        </div>
        <div
          style={{ width: `${sectionWidth}px`, height: `${sectionHeight}` }}
          id="projects"
          className={"section"}
        >
          <ProjectInfo />
        </div>
      </div>
      <ContactInfo />
    </div>
  )
}
