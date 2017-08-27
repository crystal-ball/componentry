import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'

import SimpleElement from './factories/SimpleElement'

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 */
export default function Card({ As, className, children, ...other }) {
  className = classNames('card', className)

  return (
    <As className={className} {...other}>
      {children}
    </As>
  )
}

Card.Body = SimpleElement({ baseClasses: 'card-body' })
Card.Footer = SimpleElement({ baseClasses: 'card-footer' })
Card.Header = SimpleElement({ baseClasses: 'card-header' })
Card.Title = SimpleElement({ baseClasses: 'card-title', tagName: 'h4' })

Card.propTypes = {
  As: node,
  children: node,
  className: string
}

Card.defaultProps = {
  As: 'div',
  children: null,
  className: ''
}
