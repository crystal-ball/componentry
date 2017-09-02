import {
  StateContainer,
  contentFactory,
  triggerFactory,
  withActiveState,
  withActive
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
export default withActive({ element: 'dropdown' })(
  class Dropdown extends StateContainer {
    static Content = withActiveState({ labelledby: true, hidden: true })(
      contentFactory()
    )
    static Toggle = withActiveState({ expanded: true, haspopup: true, id: true })(
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
