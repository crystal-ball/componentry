// @flow
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const Tooltip = activeContainer({
  classes: 'tooltip',
  escHandler: true,
  defaultMouseEvents: true,
})

Tooltip.Content = withActive(
  withTheme(
    'TooltipContent',
    activeContent({
      arias: { id: true, role: 'tooltip', hidden: true },
      classes: 'tooltip-content',
      popper: true,
    }),
  ),
)

Tooltip.Trigger = withActive(
  withTheme(
    'TooltipTrigger',
    activeTrigger({
      arias: { describedby: true },
      classes: 'tooltip-toggle',
    }),
  ),
)

/**
 * The Tooltip component creates an expandable info container on hover.
 *
 * TODO:
 * - Check body overflow on render and adjust width if needed
 * @class Tooltip
 * @constructor
 * @extends React.Component
 */
export default withTheme('Tooltip', Tooltip)
