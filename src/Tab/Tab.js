import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import { useTheme } from '../Theme/Theme'
import elem from '../elem-factory'
import { navClasses } from '../utils/componentry'

const Tab = activeContainer('tab', { name: 'tabs' })

Tab.ContentContainer = function TabContentContainer(props) {
  return elem({
    componentClassNames: 'tabs-panes-container',
    ...useTheme('TabContentContainer'),
    ...props,
  })
}

Tab.Content = activeContent('tab', {
  arias: { hidden: true, role: 'tabpanel' },
  baseClass: 'tabs-panes-pane', // tab-content-pane
})

Tab.Nav = function TabNav(props) {
  return elem({
    as: 'nav',
    role: 'tablist',
    componentClassNames: ['tabs-nav-container', navClasses(props)],
    ...useTheme('TabNav'),
    ...props,
  })
}

// TODO: This should probably be defaultAs a nav item... issues:
// If making a tab with anchors, these should have class 'nav-link'
Tab.Trigger = activeTrigger('tab', {
  arias: { selected: true, role: 'tab' },
  // TODO: Should this really have default nav-link and nav-item classes??
  baseClass: 'tabs-nav-tab',
  // Tabs can only activate, they never deactivate when clicked
  triggerType: 'activate',
})

export default Tab
