import React, { useEffect, useState } from "react"
import Banner from "../components/banner"
import HomeInfo from "../components/homeinfo"
import AboutInfo from "../components/aboutinfo"
import ProjectInfo from "../components/projectinfo"
import ContactInfo from "../components/contactinfo"
import "../styles/index.css"
import WebFont from "webfontloader"

export default function Home() {
  let totalSections = ["main", "about", "projects"]
  const [translateX, setTranslateX] = useState(0)
  const [sectionWidth, setSectionWidth] = useState(window.innerWidth)
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight)
  const [totalWidth, setTotalWidth] = useState(
    window.innerWidth * totalSections.length
  )
  let isMobile = window.matchMedia("only screen and (max-width: 800px)").matches
  useEffect(() => {
    function resizeMainHeightAndWidth() {
      const height = window.screen.height
      const width = window.screen.width

      // detect if mobile or desktop
      if (isMobile) {
        setTotalWidth(width)
      } else {
        setSectionWidth(width)
        setSectionHeight(height)
        let newTotalWidth = 0
        for (let i = 0; i < totalSections.length; i++) {
          newTotalWidth += width
        }
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
    setTranslateX(-totalSections.indexOf(section) * window.innerWidth)
    console.log(translateX)
    anim()
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

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
          style={{ width: `${sectionWidth}px`, height: `${sectionHeight}px` }}
          id="main"
          className={"section"}
        >
          <Banner moveTo={moveTo} />
          <HomeInfo />
        </div>
        <div
          style={{ width: `${sectionWidth}px`, height: `${sectionHeight}px` }}
          id="about"
          className={"section"}
        >
          <AboutInfo />
        </div>
        <div
          style={{ width: `${sectionWidth}px`, height: `${sectionHeight}px` }}
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

WebFont.load({
  google: {
    families: [
      "Fredoka One: 400",
      "Roboto Mono: 400, 700",
      "Oswald: 200, 500, 700",
      "sans-serif",
    ],
  },
})
