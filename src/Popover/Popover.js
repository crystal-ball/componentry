import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import simpleComponent from '../simple-component-factory'

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
Popover.Body = simpleComponent('PopoverBody', {
  elemClassName: 'popover-body',
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
Popover.Heading = simpleComponent('PopoverHeading', {
  as: 'h3',
  elemClassName: 'popover-heading',
})

/**
 * [Popover trigger component 📝](https://componentry.design/components/popover)
 */
Popover.Trigger = activeTrigger('popover', {
  arias: { describedby: true },
})
