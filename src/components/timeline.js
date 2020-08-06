import React from "react"
import TimelineCard from "./timelinecard.js"
import TimelineNode from "./timelinenode.js"

const edgeStyle = {
  width: "3200px",
  height: "10px",
  backgroundColor: "white",
  position: "relative",
}

export default function Timeline() {
  return (
    <div style={edgeStyle}>
      <TimelineNode style={{ left: "0px" }}>
        <TimelineCard orientation="down" />
      </TimelineNode>
      <TimelineNode style={{ left: "400px", bottom: "0px" }}>
        <TimelineCard orientation="up" />
      </TimelineNode>
      <TimelineNode style={{ left: "800px" }}>
        <TimelineCard />
      </TimelineNode>
    </div>
  )
}
