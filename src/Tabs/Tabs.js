import { useTheme } from '../Theme/Theme'
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import elem from '../elem-factory'
import simpleComponent from '../simple-component-factory'
import { navClasses } from '../utils/componentry'

/**
 * [Tabs component 📝](https://componentry.design/components/tabs)
 */
const Tabs = activeContainer('tabs', { name: 'tabs' })
export default Tabs

/**
 * [Tabs content container component 📝](https://componentry.design/components/tabs)
 */
Tabs.ContentContainer = simpleComponent('TabsContentContainer', {
  elemClassName: 'tabs-content-container',
})

/**
 * [Tabs content component 📝](https://componentry.design/components/tabs)
 */
Tabs.Content = activeContent('tabs', {
  arias: { hidden: true, role: 'tabpanel' },
  baseClass: 'tabs-content',
})

/**
 * [Tabs nav component 📝](https://componentry.design/components/tabs)
 */
Tabs.Nav = function TabsNav(props) {
  return elem({
    as: 'nav',
    role: 'tablist',
    elemClassName: ['tabs-nav', navClasses(props)],
    ...useTheme('TabsNav'),
    ...props,
  })
}
Tabs.Nav.displayName = 'TabsNav'

/**
 * [Tabs trigger component 📝](https://componentry.design/components/tabs)
 */
Tabs.Trigger = activeTrigger('tabs', {
  arias: { selected: true, role: 'tab' },
  baseClass: 'tabs-trigger',
  // Tabs can only activate, they never deactivate when clicked
  action: 'activate',
})
