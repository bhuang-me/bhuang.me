import React from "react"
import timelineStyles from "./timelineinfo.module.css"
import Timeline from "./timeline.js"

export default function TimelineInfo() {
  return (
    <div className={timelineStyles.container}>
      <div className={timelineStyles.intro}>
        <span className={timelineStyles.header}>ABOUT</span>
        <div>
          <hr
            style={{
              borderTop: "5px solid white",
              width: "70px",
              float: "left",
              display: "inline-block",
            }}
          />
        </div>
        <div>it's brandon bitch</div>
      </div>
      <Timeline />
    </div>
  )
}
