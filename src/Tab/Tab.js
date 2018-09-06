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
    classes: 'tab-panes-container',
    ...props,
  }),
)

const Content = activeContent({
  arias: { hidden: true, role: 'tabpanel' },
  classes: 'tab-pane',
})

const Trigger = activeTrigger({
  arias: { selected: true, role: 'tab' },
  // TODO: Should this really have default nav-link and nav-item classes??
  classes: 'tab-toggle nav-link nav-item',
  // Tabs can only activate, they never deactivate when clicked
  triggerType: 'activate',
})
Trigger.defaultProps = {
  // Componentry uses <Button /> components for the tab triggers instead of
  // anchors like Bootstrap. Default the button to have the link theme style to
  // look like an anchor
  color: 'link',
}

const Tab = activeContainer({
  Content: withActive(withTheme('TabContent', Content)),
  Trigger: withActive(withTheme('TabTrigger', Trigger)),
  classes: 'tab',
})

Tab.Nav = TabNav
Tab.ContentContainer = ContentContainer

export default withTheme('Tab', Tab)
