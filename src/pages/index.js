import React, { useEffect } from "react"
import Banner from "../components/banner"
import HomeInfo from "../components/homeinfo"
import AboutInfo from "../components/aboutinfo"
import ProjectInfo from "../components/projectinfo"
import ContactInfo from "../components/contactinfo"
import "../styles/index.css"
import WebFont from "webfontloader"

export default function Home() {
  let totalSections = ["main", "about", "projects"]
  var aboutXBreakpoint = window.innerWidth * 0.7
  var projectXBreakpoint = aboutXBreakpoint * 2
  let isMobile = window.matchMedia("only screen and (max-width: 800px)").matches

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  function resizeMainHeightAndWidth() {
    const height = window.innerHeight
    const width = window.innerWidth
    let totalWidth = 0

    // detect if mobile or desktop

    if (isMobile) {
      for (let section of totalSections) {
        let w = document.getElementById(section)
        totalWidth = width
      }
    } else {
      for (let section of totalSections) {
        let w = document.getElementById(section)
        w.style.height = height + "px"
        w.style.width = width + "px"
        totalWidth += width
      }

      var c = document.getElementById("content")
      c.style.width = totalWidth + "px"
    }
  }

  useEffect(() => {
    var content = document.getElementById("content")
    var translateX = 0
    var translateY = 0

    function handleScroll(event) {
      if (isMobile) {
        /*translateY -= (event.deltaY * 4) / 3
        // clamp to prevent overscroll
        translateY = Math.min(0, translateY)
        translateY = Math.max(
          translateY,
          -(window.innerHeight * (totalSections.length - 1))
        )
        content.style.transform = "translate(0, " + translateY + "px)"*/
      } else {
        console.log("desktop")
        translateX -= (event.deltaY * 4) / 3
        // clamp to prevent overscroll
        translateX = Math.min(0, translateX)
        translateX = Math.max(
          translateX,
          -(window.innerWidth * (totalSections.length - 1))
        )
        content.style.transform = "translate(" + translateX + "px)"
      }
    }

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

    window.addEventListener("wheel", handleScroll)
    window.addEventListener("wheel", anim)
    window.addEventListener("resize", resizeMainHeightAndWidth)
    resizeMainHeightAndWidth()
    return () => window.removeEventListener("resize", resizeMainHeightAndWidth)
  })

  return (
    <div>
      <div id="content">
        <div id="main" className={"section"}>
          <Banner />
          <HomeInfo />
        </div>
        <div id="about" className={"section"}>
          <AboutInfo />
        </div>
        <div id="projects" className={"section"}>
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
