import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

import { TabNav } from '../Navs/Navs'

const Tab = activeContainer('tab', { name: 'tabs' })
Tab.Nav = TabNav

const TabContentContainer = props =>
  elem({
    classes: 'tabs-panes-container',
    ...useTheme('TabContentContainer'),
    ...props,
  })
Tab.ContentContainer = TabContentContainer

Tab.Content = activeContent('tab', {
  arias: { hidden: true, role: 'tabpanel' },
  baseClass: 'tabs-panes-pane', // tab-content-pane
})

// TODO: This should probably be defaultAs a nav item... issues:
// If making a tab with anchors, these should have class 'nav-link'
Tab.Trigger = activeTrigger('tab', {
  arias: { selected: true, role: 'tab' },
  // TODO: Should this really have default nav-link and nav-item classes??
  baseClass: 'tabs-nav-tab',
  // Tabs can only activate, they never deactivate when clicked
  triggerType: 'activate',
  // Do NOT include default btn styles in tabs
  btnStyles: false,
})

export default Tab
