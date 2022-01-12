import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../../utils/types'
import { element } from '../../utils/element-creator'

export interface ListProps extends ComponentBaseProps<'div'> {
  /** Removes list margins  */
  flush?: boolean
}

export interface ListItemProps extends ComponentBaseProps<'div'> {
  /** Sets active styles */
  active?: boolean
  /** Sets the item as disabled */
  disabled?: boolean
  /** Item href */
  href?: string
  /** Variant color */
  color?: 'primary'
  /** Item routing location */
  to?: string
}

export interface List {
  (props: ListProps): React.ReactElement
  displayName: 'List'
  /**
   * [Input description component 📝](https://componentry.design/components/input)
   */
  Item: React.FC<ListItemProps>
}

/**
 * [List component 📝](https://componentry.design/components/list)
 * @experimental
 */
export const List: List = (props) => {
  const { flush, ...rest } = { ...useTheme('List'), ...props }

  return element('List', {
    componentCx: { 'list-flush': flush },
    ...rest,
  })
}
List.displayName = 'List'

/**
 * [List item component 📝](https://componentry.design/components/list)
 */
List.Item = function ListItem(props) {
  const { active, color, disabled, ...rest } = { ...useTheme('ListItem'), ...props }

  return element('ListItem', {
    as: rest.href || rest.to ? 'a' : 'button',
    componentCx: {
      [`list-item-${color}`]: color,
      active,
      disabled,
    },
    disabled,
    ...rest,
  })
}
List.Item.displayName = 'ListItem'
