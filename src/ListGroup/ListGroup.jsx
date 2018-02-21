// @flow
import { Children } from 'react'

import elementFactory from '../component-factories/element-factory'
import itemFactory from '../component-factories/item-factory'
import type { ElementProps } from '../component-factories/element-factory'

/**
 * 🤔 There are different wrappers for clickable vs non-clickable list groups. (this
 * seems less than ideal Bootstrap, can we always do a div?)
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

const ListGroupItem = itemFactory({
  name: 'ListGroupItem',
  defaultClasses: 'list-group-item',
  triggerClass: 'list-group-item-action',
})

// $FlowFixMe
ListGroup.Item = ListGroupItem
export default ListGroup
