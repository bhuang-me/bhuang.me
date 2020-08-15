import React from "react"
import nodeStyles from "./timelinenode.module.css"

export default function TimelineNode(props) {
  const [showLabel, setShowLabel] = React.useState(false)
  const [showInfo, setShowInfo] = React.useState(false)

  const handleLabel = () => {
    setShowLabel(prev => !prev)
  }

  const handleInfo = () => {
    setShowInfo(prev => !prev)
  }

  return (
    <div style={props.style} className={nodeStyles.nodeContainer}>
      <div style={{ opacity: showInfo ? "1" : "0" }}>{props.children}</div>
      <div
        className={nodeStyles.nodeOuter}
        onMouseEnter={handleLabel}
        onMouseLeave={handleLabel}
        onClick={handleInfo}
      >
        <div className={nodeStyles.nodeInner}></div>
      </div>
      <span
        style={{ opacity: showLabel ? "1" : "0" }}
        className={nodeStyles.nodeLabel}
      >
        {props.label}
      </span>
    </div>
  )
}
