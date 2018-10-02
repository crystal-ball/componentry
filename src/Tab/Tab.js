// @flow
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import elem from '../elem-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

import { TabNav } from '../Navs/Navs'

const ContentContainer = withTheme('TabContentContainer', props =>
  elem({
    classes: 'tabs-panes-container',
    ...props,
  }),
)

const Content = activeContent({
  arias: { hidden: true, role: 'tabpanel' },
  classes: 'tabs-panes-pane',
})

// TODO: This should probably be defaultAs a nav item... issues:
// If making a tab with anchors, these should have class 'nav-link'
const Trigger = activeTrigger({
  arias: { selected: true, role: 'tab' },
  // TODO: Should this really have default nav-link and nav-item classes??
  classes: 'tabs-nav-tab',
  // Tabs can only activate, they never deactivate when clicked
  triggerType: 'activate',
  // Do NOT include default btn styles in tabs
  btnStyles: false,
})

const Tab = activeContainer({
  Content: withActive(withTheme('TabContent', Content)),
  Trigger: withActive(withTheme('TabTrigger', Trigger)),
  classes: 'tabs',
})

Tab.Nav = TabNav
Tab.ContentContainer = ContentContainer

export default withTheme('Tab', Tab)
