import React from "react"
import contactInfoStyles from "./contactinfo.module.css"

export default function ContactInfo() {
  return (
    <div className={contactInfoStyles.containerBlack}>
      <div className={contactInfoStyles.text}>CONTACT ME</div>
      <div className={contactInfoStyles.email}>placeholder@email.com</div>
      <div className={contactInfoStyles.social}>linkedIn</div>
    </div>
  )
}
