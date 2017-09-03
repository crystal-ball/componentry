import {
  StateContainer,
  contentFactory,
  triggerFactory,
  withActiveState,
  withActive
} from '../State'

/**
 * The Drawer component creates an expandable content drawer.
 *
 * TODO: Extend the drawer to accept multiple Target+Content groups to create an
 * accordion.
 */
export default withActive({ element: 'drawer' })(
  class Drawer extends StateContainer {
    static Content = withActiveState({ id: true, hidden: true })(contentFactory())
    static Toggle = withActiveState({ controls: true, expanded: true })(
      triggerFactory({ link: true })
    )
  }
)
