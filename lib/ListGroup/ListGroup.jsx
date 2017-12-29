// @flow
import { Children } from 'react'

import ListGroupItem from './ListGroupItem'
import elementFactory from '../component-factories/element-factory'
import type { ElementProps } from '../component-factories/element-factory'

/**
 * To Document:
 * - There are different wrappers for clickable vs non-clickable list groups. (this
 *   seems less than ideal Bootstrap, can we always do a div?)
 * - Only the first child is checked for an href or onClick for perf. If it is variable,
 *   (which is probably not good in the first place), pass a specific `as`.
 */

export type Props = ElementProps

const ListGroup = elementFactory({
  name: 'ListGroup',
  classes: 'list-group',
  computedTag: props => {
    const child = Children.toArray(props.children)[0]
    return child && (child.props.href || child.props.onClick) ? 'div' : 'ul'
  },
})

// $FlowFixMe
ListGroup.Item = ListGroupItem

export default ListGroup
