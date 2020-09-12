import { activeContainerComponent } from '../factories/active-container-component'
import { activeContentComponent } from '../factories/active-content-component'
import { activeTriggerComponent } from '../factories/active-trigger-component'

/**
 * [Tooltip component 📝](https://componentry.design/components/tooltip)
 */
export const Tooltip = activeContainerComponent('tooltip', {
  escEvents: true,
  mouseEvents: true,
})

/**
 * [Tooltip trigger component 📝](https://componentry.design/components/tooltip)
 */
Tooltip.Content = activeContentComponent('tooltip', {
  arias: { id: true, role: 'tooltip', hidden: true },
  positioned: true,
})

/**
 * [Tooltip content component 📝](https://componentry.design/components/tooltip)
 */
Tooltip.Trigger = activeTriggerComponent('tooltip', {
  arias: { describedby: true },
})
