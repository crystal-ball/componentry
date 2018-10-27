import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const Dropdown = activeContainer({
  name: 'dropdown',
  escHandler: true,
  clickHandler: true,
  defaultDirection: 'bottom',
})

const Content = activeContent({
  arias: { labelledby: true, hidden: true },
  classes: 'dropdown-content',
})
Dropdown.Content = withTheme('DropdownContent', withActive(Content))

const Item = activeTrigger({
  // TODO: what arias should this have?
  arias: {},
  classes: 'dropdown-item',
  // Dropdown items have appropriate styles
  btnStyles: false,
})
Dropdown.Item = withTheme('DropdownItem', withActive(Item))

const Trigger = activeTrigger({
  arias: { expanded: true, haspopup: true, id: true },
  classes: 'dropdown-toggle',
})
Dropdown.Trigger = withTheme('DropdownTrigger', withActive(Trigger))

/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */
export default withTheme('Dropdown', Dropdown)
