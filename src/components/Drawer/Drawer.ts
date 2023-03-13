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
import { Link } from '../Link/Link'

export interface DrawerProps
  extends ActiveContainerBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

export interface DrawerActionProps
  extends ActiveActionBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface DrawerContentProps
  extends ActiveContentBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Display variant */
  variant?: 'primary'
}

export interface Drawer {
  (props: DrawerProps): React.ReactElement
  /**
   * [Drawer action component 📝](https://componentry.design/components/drawer)
   */
  Action: React.FC<DrawerActionProps>
  /**
   * [Drawer content component 📝](https://componentry.design/components/drawer)
   */
  Content: React.FC<DrawerContentProps>
}

/**
 * [Drawer component 📝](https://componentry.design/components/drawer)
 * @experimental
 */
export const Drawer = createActiveContainer('Drawer') as Drawer

Drawer.Action = createActiveAction('DrawerAction', {
  aria: { controls: true, expanded: true },
  defaultAs: Link,
})

Drawer.Content = createActiveContent('DrawerContent', {
  aria: { id: true, hidden: true },
})
