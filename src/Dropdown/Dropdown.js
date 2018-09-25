import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const Content = activeContent({
  arias: { labelledby: true, hidden: true },
  classes: 'dropdown-content',
})

const Trigger = activeTrigger({
  arias: { expanded: true, haspopup: true, id: true },
  classes: 'dropdown-toggle',
})

const Item = activeTrigger({
  // TODO: what arias should this have?
  arias: {},
  classes: 'dropdown-item',
  // Dropdown items have appropriate styles
  defaultLink: false,
})

const Dropdown = activeContainer({
  Content: withTheme('DropdownContent', withActive(Content)),
  Trigger: withTheme('DropdownTrigger', withActive(Trigger)),
  classes: 'dropdown',
  escHandler: true,
  clickHandler: true,
})
Dropdown.Item = withTheme('DropdownItem', withActive(Item))
Dropdown.defaultProps = {
  ...Dropdown.defaultProps,
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
