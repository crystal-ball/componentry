import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import Button from '../Button'
import elementFactory from '../utils/element-factory'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Dropdown = withState(stateContainer({ element: 'dropdown' }))
Dropdown.Content = withActive({ labelledby: true, hidden: true })(
  stateContent({ element: 'dropdown' })
)
Dropdown.Trigger = withActive({ expanded: true, haspopup: true, id: true })(
  stateTrigger({ element: 'dropdown', link: false })
)
Dropdown.Item = elementFactory({
  attrs: { color: null }, // This suppresses Button adding theme default btn-primary clas
  classes: 'dropdown-item',
  name: 'DropdownItem',
  tag: Button
})

/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */
export default Dropdown
