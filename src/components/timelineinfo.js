import React from "react"
import timelineStyles from "./timelineinfo.module.css"
import Timeline from "./timeline.js"

export default function TimelineInfo() {
  return (
    <div className={timelineStyles.container}>
      <Timeline />
    </div>
  )
}
