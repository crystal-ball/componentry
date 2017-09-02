import {
  StateContainer,
  contentFactory,
  triggerFactory,
  withActive,
  withState
} from '../State'
import Button from '../Button'
import elementFactory from '../utils/element-factory'

/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Menu Items with class names 'dropdown-item'
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */
export default withState({ type: 'dropdown' })(
  class Dropdown extends StateContainer {
    static Content = withActive({ labelledby: true, hidden: true })(
      contentFactory()
    )
    static Toggle = withActive({ expanded: true, haspopup: true, id: true })(
      triggerFactory({ link: false })
    )
    static Item = elementFactory({
      attrs: { color: null }, // This suppresses Button adding theme default btn-primary clas
      classes: 'dropdown-item',
      name: 'DropdownItem',
      tag: Button
    })
  }
)
