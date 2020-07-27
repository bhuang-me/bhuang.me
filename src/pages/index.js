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

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

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

  var aboutXBreakpoint = window.innerWidth * 0.7
  var projectXBreakpoint = aboutXBreakpoint * 2

  var aboutYBreakpoint = window.innerHeight * 0.7
  var projectYBreakpoint = aboutYBreakpoint * 2

  async function anim() {
    if (translateX <= -aboutXBreakpoint) {
      let items = document.getElementsByClassName("beforeAnimate_about")
      for (let i = 0; i < items.length; i++) {
        items[i].classList.add("animate")
        await sleep(200)
      }
    }

    if (translateX <= -projectXBreakpoint) {
      let items = document.getElementsByClassName("beforeAnimate_projects")
      for (let i = 0; i < items.length; i++) {
        items[i].classList.add("animate")
        await sleep(200)
      }
    }
  }

  async function animMobile() {
    console.log(window.scrollY)
    if (window.scrollY >= aboutYBreakpoint) {
      let items = document.getElementsByClassName("beforeAnimate_about")
      for (let i = 0; i < items.length; i++) {
        items[i].classList.add("animate")
        await sleep(200)
      }
    }

    if (window.scrollY >= projectYBreakpoint) {
      let items = document.getElementsByClassName("beforeAnimate_projects")
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
          <Banner />
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
