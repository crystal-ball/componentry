import React from 'react'
import { node, shape } from 'prop-types'

Chevron.contextTypes = {
  COMPONENTRY_THEME: shape({
    chevronSVG: node
  })
}

export default function Chevron(props, { COMPONENTRY_THEME } = {}) {
  return (
    COMPONENTRY_THEME.chevronSVG || (
      <svg
        role="img"
        aria-label="Toggle"
        className="icon chevron"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>Toggle</title>
        <path d="M6.71,8.51,16,17.8l9.29-9.29,2.84,2.84L16,23.49,3.86,11.35Z" />
      </svg>
    )
  )
}
