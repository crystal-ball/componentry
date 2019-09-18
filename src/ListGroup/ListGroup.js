import { Children } from 'react'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * List checks first child (only first child!) to see if it has actions, and if
 * it does, it's not a `li` so we render a `ul`.
 */
export default function ListGroup(props) {
  const child = Children.toArray(props.children)[0]
  // We have to be careful of children like text nodes with this check
  const childProps = child && child.props ? child.props : {}

  return elem({
    as: childProps.href || childProps.onClick ? 'div' : 'ul',
    componentClassNames: 'list-group',
    ...useTheme('ListGroup'),
    ...props,
  })
}

/**
 * List items always have the `list-group-item` class, and items that are
 * actionable (buttons/anchors) have the `list-group-item-action` modifier class
 * added with additional required styles.
 */
function ListGroupItem(props) {
  const { active, color, ...rest } = { ...useTheme('ListGroupItem'), ...props }
  const { href, onClick } = rest

  return elem({
    /* eslint-disable no-nested-ternary */
    as: href || onClick ? (href ? 'a' : 'button') : 'li',
    componentClassNames: {
      active,
      disabled: rest.disabled,
      'list-group-item': true,
      'list-group-item-action': href || onClick,
      [`list-group-item-${color}`]: color,
    },
    ...rest,
  })
}
ListGroup.Item = ListGroupItem