import React from "react"
import timelineStyles from "./timelineinfo.module.css"
import Timeline from "./timeline.js"

export default function TimelineInfo() {
  return (
    <div className={timelineStyles.container}>
      <div className={timelineStyles.intro}>
        <span className={timelineStyles.header}>ABOUT</span>
        <div>
          <hr className={timelineStyles.hr} />
          <br />
        </div>
        <div className={timelineStyles.desc}>
          I'm Brandon. I am currently seeking a job as a web and/or software
          developer as a recent graduate from Concordia University in Computer
          Science with a specialization in Computer Games. This portfolio
          website is a way for me to showcase some of my skills in web
          development as well as my projects and work experience via a virtual
          timeline.
        </div>
      </div>
      <Timeline />
    </div>
  )
}
