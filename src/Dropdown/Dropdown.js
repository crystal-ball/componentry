// @flow
import withActive from '../withActive'
import withTheme from '../withTheme'
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const Content = activeContent({
  arias: { labelledby: true, hidden: true },
  element: 'dropdown',
})
const withActiveContent = withActive(withTheme('DropdownContent', Content))

const Trigger = activeTrigger({
  arias: { expanded: true, haspopup: true, id: true },
  element: 'dropdown',
})
const withActiveTrigger = withActive(withTheme('DropdownTrigger', Trigger))

const Item = activeTrigger({
  // TODO: what arias should this have?
  arias: {},
  classes: 'dropdown-item',
  element: 'dropdown-item',
})
const DropdownItem = withActive(withTheme('DropdownItem', Item))

const Dropdown = withTheme(
  'Dropdown',
  activeContainer({
    Content: withActiveContent,
    Trigger: withActiveTrigger,
    element: 'dropdown',
    escHandler: true,
    externalClickHandler: true,
  }),
)
Dropdown.defaultProps = {
  direction: 'bottom',
}

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
