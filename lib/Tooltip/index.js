// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Tooltip = withState(stateContainer({ element: 'tooltip', mouseEvents: true }))
Tooltip.Content = withActive({ id: true, role: 'tooltip', hidden: true })(
  stateContent({ element: 'tooltip', tip: true })
)
Tooltip.Trigger = withActive({ describedby: true, subscribe: false })(
  // $FlowFixMe
  stateTrigger({ element: 'tooltip' })
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
export default Tooltip
