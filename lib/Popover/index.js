import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Popover = withState(stateContainer({ element: 'popover', mouseEvents: true }))
Popover.Content = withActive({ id: true, role: 'tooltip', hidden: true })(
  stateContent({ element: 'popover', tip: true })
)
Popover.Trigger = withActive({ describedby: true, subscribe: false })(
  stateTrigger({ element: 'popover' })
)

/**
 * The Tooltip component creates an expandable info container on hover.
 *
 * TODO:
 * - Check body overflow on render and adjust width if needed
 * - Dedupe Popover and Tooltip src files
 * - Ability to default configure link and button color for consuming app
 * - Match tooltip and popover tip styles and markup
 * @class Popover
 * @constructor
 * @extends React.Component
 */
export default Popover
