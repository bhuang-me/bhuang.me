import React from "react"
import logoStyles from "./logo.module.css"
import logo from "./images/LOGO.svg"

export default function Logo() {
  return (
    <div className={logoStyles.container}>
      <img src={logo} alt="BH Logo" width="60" height="60" />
    </div>
  )
}
