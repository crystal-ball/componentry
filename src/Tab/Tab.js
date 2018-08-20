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
const withActiveContent = withActive(withTheme('TabContent', Content))

const Trigger = activeTrigger({
  arias: { selected: true, role: 'tab' },
  classes: 'nav-link nav-item',
  element: 'tab',
  // Tabs can only activate, they never deactivate when clicked
  triggerType: 'activate',
})
const withActiveTrigger = withActive(withTheme('TabTrigger', Trigger))
withActiveTrigger.defaultProps = {
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

const Tab = withTheme(
  'Tab',
  activeContainer({
    Content: withActiveContent,
    Trigger: withActiveTrigger,
    element: 'tab',
  }),
)

Tab.Content = withActiveContent
Tab.Trigger = withActiveTrigger
Tab.Nav = TabNav
Tab.ContentContainer = ContentContainer

export default Tab
