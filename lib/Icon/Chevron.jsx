import React from 'react'
import { node, shape } from 'prop-types'

Chevron.contextTypes = {
  COMPONENTRY_THEME: shape({
    chevronSVG: node
  })
}

export default function Chevron(props, { COMPONENTRY_THEME } = {}) {
  return (
    COMPONENTRY_THEME.chevronSVG ||
    <svg
      role="img"
      aria-label="Toggle"
      className="icon chevron"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>Toggle</title>
      <path d="M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z" />
    </svg>
  )
}
