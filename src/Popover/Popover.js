import activeContainer from '../factories/active-container-component'
import activeContent from '../factories/active-content-component'
import activeTrigger from '../factories/active-trigger-component'
import staticComponent from '../factories/static-component'

/**
 * [Popover component 📝](https://componentry.design/components/popover)
 */
const Popover = activeContainer('popover', {
  direction: 'right',
  escEvents: true,
  mouseEvents: true,
})
export default Popover

/**
 * [Popover body component 📝](https://componentry.design/components/popover)
 */
Popover.Body = staticComponent('PopoverBody', {
  componentCx: 'popover-body',
})

/**
 * [Popover content component 📝](https://componentry.design/components/popover)
 */
Popover.Content = activeContent('popover', {
  arias: { id: true, role: 'tooltip', hidden: true },
  positioned: true,
})

/**
 * [Popover heading component 📝](https://componentry.design/components/popover)
 */
Popover.Heading = staticComponent('PopoverHeading', {
  as: 'h3',
  componentCx: 'popover-heading',
})

/**
 * [Popover trigger component 📝](https://componentry.design/components/popover)
 */
Popover.Trigger = activeTrigger('popover', {
  arias: { describedby: true },
})
