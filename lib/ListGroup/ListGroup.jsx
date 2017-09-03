import { Children } from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'

import ListGroupItem from './ListGroupItem'
import { renderContainer } from '../utils/element-factory'

/**
 * To Document:
 * - There are different wrappers for clickable vs non-clickable list groups. (this
 *   seems less than ideal Bootstrap, can we always do a div?)
 * - Only the first child is checked for an href or onClick for perf. If it is variable,
 *   (which is probably not good in the first place), pass a specific As.
 */

ListGroup.Item = ListGroupItem

ListGroup.propTypes = {
  className: string
}

export default function ListGroup({ className, ...rest }) {
  const children = Children.toArray(rest.children)
  let As = 'ul'

  // If children have an href or onClick, we need a div wrapper b/c children will
  // be either <button> or <a> elements and not <li> elements
  if (children && children.length) {
    const { href, onClick } = children[0].props
    if (href || onClick) As = 'div'
  }

  return renderContainer({
    As,
    className: classNames('list-group', className),
    ...rest
  })
}
