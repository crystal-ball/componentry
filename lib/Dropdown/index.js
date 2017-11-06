// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import Button from '../Button'
import elementFactory from '../component-factories/element-factory'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Dropdown = withState(stateContainer({ element: 'dropdown' }))

Dropdown.Content = withActive(
  stateContent({
    element: 'dropdown',
    componentArias: { labelledby: true, hidden: true }
  })
)

Dropdown.Trigger = withActive(
  stateTrigger({
    element: 'dropdown',
    link: false,
    componentArias: { expanded: true, haspopup: true, id: true }
  })
)

Dropdown.Item = elementFactory({
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
