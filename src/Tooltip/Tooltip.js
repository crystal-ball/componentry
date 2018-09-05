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

const Trigger = activeTrigger({
  arias: { describedby: true },
  element: 'tooltip',
})

const Tooltip = activeContainer({
  Content: withActive(withTheme('TooltipContent', Content)),
  Trigger: withActive(withTheme('TooltipTrigger', Trigger)),
  element: 'tooltip',
  escHandler: true,
  mouseEvents: true,
})

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
