import React from "react"
import nodeStyles from "./timelinenode.module.css"
import { Fade, Typography } from "@material-ui/core"

export default function TimelineNode(props) {
  const [checked, setChecked] = React.useState(false)

  const handleChange = () => {
    setChecked(prev => !prev)
  }

  return (
    <div style={props.style} className={nodeStyles.nodeContainer}>
      {props.children && <Fade in={checked}>{props.children}</Fade>}
      <div className={nodeStyles.nodeOuter}>
        <div
          className={nodeStyles.nodeInner}
          onMouseEnter={handleChange}
          onMouseLeave={handleChange}
        ></div>
      </div>
      <span className={nodeStyles.nodeLabel}>{props.label}</span>
    </div>
  )
}
