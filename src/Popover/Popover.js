import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

const Popover = activeContainer('popover', {
  escHandler: true,
  mouseHandler: true,
  defaultDirection: 'right',
})

Popover.Content = activeContent('popover', {
  arias: { id: true, role: 'tooltip', hidden: true },
  popper: true,
})

const PopoverHeader = props =>
  elem({
    defaultAs: 'h3',
    classes: 'popover-header',
    ...useTheme('PopoverHeader'),
    ...props,
  })
Popover.Header = PopoverHeader

const PopoverBody = props =>
  elem({ classes: 'popover-body', ...useTheme('PopoverBody'), ...props })
Popover.Body = PopoverBody

Popover.Trigger = activeTrigger('popover', {
  arias: { describedby: true },
})

export default Popover
