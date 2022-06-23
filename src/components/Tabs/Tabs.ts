import React from 'react'
import { activeActionBuilder } from '../../utils/active-action-component-builder'
import { activeContainerBuilder } from '../../utils/active-container-component-builder'
import { activeContentBuilder } from '../../utils/active-content-component-builder'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
} from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { staticComponent } from '../../utils/static-component-builder'
import { UtilityProps } from '../../utils/utility-classes'
import { Link } from '../Link/Link'
import { useThemeProps } from '../Provider/Provider'

export interface TabsProps
  extends ActiveContainerBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

export interface TabsActionsContainerProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Pill style tabs */
  pills?: boolean // TODO: This should be a variant on Tabs
}

export interface TabsActionProps
  extends ActiveActionBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface TabsContentContainerProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

export interface TabsContentProps
  extends ActiveContentBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Display variant */
  variant?: 'primary'
}

export interface Tabs {
  (props: TabsProps): React.ReactElement
  /**
   * [Tabs actions container component 📝](https://componentry.design/components/tabs)
   */
  ActionsContainer: React.FC<TabsActionsContainerProps>
  /**
   * [Tabs action component 📝](https://componentry.design/components/tabs)
   */
  Action: React.FC<TabsActionProps>
  /**
   * [Tabs content container component 📝](https://componentry.design/components/tabs)
   */
  ContentContainer: React.FC<TabsContentContainerProps>
  /**
   * [Tabs content component 📝](https://componentry.design/components/tabs)
   */
  Content: React.FC<TabsContentProps>
}

/**
 * [Tabs component 📝](https://componentry.design/components/tabs)
 * @experimental
 */
export const Tabs = activeContainerBuilder<TabsProps>('Tabs') as Tabs

const ActionsContainer: React.FC<TabsActionsContainerProps> = (props) => {
  const { pills, ...rest } = {
    ...useThemeProps('TabsActionsContainer'),
    ...props,
  }

  return element({
    role: 'tablist',
    componentCx: [
      'C9Y-TabsContainer',
      {
        'C9Y-TabsContainer-pills': pills,
      },
    ],
    ...rest,
  })
}
ActionsContainer.displayName = 'TabsActionsContainer'
Tabs.ActionsContainer = ActionsContainer

Tabs.Action = activeActionBuilder<TabsActionProps>('TabsAction', {
  aria: { selected: true, role: 'tab' },
  // Tabs can only activate, they never deactivate when clicked
  action: 'activate',
  defaultAs: Link,
})

Tabs.ContentContainer = staticComponent<TabsContentContainerProps>('TabsContentContainer')

Tabs.Content = activeContentBuilder<TabsContentProps>('TabsContent', {
  aria: { hidden: true, role: 'tabpanel' },
})
