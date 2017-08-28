import {
  StateContainer,
  contentFactory,
  triggerFactory,
  withActive,
  withState
} from '../State'

/**
 * The Drawer component creates an expandable content drawer.
 *
 * TODO: Extend the drawer to accept multiple Target+Content groups to create an
 * accordion.
 *
 * @class Drawer
 * @constructor
 * @extends React.Component
 */
export default withState({ type: 'drawer' })(
  class Drawer extends StateContainer {
    static Content = withActive({ id: true, hidden: true })(contentFactory())
    static Toggle = withActive({ controls: true, expanded: true })(
      triggerFactory({ link: true })
    )
  }
)
