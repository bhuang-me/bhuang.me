import React, { useEffect, useState } from "react"
import Banner from "../components/banner"
import HomeInfo from "../components/homeinfo"
//import AboutInfo from "../components/aboutinfo"
import TimelineInfo from "../components/timelineinfo"
import ContactInfo from "../components/contactinfo"
import favicon from "../components/images/favicon.ico"
import { Helmet } from "react-helmet"
import "../styles/index.css"
import { window } from "browser-monads"

export const GlobalContext = React.createContext()

export default function Home() {
  // let totalSections = ["main", "about", "projects"]
  // translateX: the translate value in the X axis of the #content element
  const [translateX, setTranslateX] = useState(0)
  const [sectionWidth, setSectionWidth] = useState(0)
  const [sectionHeight, setSectionHeight] = useState(0)
  const [totalWidth, setTotalWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const resizeMainHeightAndWidth = () => {
      let mobi = window.matchMedia("only screen and (max-width: 800px)").matches
      setIsMobile(mobi)
      if (isMobile) {
        const width = window.screen.width
        const height = window.screen.height
        setSectionWidth(width)
        setSectionHeight(height)
        setTotalWidth(width)
      } else {
        const width = window.innerWidth
        const height = window.innerHeight
        setSectionWidth(width)
        setSectionHeight(height)
        setTotalWidth(width * 2.35)
      }
    }
    resizeMainHeightAndWidth()

    function checkScrollDirection(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0
      }
      return event.deltaY < 0
    }

    const handleWheel = event => {
      var scrollAmount //pixels
      if (checkScrollDirection(event)) {
        // up
        scrollAmount = 180
      } else {
        // down
        scrollAmount = -180
      }
      let newTranslateX = translateX + scrollAmount
      newTranslateX = Math.min(0, newTranslateX)
      newTranslateX = Math.max(
        newTranslateX,
        -(window.innerWidth * 2.35 - window.innerWidth)
      )
      setTranslateX(newTranslateX)
    }

    /*anim()
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
    }*/

    /*if (isMobile) {
      window.addEventListener("scroll", animMobile)
    } else {
      window.addEventListener("wheel", anim)
    }*/
    window.addEventListener("wheel", handleWheel)
    window.addEventListener("resize", resizeMainHeightAndWidth)
    return () => {
      /*if (isMobile) {
        window.removeEventListener("scroll", animMobile)
      } else {
        window.removeEventListener("wheel", anim)
      }*/
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("resize", resizeMainHeightAndWidth)
    }
  })
  /*
  const moveTo = section => {
    if (isMobile) {
      var sectElement = document.getElementById(section)
      sectElement.scrollIntoView({ behavior: "smooth" })
    } else {
      let newTranslateX = -totalSections.indexOf(section) * window.innerWidth
      setTranslateX(newTranslateX)
    }
  }*/
  /*
  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
*/
  return (
    <GlobalContext.Provider value={{ isMobile, setIsMobile }}>
      <Helmet
        meta={[
          { charSet: "utf-8", name: "viewport", content: "width=device-width" },
        ]}
        title="Brandon Huang"
        link={[{ rel: "icon", type: "image/x-icon", href: `${favicon}` }]}
      />
      <div
        style={{
          transform: isMobile ? "unset" : `translate(${translateX}px)`,
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
          style={{
            width: isMobile ? `${sectionWidth}px` : `${sectionWidth * 1.35}px`,
            height: isMobile ? "1500px" : `${sectionHeight}px`,
          }}
          id="timeline"
          className={"section"}
        >
          <TimelineInfo />
        </div>
      </div>
      <ContactInfo />
    </GlobalContext.Provider>
  )
}
