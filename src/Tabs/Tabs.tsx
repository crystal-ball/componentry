import { useTheme } from '../Theme/Theme'
import { activeContainerBuilder } from '../utils/active-container-component-builder'
import { activeActionComponent } from '../utils/active-action-component-builder'
import { activeContentComponent } from '../utils/active-content-component-builder'
import {
  BaseActiveActionProps,
  BaseActiveContainerProps,
  BaseActiveContentProps,
  BaseProps,
} from '../utils/base-types'
import { navClasses } from '../utils/componentry'
import { element } from '../utils/element-creator'
import { staticComponent } from '../utils/static-component-builder'

export interface TabsProps
  extends BaseActiveContainerProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

export interface TabsActionsContainerProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
  fill?: boolean
  justify?: boolean
  pills?: boolean
  vertical?: boolean
}

export interface TabsActionProps
  extends BaseActiveActionProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {
  /** Display variant */
  variant?: 'primary'
}

export interface TabsContentContainerProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

export interface TabsContentProps
  extends BaseActiveContentProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
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
 */
export const Tabs = activeContainerBuilder<TabsProps>('Tabs') as Tabs

const ActionsContainer: React.FC<TabsActionsContainerProps> = (props) => {
  return element({
    role: 'tablist',
    componentCx: navClasses('tabs-actions-container', props),
    ...useTheme<TabsActionsContainerProps>('TabsActionsContainer'),
    ...props,
  })
}
ActionsContainer.displayName = 'TabsActionsContainer'
Tabs.ActionsContainer = ActionsContainer

Tabs.Action = activeActionComponent<TabsActionProps>('TabsAction', {
  aria: { selected: true, role: 'tab' },
  // Tabs can only activate, they never deactivate when clicked
  action: 'activate',
})

Tabs.ContentContainer = staticComponent<TabsContentContainerProps>(
  'TabsContentContainer',
  {
    componentCx: '🅲-tabs-content-container',
  },
)

Tabs.Content = activeContentComponent<TabsContentProps>('TabsContent', {
  aria: { hidden: true, role: 'tabpanel' },
})
