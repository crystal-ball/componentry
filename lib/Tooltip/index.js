// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Content = stateContent({
  componentArias: { id: true, role: 'tooltip', hidden: true },
  element: 'tooltip',
  name: 'TooltipContent',
  tip: true
})
const withActiveContent = withActive()(Content)

const Trigger = stateTrigger({
  element: 'tooltip',
  componentArias: { describedby: true, subscribe: false },
  name: 'TooltipTrigger'
})
const withActiveTrigger = withActive()(Trigger)

const Container = stateContainer({
  element: 'tooltip',
  mouseEvents: true,
  name: 'Tooltip',
  Content: withActiveContent,
  Trigger: withActiveTrigger
})
const Tooltip = withState(Container)

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
