import { useTheme } from '../Theme/Theme'
import activeContainer from '../factories/active-container-component'
import activeContent from '../factories/active-content-component'
import activeTrigger from '../factories/active-trigger-component'
import element from '../element'
import staticComponent from '../factories/static-component'
import { navClasses } from '../utils/componentry'

/**
 * [Tabs component 📝](https://componentry.design/components/tabs)
 */
const Tabs = activeContainer('tabs', { name: 'tabs' })
export default Tabs

/**
 * [Tabs content container component 📝](https://componentry.design/components/tabs)
 */
Tabs.ContentContainer = staticComponent('TabsContentContainer', {
  componentCx: 'tabs-content-container',
})

/**
 * [Tabs content component 📝](https://componentry.design/components/tabs)
 */
Tabs.Content = activeContent('tabs', {
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
Tabs.Trigger = activeTrigger('tabs', {
  arias: { selected: true, role: 'tab' },
  // Tabs can only activate, they never deactivate when clicked
  action: 'activate',
})
