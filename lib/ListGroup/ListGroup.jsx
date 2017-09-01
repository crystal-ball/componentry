import React, { Children } from 'react'
import { func, node, oneOfType } from 'prop-types'

import ListGroupItem from './ListGroupItem'
import elementFactory from '../utils/element-factory'

const Container = elementFactory({ classes: 'list-group' })

ListGroup.Item = ListGroupItem

ListGroup.propTypes = {
  As: oneOfType([func, node]),
  children: node
}

ListGroup.defaultProps = {
  As: null,
  children: null
}

/**
 * To Document:
 * - There are different wrappers for clickable vs non-clickable list groups. (this
 *   seems less than ideal Bootstrap, can we always do a div?)
 * - Only the first child is checked for an href or onClick for perf. If it is variable,
 *   (which is probably not good in the first place), pass a specific As.
 */
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

  return <Container As={As} {...rest} />
}
