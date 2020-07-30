import React from "react"
import contactInfoStyles from "./contactinfo.module.css"

export default function ContactInfo() {
  return (
    <div className={contactInfoStyles.containerBlack}>
      <div className={contactInfoStyles.text}>CONTACT ME</div>
      <div className={contactInfoStyles.email}>
        brandon<span>bgda</span>@<span>hot</span>mail.<span>com</span>
      </div>
      <div className={contactInfoStyles.social}>
        <img
          src={require("./images/linkedin_logo.png")}
          alt="LinkedInLogo"
          onClick={() =>
            (window.location.href = "https://linkedin.com/in/b-huang")
          }
        />
      </div>
    </div>
  )
}
