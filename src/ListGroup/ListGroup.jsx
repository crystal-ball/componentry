// @flow
import { Children } from 'react'

import { BaseButton } from '../Button/Button'
import elementFactory, { type ElementProps } from '../component-factories/element'

/**
 * 🤔 There are different wrappers for clickable vs non-clickable list groups. (this
 * seems less than ideal Bootstrap, can we always do a div?)
 */

export type Props = ElementProps

const ListGroup = elementFactory('ListGroup', props => {
  const child = Children.toArray(props.children)[0]

  return {
    className: 'list-group',
    tag: child && (child.props.href || child.props.onClick) ? 'div' : 'ul',
    ...props,
  }
})

const ListGroupItem = elementFactory(
  'ListGroupItem',
  ({ active, color, ...rest }) => {
    const { href, onClick } = rest

    return {
      className: {
        'list-group-item': true,
        active,
        'list-group-item-action': href || onClick,
        [`list-group-item-${color}`]: color,
      },
      /* eslint-disable no-nested-ternary */
      tag: href || onClick ? (href ? 'a' : BaseButton) : 'li',
      ...rest,
    }
  },
)

// $FlowFixMe
ListGroup.Item = ListGroupItem
export default ListGroup
