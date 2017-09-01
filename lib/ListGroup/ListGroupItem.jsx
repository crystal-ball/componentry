import React from 'react'
import { bool, func, node, string, oneOfType } from 'prop-types'
import classNames from 'classnames'

import Button from '../Button'
import elementFactory from '../utils/element-factory'

// Default Container is li, override to a button or anchor when necessary
const Container = elementFactory({ classes: 'list-group-item', tag: 'li' })

ListGroupItem.propTypes = {
  As: oneOfType([func, node]),
  active: bool,
  className: string
}

ListGroupItem.defaultProps = {
  As: null,
  active: false,
  className: ''
}

/**
 * List group item of `li`, `a` or `Button`.
 */
export default function ListGroupItem({ As, active, className, ...rest }) {
  className = classNames(className, {
    active,
    'list-group-item-action': rest.href || rest.onClick
  })

  // If there isn't an As config and component has action, assign correct element
  if (!As && (rest.href || rest.onClick)) As = rest.href ? 'a' : Button

  return <Container As={As} className={className} {...rest} />
}
