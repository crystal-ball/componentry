import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

/**
 * [Dropdown component 📝](https://componentry.design/components/dropdown)
 */
const Dropdown = activeContainer('dropdown', {
  clickEvents: true,
  direction: 'bottom',
  escEvents: true,
})
export default Dropdown

/**
 * [Dropdown content component 📝](https://componentry.design/components/dropdown)
 */
Dropdown.Content = activeContent('dropdown', {
  arias: { labelledby: true, hidden: true },
})

/**
 * [Dropdown item component 📝](https://componentry.design/components/dropdown)
 */
Dropdown.Item = activeTrigger('dropdown', {
  baseClass: 'dropdown-item',
  displayName: 'DropdownItem',
})

/**
 * [Dropdown trigger component 📝](https://componentry.design/components/dropdown)
 */
Dropdown.Trigger = activeTrigger('dropdown', {
  arias: { expanded: true, haspopup: true, id: true },
})
