// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Container = stateContainer({ element: 'drawer', name: 'Drawer' })
const Drawer = withState(Container)

const Content = stateContent({
  element: 'drawer',
  componentArias: { id: true, hidden: true },
  name: 'DrawerContent'
})

const withActiveContent = withActive()(Content)
Drawer.Content = withActiveContent

const Trigger = stateTrigger({
  element: 'drawer',
  componentArias: { controls: true, expanded: true },
  name: 'DrawerTrigger'
})

const withActiveTrigger = withActive()(Trigger)
Drawer.Trigger = withActiveTrigger

/**
 * The Drawer component creates an expandable content drawer.
 *
 * TODO: Extend the drawer to accept multiple Target+Content groups to create an
 * accordion.
 */
export default Drawer
