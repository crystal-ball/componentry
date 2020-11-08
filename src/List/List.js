import { Children } from 'react'
import { useTheme } from '../Theme/Theme'
import { element } from '../utils/element-creator'

/**
 * [List component 📝](https://componentry.design/components/list)
 */
export function List(props) {
  const { flush = false, ...rest } = { ...useTheme('List'), ...props }

  // Lists check first child (only first child!) to see if it has actions, and
  // if it does, it's not a `li` so we render a `ul`.
  const child = Children.toArray(props.children)[0]
  // We have to be careful of children like text nodes with this check
  const childProps = child && child.props ? child.props : {}

  return element({
    as: childProps.href || childProps.onClick ? 'div' : 'ul',
    componentCx: ['list', { 'list-flush': flush }],
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

  return element({
    as: href || onClick ? (href ? 'a' : 'button') : 'li',
    // List items always have the `list-item` class, and items that are
    // actionable (buttons/anchors) have the `list-action-item` modifier
    // class added with additional required styles.
    componentCx: {
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
