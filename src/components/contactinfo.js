import React from 'react'
import * as contactInfoStyles from './contactinfo.module.css'
import linkedInLogo from './images/linkedin_logo.png'

export default function ContactInfo() {
  return (
    <div className={contactInfoStyles.containerBlack}>
      <div className={contactInfoStyles.text}>CONTACT ME</div>
      <div className={contactInfoStyles.email}>
        brandon<span>bgda</span>@<span>hot</span>mail.<span>com</span>
      </div>
      <div
        className={contactInfoStyles.social}
        role="button"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            window.location.href = 'https://linkedin.com/in/b-huang'
          }
        }}
        onClick={() =>
          (window.location.href = 'https://linkedin.com/in/b-huang')
        }
        tabIndex={0}
      >
        <img src={linkedInLogo} alt="LinkedInLogo" />
      </div>
    </div>
  )
}
