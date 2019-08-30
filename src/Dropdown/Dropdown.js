import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const Dropdown = activeContainer('dropdown', {
  clickEvents: true,
  direction: 'bottom',
  escEvents: true,
})

Dropdown.Content = activeContent('dropdown', {
  arias: { labelledby: true, hidden: true },
})

// TODO: what arias should this have?
Dropdown.Item = activeTrigger('dropdown', {
  baseClass: 'dropdown-item',
  name: 'DropdownItem',
})

Dropdown.Trigger = activeTrigger('dropdown', {
  arias: { expanded: true, haspopup: true, id: true },
})

export default Dropdown
