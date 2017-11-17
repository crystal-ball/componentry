// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Content = stateContent({
  element: 'dropdown',
  componentArias: { labelledby: true, hidden: true },
  name: 'DropdownContent'
})
const withActiveContent = withActive()(Content)

const Trigger = stateTrigger({
  element: 'dropdown',
  componentArias: { expanded: true, haspopup: true, id: true },
  name: 'DropdownTrigger'
})
const withActiveTrigger = withActive()(Trigger)

const Item = stateTrigger({
  classes: 'dropdown-item',
  componentArias: {},
  name: 'DropdownItem'
})
const DropdownItem = withActive()(Item)

const Container = stateContainer({
  element: 'dropdown',
  name: 'Dropdown',
  escHandler: true,
  externalClickHandler: true,
  Content: withActiveContent,
  Trigger: withActiveTrigger
})
const Dropdown = withState(Container)

Dropdown.Content = withActiveContent
Dropdown.Trigger = withActiveTrigger
Dropdown.Item = DropdownItem

/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */
export default Dropdown
