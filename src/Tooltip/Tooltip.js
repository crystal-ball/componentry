import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const Tooltip = activeContainer('tooltip', {
  escHandler: true,
  mouseHandler: true,
})

Tooltip.Content = activeContent('tooltip', {
  arias: { id: true, role: 'tooltip', hidden: true },
  popper: true,
})

Tooltip.Trigger = activeTrigger('tooltip', {
  arias: { describedby: true },
})

export default Tooltip
