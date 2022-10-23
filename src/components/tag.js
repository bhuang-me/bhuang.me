import React from 'react'
import * as tagStyles from './tag.module.css'

export default function Tag(props) {
  return (
    <div className={tagStyles.container}>
      <div className={props.label}>{props.children}</div>
    </div>
  )
}
