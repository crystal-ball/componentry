import { Children } from 'react'
import { func, node, oneOfType } from 'prop-types'

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
  As: oneOfType([func, node]),
  children: node
}

ListGroup.defaultProps = {
  As: null,
  children: null
}

export default function ListGroup({ As, ...rest }) {
  let children = rest.children

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

  return renderContainer({ As, className: 'list-group', ...rest })
}
