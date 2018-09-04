import withActive from '../withActive'
import withTheme from '../withTheme'
// import withComponentry from '../withComponentry'
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const DropdownContent = activeContent({
  arias: { labelledby: true, hidden: true },
  element: 'dropdown',
})
const ActiveDropdownContent = withTheme('DropdownContent', withActive(DropdownContent))

const DropdownTrigger = activeTrigger({
  arias: { expanded: true, haspopup: true, id: true },
  element: 'dropdown',
})
const ActiveDropdownTrigger = withTheme('DropdownTrigger', withActive(DropdownTrigger))

const DropdownItem = activeTrigger({
  // TODO: what arias should this have?
  arias: {},
  classes: 'dropdown-item',
  element: 'dropdown-item',
})
const ActiveDropdownItem = withTheme('DropdownItem', withActive(DropdownItem))

const Dropdown = activeContainer({
  Content: ActiveDropdownContent,
  Trigger: ActiveDropdownTrigger,
  element: 'dropdown',
  escHandler: true,
  clickHandler: true,
})
Dropdown.displayName = 'Dropdown'
Dropdown.defaultProps = {
  direction: 'bottom',
}

const ThemedDropdown = withTheme('Dropdown', Dropdown)

ThemedDropdown.Content = ActiveDropdownContent
ThemedDropdown.Trigger = ActiveDropdownTrigger
ThemedDropdown.Item = ActiveDropdownItem

/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */
export default ThemedDropdown
