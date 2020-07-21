import React, { useEffect } from "react"
import homeStyles from "./homeinfo.module.css"
import HomeMainAnim from "./images/home_main_anim.gif"
import arrow from "./images/home_arrow.svg"

export default function HomeInfo() {
  useEffect(() => {
    function offsetScrollingText() {
      var x = document.getElementsByClassName("xOffset")
      for (let i = 0; i < x.length; i++) {
        let textHeight = x[i].scrollHeight
        x[i].style.left = textHeight * 12.5786 + "px" // MAGIC NUMBER!~
      }

      var c = document.getElementsByClassName("scrollingText")
      for (let i = 0; i < c.length; i++) {
        let textHeight = c[i].scrollHeight
        c[i].style.width = textHeight * 12.5786 + "px" // MAGIC NUMBER!~
      }
    }

    offsetScrollingText()
  })

  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.backgroundVisual}>
        <div className={homeStyles.topScrollingText}>
          <div className={homeStyles.scrollingText + " scrollingText"}></div>
          <div
            className={homeStyles.scrollingText + " scrollingText xOffset"}
          ></div>
        </div>
        <div className={homeStyles.midScrollingText}>
          <div className={homeStyles.scrollingText + " scrollingText"}></div>
          <div
            className={homeStyles.scrollingText + " scrollingText xOffset"}
          ></div>
        </div>
        <div className={homeStyles.botScrollingText}>
          <div className={homeStyles.scrollingText + " scrollingText"}></div>
          <div
            className={homeStyles.scrollingText + " scrollingText xOffset"}
          ></div>
        </div>
      </div>
      <div className={homeStyles.homeMainContainer}>
        <img
          className={homeStyles.homeMainAnim}
          src={HomeMainAnim}
          alt="Home Main Anim"
        />
        <div className={homeStyles.scrollPointer}>
          scroll
          <img
            src={arrow}
            alt="arrow"
            className={homeStyles.arrowAnim}
            width="25"
            height="25"
          />
        </div>
      </div>
    </div>
  )
}
