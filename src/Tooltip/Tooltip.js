import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

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
