import React from "react"
import Wrapper from "./wrapper"
import aboutInfoStyles from "./aboutinfo.module.css"

export default function AboutInfo() {
  return (
    <div className={aboutInfoStyles.container}>
      <div className={aboutInfoStyles.aboutHeader}>ABOUT</div>
      <div className={aboutInfoStyles.aboutInfoContainer}>
        <div className={aboutInfoStyles.aboutInfo}>
          <div style={{ clear: "both" }}>
            <div className={aboutInfoStyles.subHeader}>Hey. I'm&nbsp;</div>
            <div className={aboutInfoStyles.header}>Brandon.</div>
          </div>
          <Wrapper>
            <div className={aboutInfoStyles.aboutSubcat}>
              <div
                className={aboutInfoStyles.education + " beforeAnimate_about"}
              >
                <div className={aboutInfoStyles.subcatHeader}>education</div>
                <div>Concordia University</div>
                <div>Bachelor of Computer Science (BCompSc)</div>
              </div>
              <div
                className={aboutInfoStyles.interest + " beforeAnimate_about"}
              >
                <div className={aboutInfoStyles.subcatHeader}>interests</div>
                <div>gaming</div>
                <div>programming</div>
                <div>drawing</div>
              </div>
              <div className={aboutInfoStyles.work + " beforeAnimate_about"}>
                <div className={aboutInfoStyles.subcatHeader}>work</div>
                <div>Accedian Networks</div>
                <div>Broadsign</div>
                <div>Michael Kors</div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  )
}
