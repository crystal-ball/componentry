import React from 'react'
import { createActiveAction } from '../../utils/create-active-action-component'
import { createActiveContainer } from '../../utils/create-active-container-component'
import { createActiveContent } from '../../utils/create-active-content-component'
import { createElement } from '../../utils/create-element'
import { createStaticComponent } from '../../utils/create-static-component'
import { UtilityProps } from '../../utils/utility-props'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
} from '../Active/active-types'
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
export const Tabs = createActiveContainer('Tabs') as Tabs

const ActionsContainer: React.FC<TabsActionsContainerProps> = (props) => {
  const { pills, ...rest } = {
    ...useThemeProps('TabsActionsContainer'),
    ...props,
  }

  return createElement({
    role: 'tablist',
    componentClassName: [
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

Tabs.Action = createActiveAction('TabsAction', {
  aria: { selected: true, role: 'tab' },
  // Tabs can only activate, they never deactivate when clicked
  action: 'activate',
  defaultAs: Link,
})

Tabs.ContentContainer =
  createStaticComponent<TabsContentContainerProps>('TabsContentContainer')

Tabs.Content = createActiveContent('TabsContent', {
  aria: { hidden: true, role: 'tabpanel' },
})
