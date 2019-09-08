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

Popover.Body = function PopoverBody(props) {
  return elem({
    componentClassNames: 'popover-body',
    ...useTheme('PopoverBody'),
    ...props,
  })
}

Popover.Content = activeContent('popover', {
  arias: { id: true, role: 'tooltip', hidden: true },
  popper: true,
})

Popover.Header = function PopoverHeader(props) {
  return elem({
    as: 'h3',
    componentClassNames: 'popover-header',
    ...useTheme('PopoverHeader'),
    ...props,
  })
}

Popover.Trigger = activeTrigger('popover', {
  arias: { describedby: true },
})

export default Popover
