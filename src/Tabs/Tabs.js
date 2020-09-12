import { useTheme } from '../Theme/Theme'
import { activeContainerComponent } from '../factories/active-container-component'
import { activeContentComponent } from '../factories/active-content-component'
import { activeTriggerComponent } from '../factories/active-trigger-component'
import { staticComponent } from '../factories/static-component'
import { element } from '../factories/element'
import { navClasses } from '../utils/componentry'

/**
 * [Tabs component 📝](https://componentry.design/components/tabs)
 */
export const Tabs = activeContainerComponent('tabs', { name: 'tabs' })

/**
 * [Tabs content container component 📝](https://componentry.design/components/tabs)
 */
Tabs.ContentContainer = staticComponent('TabsContentContainer', {
  componentCx: 'tabs-content-container',
})

/**
 * [Tabs content component 📝](https://componentry.design/components/tabs)
 */
Tabs.Content = activeContentComponent('tabs', {
  arias: { hidden: true, role: 'tabpanel' },
  variant: 'tabs-content',
})

/**
 * [Tabs nav component 📝](https://componentry.design/components/tabs)
 */
Tabs.TriggersContainer = function TriggersContainer(props) {
  return element({
    role: 'tablist',
    componentCx: navClasses('tabs-triggers-container', props),
    ...useTheme('TriggersContainer'),
    ...props,
  })
}
Tabs.TriggersContainer.displayName = 'TriggersContainer'

/**
 * [Tabs trigger component 📝](https://componentry.design/components/tabs)
 */
Tabs.Trigger = activeTriggerComponent('tabs', {
  arias: { selected: true, role: 'tab' },
  // Tabs can only activate, they never deactivate when clicked
  action: 'activate',
})
