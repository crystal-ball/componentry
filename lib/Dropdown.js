import Toggleable from './Toggleable'

/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Menu Items with class names 'dropdown-item'
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */
export default class Dropdown extends Toggleable {
  elementType = 'dropdown'
  contentArias = { labelledby: true, hidden: true }
  triggerArias = { expanded: true, haspopup: true, id: true }
}
