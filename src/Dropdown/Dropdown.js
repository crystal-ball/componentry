import { activeContainerComponent } from '../factories/active-container-component'
import { activeContentComponent } from '../factories/active-content-component'
import { activeTriggerComponent } from '../factories/active-trigger-component'

/**
 * [Dropdown component 📝](https://componentry.design/components/dropdown)
 */
export const Dropdown = activeContainerComponent('dropdown', {
  clickEvents: true,
  direction: 'bottom',
  escEvents: true,
})

/**
 * [Dropdown content component 📝](https://componentry.design/components/dropdown)
 */
Dropdown.Content = activeContentComponent('dropdown', {
  arias: { labelledby: true, hidden: true },
})

/**
 * [Dropdown item component 📝](https://componentry.design/components/dropdown)
 */
Dropdown.Item = activeTriggerComponent('dropdown', {
  displayName: 'DropdownItem',
  baseClass: 'dropdown-item',
})

/**
 * [Dropdown trigger component 📝](https://componentry.design/components/dropdown)
 */
Dropdown.Trigger = activeTriggerComponent('dropdown', {
  arias: { expanded: true, haspopup: true, id: true },
})
