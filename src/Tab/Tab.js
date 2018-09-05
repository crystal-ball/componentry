// @flow
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import elem from '../elem-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

import { TabNav } from '../Navs/Navs'

const Content = activeContent({
  arias: { hidden: true, role: 'tabpanel' },
  classes: 'tab-pane',
  element: 'tab',
})

const Trigger = activeTrigger({
  arias: { selected: true, role: 'tab' },
  classes: 'nav-link nav-item',
  element: 'tab',
  // Tabs can only activate, they never deactivate when clicked
  triggerType: 'activate',
})
Trigger.defaultProps = {
  // Componentry uses <Button /> components for the tab triggers instead of
  // anchors like Bootstrap. Default the button to have the link theme style to
  // look like an anchor
  color: 'link',
}

const ContentContainer = withTheme('TabContentContainer', props =>
  elem({
    classes: 'tab-content',
    ...props,
  }),
)

const Tab = activeContainer({
  Content: withActive(withTheme('TabContent', Content)),
  Trigger: withActive(withTheme('TabTrigger', Trigger)),
  element: 'tab',
})

Tab.Nav = TabNav
Tab.ContentContainer = ContentContainer

export default withTheme('Tab', Tab)
