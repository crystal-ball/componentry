// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Drawer = withState(stateContainer({ element: 'drawer' }))

Drawer.Content = withActive(
  stateContent({ element: 'drawer', componentArias: { id: true, hidden: true } })
)

Drawer.Trigger = withActive(
  stateTrigger({
    element: 'drawer',
    link: true,
    componentArias: { controls: true, expanded: true }
  })
)

/**
 * The Drawer component creates an expandable content drawer.
 *
 * TODO: Extend the drawer to accept multiple Target+Content groups to create an
 * accordion.
 */
export default Drawer
