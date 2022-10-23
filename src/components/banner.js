import React from 'react'
import * as bannerStyles from './banner.module.css'
import Logo from './logo'

export default function Banner() {
  return (
    <div className={bannerStyles.container}>
      <Logo />
    </div>
  )
}
