import activeContainer from '../factories/active-container-component'
import activeContent from '../factories/active-content-component'
import activeTrigger from '../factories/active-trigger-component'

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
  displayName: 'DropdownItem',
  baseClass: 'dropdown-item',
})

/**
 * [Dropdown trigger component 📝](https://componentry.design/components/dropdown)
 */
Dropdown.Trigger = activeTrigger('dropdown', {
  arias: { expanded: true, haspopup: true, id: true },
})
