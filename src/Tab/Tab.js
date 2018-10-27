import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import elem from '../elem-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

import { TabNav } from '../Navs/Navs'

const Tab = activeContainer({ name: 'tabs' })

Tab.Content = withActive(
  withTheme(
    'TabContent',
    activeContent({
      arias: { hidden: true, role: 'tabpanel' },
      classes: 'tabs-panes-pane',
    }),
  ),
)

Tab.ContentContainer = withTheme('TabContentContainer', props =>
  elem({
    classes: 'tabs-panes-container',
    ...props,
  }),
)

Tab.Nav = TabNav

// TODO: This should probably be defaultAs a nav item... issues:
// If making a tab with anchors, these should have class 'nav-link'
Tab.Trigger = withActive(
  withTheme(
    'TabTrigger',
    activeTrigger({
      arias: { selected: true, role: 'tab' },
      // TODO: Should this really have default nav-link and nav-item classes??
      classes: 'tabs-nav-tab',
      // Tabs can only activate, they never deactivate when clicked
      triggerType: 'activate',
      // Do NOT include default btn styles in tabs
      btnStyles: false,
    }),
  ),
)

export default withTheme('Tab', Tab)
