import React from "react"
import nodeStyles from "./timelinenode.module.css"

const circleStyles = {
  borderRadius: "50%",
  backgroundColor: "red",
  width: "40px",
  height: "40px",
  position: "absolute",
  top: "5px",
  transform: "translate(-50%, -50%)",
}

export default function TimelineNode(props) {
  return (
    <div style={props.style} className={nodeStyles.nodeContainer}>
      {props.children}
      <div style={circleStyles}></div>
    </div>
  )
}
