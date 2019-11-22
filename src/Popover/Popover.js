import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

const Popover = activeContainer('popover', {
  direction: 'right',
  escEvents: true,
  mouseEvents: true,
})
export default Popover

Popover.Body = function PopoverBody(props) {
  return elem({
    componentClassNames: 'popover-body',
    ...useTheme('PopoverBody'),
    ...props,
  })
}
Popover.Body.displayName = 'PopoverBody'

Popover.Content = activeContent('popover', {
  arias: { id: true, role: 'tooltip', hidden: true },
  popper: true,
})

Popover.Heading = function PopoverHeading(props) {
  return elem({
    as: 'h3',
    componentClassNames: 'popover-heading',
    ...useTheme('PopoverHeading'),
    ...props,
  })
}
Popover.Heading.displayName = 'PopoverHeading'

Popover.Trigger = activeTrigger('popover', {
  arias: { describedby: true },
})
