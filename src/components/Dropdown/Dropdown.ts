import React from 'react'
import { createActiveAction } from '../../utils/create-active-action-component'
import { createActiveContainer } from '../../utils/create-active-container-component'
import { createActiveContent } from '../../utils/create-active-content-component'
import { UtilityProps } from '../../utils/utility-props'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
} from '../Active/active-types'
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
export const Dropdown = createActiveContainer('Dropdown', {
  clickEvents: true,
  direction: 'bottom',
  escEvents: true,
}) as Dropdown

Dropdown.Action = createActiveAction('DropdownAction', {
  aria: { expanded: true, haspopup: true, id: true },
  defaultAs: Button,
})

Dropdown.Content = createActiveContent('DropdownContent', {
  aria: { labelledby: true, hidden: true },
})

Dropdown.Item = createActiveAction('DropdownItem')
