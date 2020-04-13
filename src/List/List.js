import { Children } from 'react'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * [List component 📝](https://componentry.design/components/list)
 */
export default function List(props) {
  const { flush = false, ...rest } = { ...useTheme('List'), ...props }

  // Lists check first child (only first child!) to see if it has actions, and
  // if it does, it's not a `li` so we render a `ul`.
  const child = Children.toArray(props.children)[0]
  // We have to be careful of children like text nodes with this check
  const childProps = child && child.props ? child.props : {}

  return elem({
    as: childProps.href || childProps.onClick ? 'div' : 'ul',
    elemClassName: ['list', { 'list-flush': flush }],
    ...rest,
  })
}
List.displayName = 'List'

/**
 * [List item component 📝](https://componentry.design/components/list)
 */
List.Item = function ListItem(props) {
  const { active = false, color = '', ...rest } = { ...useTheme('ListItem'), ...props }
  const { href, onClick } = rest

  return elem({
    /* eslint-disable no-nested-ternary */
    as: href || onClick ? (href ? 'a' : 'button') : 'li',
    // List items always have the `list-item` class, and items that are
    // actionable (buttons/anchors) have the `list-action-item` modifier
    // class added with additional required styles.
    elemClassName: {
      active,
      'disabled': rest.disabled,
      'list-item': true,
      'list-action-item': href || onClick,
      [`list-item-${color}`]: color,
    },
    ...rest,
  })
}
List.Item.displayName = 'ListItem'
