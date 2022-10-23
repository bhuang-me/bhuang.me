import React from 'react'
import * as wrapperStyles from './wrapper.module.css'

export default function Wrapper({ children }) {
  return <div className={wrapperStyles.wrapper}>{children}</div>
}
