import { Children } from 'react'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * [ListGroup component 📝](https://componentry.design/components/list-group)
 */
export default function ListGroup(props) {
  // Lists check first child (only first child!) to see if it has actions, and
  // if it does, it's not a `li` so we render a `ul`.
  const child = Children.toArray(props.children)[0]
  // We have to be careful of children like text nodes with this check
  const childProps = child && child.props ? child.props : {}

  return elem({
    as: childProps.href || childProps.onClick ? 'div' : 'ul',
    elemClassName: 'list-group',
    ...useTheme('ListGroup'),
    ...props,
  })
}
ListGroup.displayName = 'ListGroup'

/**
 * [ListGroup item component 📝](https://componentry.design/components/list-group)
 */
ListGroup.Item = function ListGroupItem(props) {
  const { active, color, ...rest } = { ...useTheme('ListGroupItem'), ...props }
  const { href, onClick } = rest

  return elem({
    /* eslint-disable no-nested-ternary */
    as: href || onClick ? (href ? 'a' : 'button') : 'li',
    // List items always have the `list-group-item` class, and items that are
    // actionable (buttons/anchors) have the `list-group-action-item` modifier
    // class added with additional required styles.
    elemClassName: {
      active,
      disabled: rest.disabled,
      'list-group-item': true,
      'list-group-action-item': href || onClick,
      [`list-group-item-${color}`]: color,
    },
    ...rest,
  })
}
ListGroup.Item.displayName = 'ListGroupItem'
