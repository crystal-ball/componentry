import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

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
Popover.Body = function PopoverBody(props) {
  return elem({
    elemClassName: 'popover-body',
    ...useTheme('PopoverBody'),
    ...props,
  })
}
Popover.Body.displayName = 'PopoverBody'

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
Popover.Heading = function PopoverHeading(props) {
  return elem({
    as: 'h3',
    elemClassName: 'popover-heading',
    ...useTheme('PopoverHeading'),
    ...props,
  })
}
Popover.Heading.displayName = 'PopoverHeading'

/**
 * [Popover trigger component 📝](https://componentry.design/components/popover)
 */
Popover.Trigger = activeTrigger('popover', {
  arias: { describedby: true },
})
