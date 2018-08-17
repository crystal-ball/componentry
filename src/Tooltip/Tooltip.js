// @flow
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const Content = activeContent({
  arias: { id: true, role: 'tooltip', hidden: true },
  element: 'tooltip',
  popper: true,
})
const withActiveContent = withActive(withTheme('TooltipContent', Content))

const Trigger = activeTrigger({
  arias: { describedby: true },
  element: 'tooltip',
})
const withActiveTrigger = withActive(withTheme('TooltipTrigger', Trigger))

const Tooltip = withTheme(
  'Tooltip',
  activeContainer({
    Content: withActiveContent,
    Trigger: withActiveTrigger,
    element: 'tooltip',
    escHandler: true,
    mouseEvents: true,
  }),
)

Tooltip.Content = withActiveContent
Tooltip.Trigger = withActiveTrigger

/**
 * The Tooltip component creates an expandable info container on hover.
 *
 * TODO:
 * - Check body overflow on render and adjust width if needed
 * @class Tooltip
 * @constructor
 * @extends React.Component
 */
export default Tooltip
