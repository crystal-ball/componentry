import { activeContainerBuilder } from '../utils/active-container-component-builder'
import { activeActionBuilder } from '../utils/active-action-component-builder'
import { activeContentBuilder } from '../utils/active-content-component-builder'
import {
  BaseActiveActionProps,
  BaseActiveContainerProps,
  BaseActiveContentProps,
  BaseProps,
} from '../utils/base-types'

export interface DropdownProps
  extends BaseActiveContainerProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

export interface DropdownActionProps
  extends BaseActiveActionProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {
  /** Display variant */
  variant?: 'primary'
}

export interface DropdownContentProps
  extends BaseActiveContentProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
  /** Display variant */
  variant?: 'primary'
}

export interface DropdownItemProps
  extends BaseActiveActionProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {
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
 */
export const Dropdown = activeContainerBuilder<DropdownProps>('Dropdown', {
  clickEvents: true,
  direction: 'bottom',
  escEvents: true,
}) as Dropdown

Dropdown.Action = activeActionBuilder<DropdownActionProps>('DropdownAction', {
  aria: { expanded: true, haspopup: true, id: true },
})

Dropdown.Content = activeContentBuilder<DropdownContentProps>('DropdownContent', {
  aria: { labelledby: true, hidden: true },
})

Dropdown.Item = activeActionBuilder<DropdownItemProps>('DropdownItem')
