import { withActive, withState } from '../State'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Drawer = withState(stateContainer({ element: 'drawer' }))
Drawer.Content = withActive({ id: true, hidden: true })(
  stateContent({ element: 'drawer' })
)
Drawer.Trigger = withActive({ controls: true, expanded: true })(
  stateTrigger({ element: 'drawer', link: true })
)

/**
 * The Drawer component creates an expandable content drawer.
 *
 * TODO: Extend the drawer to accept multiple Target+Content groups to create an
 * accordion.
 */
export default Drawer
