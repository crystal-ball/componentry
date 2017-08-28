import {
  StateContainer,
  contentFactory,
  triggerFactory,
  withActive,
  withState
} from '../State'

/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Menu Items with class names 'dropdown-item'
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */
export default withState({ type: 'dropdown' })(
  class Drawer extends StateContainer {
    static Content = withActive({ labelledby: true, hidden: true })(
      contentFactory()
    )
    static Toggle = withActive({ expanded: true, haspopup: true, id: true })(
      triggerFactory({ link: false })
    )
  }
)
