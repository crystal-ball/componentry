import React, { Children } from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'

import ListGroupItem from './ListGroupItem'

/**
 * To Document:
 * - There are different wrappers for clickable vs non-clickable list groups. (this
 *   seems less than ideal Bootstrap, can we always do a div?)
 * - Only the first child is checked for an href or onClick for perf. If it is variable,
 *   (which is probably not good in the first place), pass a specific As.
 */
export default function ListGroup({ As, children, className, ...other }) {
  className = classNames('list-group', className)

  // If As has been configured, use it regardless
  if (!As && children) {
    children = Children.toArray(children)
    if (children.length) {
      const { href, onClick } = children[0].props
      // If children have an href or onClick, we need a div wrapper b/c children will
      // be either <button> or <a> elements and not <li> elements
      As = href || onClick ? 'div' : 'ul'
    } else {
      As = 'div'
    }
  } else {
    As = As || 'ul'
  }

  return (
    <As className={className} {...other}>
      {children}
    </As>
  )
}

ListGroup.Item = ListGroupItem

ListGroup.propTypes = {
  As: node,
  children: node,
  className: string
}

ListGroup.defaultProps = {
  As: null,
  children: null,
  className: ''
}
