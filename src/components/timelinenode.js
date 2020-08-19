import React, { useRef, useEffect, useContext } from "react"
import nodeStyles from "./timelinenode.module.css"
import { GlobalContext } from "../pages/index.js"

export default function TimelineNode(props) {
  const { isMobile } = useContext(GlobalContext)
  const [showLabel, setShowLabel] = React.useState(false)
  const [showInfo, setShowInfo] = React.useState(false)

  const handleLabel = () => {
    setShowLabel(prev => !prev)
  }

  const handleInfo = () => {
    setShowInfo(prev => !prev)
  }

  const ref = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowInfo(false)
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })

  return (
    <div ref={ref} style={props.style} className={nodeStyles.nodeContainer}>
      <div
        style={{
          transition: "opacity 0.2s, visibility 0.2s",
          opacity: showInfo ? "1" : "0",
          visibility: showInfo ? "visible" : "hidden",
          position: "relative",
          zIndex: "1",
        }}
      >
        {props.children}
      </div>
      <div
        className={nodeStyles.nodeOuter}
        onMouseOver={handleLabel}
        onMouseOut={handleLabel}
        onClick={handleInfo}
      >
        <div className={nodeStyles.nodeInner}></div>
      </div>
      <span
        style={{ opacity: showLabel || isMobile ? "1" : "0" }}
        className={nodeStyles.nodeLabel}
      >
        {props.label}
      </span>
    </div>
  )
}
