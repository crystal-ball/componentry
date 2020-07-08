import activeContainer from '../factories/active-container-component'
import activeContent from '../factories/active-content-component'
import activeTrigger from '../factories/active-trigger-component'

/**
 * [Tooltip component 📝](https://componentry.design/components/tooltip)
 */
const Tooltip = activeContainer('tooltip', {
  escEvents: true,
  mouseEvents: true,
})
export default Tooltip

/**
 * [Tooltip trigger component 📝](https://componentry.design/components/tooltip)
 */
Tooltip.Content = activeContent('tooltip', {
  arias: { id: true, role: 'tooltip', hidden: true },
  positioned: true,
})

/**
 * [Tooltip content component 📝](https://componentry.design/components/tooltip)
 */
Tooltip.Trigger = activeTrigger('tooltip', {
  arias: { describedby: true },
})
