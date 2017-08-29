import React from 'react'

import elementFactory from '../utils/element-factory'

const Container = elementFactory({ className: 'card' })

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 */
Card.Body = elementFactory({ className: 'card-body' })
Card.Footer = elementFactory({ className: 'card-footer' })
Card.Header = elementFactory({ className: 'card-header' })
Card.Title = elementFactory({ className: 'card-title', tagName: 'h4' })

export default function Card(props) {
  return <Container {...props} />
}
