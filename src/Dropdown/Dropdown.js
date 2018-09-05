import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const Content = activeContent({
  arias: { labelledby: true, hidden: true },
  element: 'dropdown',
})

const Trigger = activeTrigger({
  arias: { expanded: true, haspopup: true, id: true },
  element: 'dropdown',
})

const Item = activeTrigger({
  // TODO: what arias should this have?
  arias: {},
  classes: 'dropdown-item',
  element: 'dropdown-item',
})

const Dropdown = activeContainer({
  Content: withTheme('DropdownContent', withActive(Content)),
  Trigger: withTheme('DropdownTrigger', withActive(Trigger)),
  element: 'dropdown',
  escHandler: true,
  clickHandler: true,
})
Dropdown.Item = withTheme('DropdownItem', withActive(Item))
Dropdown.defaultProps = {
  direction: 'bottom',
}

/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */
export default withTheme('Dropdown', Dropdown)
