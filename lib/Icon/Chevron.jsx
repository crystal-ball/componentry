import React from 'react'
import { string } from 'prop-types'

Chevron.propTypes = { title: string }
Chevron.defaultProps = { title: 'Toggle' }

export default function Chevron({ title = 'Toggle' }) {
  return (
    <svg
      role="img"
      aria-label={title}
      className="icon chevron"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>{title}</title>
      <path d="M6.71,8.51,16,17.8l9.29-9.29,2.84,2.84L16,23.49,3.86,11.35Z" />
    </svg>
  )
}
