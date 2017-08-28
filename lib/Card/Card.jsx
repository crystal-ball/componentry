import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'

import elementFactory from '../utils/element-factory'

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 */
Card.Body = elementFactory({ baseClasses: 'card-body' })
Card.Footer = elementFactory({ baseClasses: 'card-footer' })
Card.Header = elementFactory({ baseClasses: 'card-header' })
Card.Title = elementFactory({ baseClasses: 'card-title', tagName: 'h4' })

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

export default function Card({ As, className, children, ...other }) {
  className = classNames('card', className)

  return (
    <As className={className} {...other}>
      {children}
    </As>
  )
}
