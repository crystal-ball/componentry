import { useTheme } from '../Theme/Theme'
import { activeContainerBuilder } from '../../utils/active-container-component-builder'
import { activeActionBuilder } from '../../utils/active-action-component-builder'
import { activeContentBuilder } from '../../utils/active-content-component-builder'
import {
  type ActiveActionBaseProps,
  type ActiveContainerBaseProps,
  type ActiveContentBaseProps,
  type ComponentBaseProps,
} from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { staticComponent } from '../../utils/static-component-builder'
import { Link } from '../Link/Link'

export interface TabsProps extends ActiveContainerBaseProps, ComponentBaseProps<'div'> {}

export interface TabsActionsContainerProps extends ComponentBaseProps<'div'> {
  /** Pill style tabs */
  pills?: boolean // TODO: This should be a variant on Tabs
}

export interface TabsActionProps
  extends ActiveActionBaseProps,
    ComponentBaseProps<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface TabsContentContainerProps extends ComponentBaseProps<'div'> {}

export interface TabsContentProps
  extends ActiveContentBaseProps,
    ComponentBaseProps<'div'> {
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
    ...useTheme<TabsActionsContainerProps>('TabsActionsContainer'),
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
