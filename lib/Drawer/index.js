// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Content = stateContent({
  element: 'drawer',
  componentArias: { id: true, hidden: true },
  name: 'DrawerContent'
})
const withActiveContent = withActive()(Content)

const Trigger = stateTrigger({
  element: 'drawer',
  componentArias: { controls: true, expanded: true },
  name: 'DrawerTrigger'
})
const withActiveTrigger = withActive()(Trigger)

const Container = stateContainer({
  element: 'drawer',
  name: 'Drawer',
  Content: withActiveContent,
  Trigger: withActiveTrigger
})
const Drawer = withState(Container)

Drawer.Content = withActiveContent
Drawer.Trigger = withActiveTrigger

/**
 * The Drawer component creates an expandable content drawer.
 *
 * TODO: Extend the drawer to accept multiple Target+Content groups to create an
 * accordion.
 */
export default Drawer
