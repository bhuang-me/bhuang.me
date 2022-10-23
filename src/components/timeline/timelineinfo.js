import React from "react"
import * as timelineStyles from "./timelineinfo.module.css"
import Timeline from "./timeline.js"

export default function TimelineInfo() {
  return (
    <div className={timelineStyles.container}>
      <div className={timelineStyles.intro}>
        <span className={timelineStyles.header}>TIMELINE</span>
        {/* <div>
          <hr className={timelineStyles.hr} />
          <br />
        </div> */}
        {/* <div className={timelineStyles.desc}>
          Hey there, I'm Brandon, a web developer. I graduated from Concordia
          University in Computer Science with a specialization in Computer Games
          but later decided to pivot into the modern web stack. This personal
          website is a way for me to showcase some of my skills in web
          programming as well as some of my projects and work experience via a
          virtual timeline.
        </div> */}
      </div>
      <div className={timelineStyles.timelineContainer}>
        <Timeline />
      </div>
    </div>
  )
}
