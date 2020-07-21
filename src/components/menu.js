import React from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.css"
import hamburger from "./images/hamburger_menu.svg"

export default function Menu() {
  return (
    <div className={menuStyles.menu}>
      <div className={menuStyles.hamburgerContainer}>
        <img src={hamburger} alt="hamburger" width="60" height="60" />
      </div>
      <div className={menuStyles.aboutContainer}>
        <div className={menuStyles.linkBg}>
          <Link to="/about" className={menuStyles.aboutLink}></Link>
        </div>
      </div>
      <div className={menuStyles.projectsContainer}>
        <div className={menuStyles.linkBg}>
          <Link to="/projects" className={menuStyles.projectsLink}></Link>
        </div>
      </div>
      <div className={menuStyles.contactContainer}>
        <div className={menuStyles.linkBg}>
          <Link to="/contact" className={menuStyles.contactsLink}></Link>
        </div>
      </div>
    </div>
  )
}
