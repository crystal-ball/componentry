import { activeContainerComponent } from '../factories/active-container-component'
import { activeContentComponent } from '../factories/active-content-component'
import { activeTriggerComponent } from '../factories/active-trigger-component'
import { staticComponent } from '../factories/static-component'

/**
 * [Popover component 📝](https://componentry.design/components/popover)
 */
export const Popover = activeContainerComponent('popover', {
  direction: 'right',
  escEvents: true,
  mouseEvents: true,
})

/**
 * [Popover body component 📝](https://componentry.design/components/popover)
 */
Popover.Body = staticComponent('PopoverBody', {
  componentCx: 'popover-body',
})

/**
 * [Popover content component 📝](https://componentry.design/components/popover)
 */
Popover.Content = activeContentComponent('popover', {
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
Popover.Trigger = activeTriggerComponent('popover', {
  arias: { describedby: true },
})
