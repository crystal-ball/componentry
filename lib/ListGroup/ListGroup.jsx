// @flow
/* eslint-disable no-param-reassign */
import { Children, createElement } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'

import ListGroupItem from './ListGroupItem'

/**
 * To Document:
 * - There are different wrappers for clickable vs non-clickable list groups. (this
 *   seems less than ideal Bootstrap, can we always do a div?)
 * - Only the first child is checked for an href or onClick for perf. If it is variable,
 *   (which is probably not good in the first place), pass a specific `as`.
 */

type Props = {
  as?: string,
  children?: Node,
  className?: string
}

const ListGroup = ({ as, className, children, ...rest }: Props): Element<any> => {
  // If children have an href or onClick, we need a div wrapper b/c children will
  // be either <button> or <a> elements and not <li> elements
  if (as === undefined) {
    const child = Children.toArray(children)[0]
    if (child && (child.props.href || child.props.onClick)) as = 'div'
  }

  return createElement(
    // Default to ul if not specified or not an action type list
    as || 'ul',
    { className: classNames('list-group', className), ...rest },
    children
  )
}

ListGroup.Item = ListGroupItem

export default ListGroup
