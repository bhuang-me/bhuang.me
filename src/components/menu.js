import React from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.css"
import hamburger from "./images/hamburger_menu.svg"

export default function Menu(props) {
  return (
    <div className={menuStyles.menu}>
      <div className={menuStyles.hamburgerContainer}>
        <img src={hamburger} alt="hamburger" width="60" height="60" />
      </div>
      <div className={menuStyles.aboutContainer}>
        <div className={menuStyles.linkBg}>
          <span
            className={menuStyles.aboutLink}
            onClick={() => props.moveTo("about")}
          ></span>
        </div>
      </div>
      <div className={menuStyles.projectsContainer}>
        <div className={menuStyles.linkBg}>
          <span
            className={menuStyles.projectsLink}
            onClick={() => props.moveTo("projects")}
          ></span>
        </div>
      </div>
    </div>
  )
}
