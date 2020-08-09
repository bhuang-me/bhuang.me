import React from "react"
import logoStyles from "./logo.module.css"
import logo from "./images/logo_gradient.png"

export default function Logo() {
  return (
    <div className={logoStyles.container}>
      <img src={logo} alt="BH Logo" width="80" height="80" />
    </div>
  )
}
