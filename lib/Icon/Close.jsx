import React from 'react'
import { node, shape } from 'prop-types'

Close.contextTypes = {
  COMPONENTRY_THEME: shape({
    closeSVG: node
  })
}

export default function Close(props, { COMPONENTRY_THEME } = {}) {
  return (
    COMPONENTRY_THEME.closeSVG ||
    <svg
      role="img"
      aria-label="Close"
      className="icon close"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>Close</title>
      <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z" />
    </svg>
  )
}
