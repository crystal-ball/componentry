import { Children } from 'react'
import elem from '../elem-factory'
import withTheme from '../withTheme'

/**
 * List checks first child (only first child!) to see if it has actions, and if
 * it does, it's not a `li` so we render a `ul`.
 */

const List = withTheme('List', props => {
  const child = Children.toArray(props.children)[0]
  // We have to be careful of children like text nodes with this check
  const childProps = child && child.props ? child.props : {}

  return elem({
    defaultAs: childProps.href || childProps.onClick ? 'div' : 'ul',
    classes: 'list-group',
    ...props,
  })
})

/**
 * List items always have the `list-group-item` class, and items that are
 * actionable (buttons/anchors) have the `list-group-item-action` modifier class
 * added with additional required styles.
 */
const Item = withTheme('ListItem', ({ active, color, ...rest }) => {
  const { href, onClick } = rest

  return elem({
    /* eslint-disable no-nested-ternary */
    defaultAs: href || onClick ? (href ? 'a' : 'button') : 'li',
    classes: {
      active,
      disabled: rest.disabled,
      'list-group-item': true,
      'list-group-item-action': href || onClick,
      [`list-group-item-${color}`]: color,
    },
    ...rest,
  })
})

List.Item = Item
export default List
