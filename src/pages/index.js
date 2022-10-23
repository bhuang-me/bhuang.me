import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { window } from "browser-monads"

import Banner from "../components/banner"
import HomeInfo from "../components/homeinfo"
import TimelineInfo from "../components/timeline/timelineinfo"
import ContactInfo from "../components/contactinfo"
import favicon from "../components/images/favicon.ico"
import "../styles/index.css"

export const GlobalContext = React.createContext()

export default function Home() {
  // let totalSections = ["main", "about", "projects"]
  // translateX: the translate value in the X axis of the #content element
  const [translateX, setTranslateX] = useState(0)
  const [mainWidth, setMainWidth] = useState(0)
  const [mainHeight, setMainHeight] = useState(0)
  const [totalWidth, setTotalWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const timelineWidth = 1600

  useEffect(() => {
    const resizeMainHeightAndWidth = () => {
      let mobi = window.matchMedia("only screen and (max-width: 800px)").matches
      setIsMobile(mobi)
      if (isMobile) {
        const mainWidth = window.screen.width
        const mainHeight = window.screen.height
        setMainWidth(mainWidth)
        setMainHeight(mainHeight)
        setTotalWidth(mainWidth)
      } else {
        const mainWidth = window.innerWidth
        const mainHeight = window.innerHeight
        setMainWidth(mainWidth)
        setMainHeight(mainHeight)
        setTotalWidth(mainWidth + timelineWidth)
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
      newTranslateX = Math.max(newTranslateX, -timelineWidth)
      setTranslateX(newTranslateX)
    }

    window.addEventListener("wheel", handleWheel)
    window.addEventListener("resize", resizeMainHeightAndWidth)
    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("resize", resizeMainHeightAndWidth)
    }
  })
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
          style={{ width: `${mainWidth}px`, height: `${mainHeight}px` }}
          id="main"
          className={"section"}
        >
          <Banner />
          <HomeInfo />
        </div>
        <div
          style={{
            width: isMobile ? `${mainWidth}px` : `${timelineWidth}px`,
            height: isMobile ? "1500px" : `${mainHeight}px`,
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
