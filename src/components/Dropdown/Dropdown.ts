import { activeContainerBuilder } from '../../utils/active-container-component-builder'
import { activeActionBuilder } from '../../utils/active-action-component-builder'
import { activeContentBuilder } from '../../utils/active-content-component-builder'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
  ComponentBaseProps,
} from '../../utils/types'
import { Button } from '../Button/Button'

export interface DropdownProps
  extends ActiveContainerBaseProps,
    ComponentBaseProps<'div'> {}

export interface DropdownActionProps
  extends ActiveActionBaseProps,
    ComponentBaseProps<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface DropdownContentProps
  extends ActiveContentBaseProps,
    ComponentBaseProps<'div'> {
  /** Display variant */
  variant?: 'primary'
}

export interface DropdownItemProps
  extends ActiveActionBaseProps,
    ComponentBaseProps<'button'> {
  /** Display variant */
  variant?: 'unstyled'
}

export interface Dropdown {
  (props: DropdownProps): React.ReactElement
  /**
   * [Dropdown action component 📝](https://componentry.design/components/dropdown)
   */
  Action: React.FC<DropdownActionProps>
  /**
   * [Dropdown content component 📝](https://componentry.design/components/dropdown)
   */
  Content: React.FC<DropdownContentProps>
  /**
   * [Dropdown item component 📝](https://componentry.design/components/dropdown)
   */
  Item: React.FC<DropdownItemProps>
}

/**
 * [Dropdown component 📝](https://componentry.design/components/dropdown)
 * @experimental
 */
export const Dropdown = activeContainerBuilder<DropdownProps>('Dropdown', {
  clickEvents: true,
  direction: 'bottom',
  escEvents: true,
}) as Dropdown

Dropdown.Action = activeActionBuilder<DropdownActionProps>('DropdownAction', {
  aria: { expanded: true, haspopup: true, id: true },
  defaultAs: Button,
})

Dropdown.Content = activeContentBuilder<DropdownContentProps>('DropdownContent', {
  aria: { labelledby: true, hidden: true },
})

Dropdown.Item = activeActionBuilder<DropdownItemProps>('DropdownItem')
