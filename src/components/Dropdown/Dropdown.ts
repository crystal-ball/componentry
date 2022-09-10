import React from 'react'
import { activeActionBuilder } from '../../utils/active-action-component-builder'
import { activeContainerBuilder } from '../../utils/active-container-component-builder'
import { activeContentBuilder } from '../../utils/active-content-component-builder'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
} from '../../utils/base-types'
import { UtilityProps } from '../../utils/utility-classes'
import { Button } from '../Button/Button'

export interface DropdownProps
  extends ActiveContainerBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

export interface DropdownActionProps
  extends ActiveActionBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface DropdownContentProps
  extends ActiveContentBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Display variant */
  variant?: 'primary'
}

export interface DropdownItemProps
  extends ActiveActionBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'button'> {
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
export const Dropdown = activeContainerBuilder('Dropdown', {
  clickEvents: true,
  direction: 'bottom',
  escEvents: true,
}) as Dropdown

Dropdown.Action = activeActionBuilder('DropdownAction', {
  aria: { expanded: true, haspopup: true, id: true },
  defaultAs: Button,
})

Dropdown.Content = activeContentBuilder('DropdownContent', {
  aria: { labelledby: true, hidden: true },
})

Dropdown.Item = activeActionBuilder('DropdownItem')
