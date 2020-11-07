import { activeContainerBuilder } from '../utils/active-container-component-builder'
import { activeActionComponent } from '../utils/active-action-component-builder'
import { activeContentComponent } from '../utils/active-content-component-builder'
import {
  BaseActiveActionProps,
  BaseActiveContainerProps,
  BaseActiveContentProps,
  BaseProps,
} from '../utils/base-types'
import { DrawerContentProps } from '../Drawer/Drawer'

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
  Content: React.FC<DrawerContentProps>
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

Dropdown.Action = activeActionComponent<DropdownActionProps>('DropdownAction', {
  aria: { expanded: true, haspopup: true, id: true },
})

Dropdown.Content = activeContentComponent<DropdownContentProps>('DropdownContent', {
  aria: { labelledby: true, hidden: true },
})

Dropdown.Item = activeActionComponent<DropdownItemProps>('DropdownItem')
