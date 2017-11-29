// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'
import elementFactory from '../component-factories/element-factory'

import { TabNav } from '../Nav/Nav'

const Content = stateContent({
  componentArias: { hidden: true, role: 'tabpanel' },
  classes: 'tab-pane',
  name: 'Tabcontent'
})
const withActiveContent = withActive()(Content)

const Trigger = stateTrigger({
  componentArias: { selected: true, role: 'tab' },
  classes: 'nav-link nav-item',
  name: 'TabTrigger',
  // Tabs can only activate, they never deactivate when clicked
  triggerType: 'activate',
  // Misc configs
  // Componentry uses <Button /> components for the tab triggers instead of
  // anchors like Bootstrap. Default the button to have the link theme style to
  // look like an anchor
  color: 'link'
})
const withActiveTrigger = withActive()(Trigger)

const ContentContainer = elementFactory({
  classes: 'tab-content',
  name: 'TabContentContainer'
})

const Container = stateContainer({
  name: 'Tab',
  Content: withActiveContent,
  Trigger: withActiveTrigger
})
const Tab = withState(Container)

Tab.Content = withActiveContent
Tab.Trigger = withActiveTrigger
// $FlowFixMe
Tab.Nav = TabNav
// $FlowFixMe
Tab.ContentContainer = ContentContainer

export default Tab
