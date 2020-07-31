import React from "react"
import bannerStyles from "./banner.module.css"
import Logo from "./logo"
import Menu from "./menu"

export default function Banner(props) {
  return (
    <div className={bannerStyles.container}>
      <Logo />
      <Menu moveTo={props.moveTo} />
    </div>
  )
}
