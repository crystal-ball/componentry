import React from 'react'
import { node, shape } from 'prop-types'

Close.contextTypes = {
  COMPONENTRY_THEME: shape({
    closeSVG: node
  })
}

export default function Close(props, { COMPONENTRY_THEME } = {}) {
  return (
    COMPONENTRY_THEME.closeSVG || (
      <svg
        role="img"
        aria-label="Close"
        className="icon close"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>Close</title>
        <path d="M32,3.22,19.22,16,32,28.78,28.78,32,16,19.22,3.22,32,0,28.78,12.78,16,0,3.22,3.22,0,16,12.78,28.78,0Z" />
      </svg>
    )
  )
}
