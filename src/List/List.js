// @flow
import { Children } from 'react'
import elem from '../elem-factory'
import withTheme from '../withTheme'

/**
 * 🤔 There are different wrappers for clickable vs non-clickable list groups. (this
 * seems less than ideal Bootstrap, can we always do a div?)
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

const Item = withTheme('ListItem', ({ active, color, ...rest }) => {
  const { href, onClick } = rest

  return elem({
    /* eslint-disable no-nested-ternary */
    defaultAs: href || onClick ? (href ? 'a' : 'button') : 'li',
    classes: {
      active,
      'list-group-item': true,
      'list-group-item-action': href || onClick,
      [`list-group-item-${color}`]: color,
    },
    ...rest,
  })
})
List.Item = Item

export default List
