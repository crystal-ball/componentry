import React from 'react'
import { string } from 'prop-types'

Close.propTypes = { title: string }
Close.defaultProps = { title: 'Close' }

export default function Close({ title }) {
  return (
    <svg
      role="img"
      aria-label={title}
      className="icon close"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>{title}</title>
      <path d="M32,3.22,19.22,16,32,28.78,28.78,32,16,19.22,3.22,32,0,28.78,12.78,16,0,3.22,3.22,0,16,12.78,28.78,0Z" />
    </svg>
  )
}
