import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import { useTheme } from '../Theme/Theme'
import elem from '../elem-factory'
import { navClasses } from '../utils/componentry'

/** Tabs component */
const Tabs = activeContainer('tabs', { name: 'tabs' })
export default Tabs

/** Tabs content container component */
Tabs.ContentContainer = function TabsContentContainer(props) {
  return elem({
    elemClassName: 'tabs-content-container',
    ...useTheme('TabsContentContainer'),
    ...props,
  })
}
Tabs.ContentContainer.displayName = 'TabsContentContainer'

/** Tabs content component */
Tabs.Content = activeContent('tab', {
  arias: { hidden: true, role: 'tabpanel' },
  baseClass: 'tabs-content',
})
Tabs.Content.displayName = 'TabsContent'

/** Tabs nav component */
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

// TODO: This should probably be defaultAs a nav item... issues:
// If making a tab with anchors, these should have class 'nav-link'
/** Tabs trigger component */
Tabs.Trigger = activeTrigger('tab', {
  arias: { selected: true, role: 'tab' },
  // TODO: Should this really have default nav-link and nav-item classes??
  baseClass: 'tabs-trigger',
  // Tabs can only activate, they never deactivate when clicked
  action: 'activate',
})
Tabs.Trigger.displayName = 'TabsTrigger'
