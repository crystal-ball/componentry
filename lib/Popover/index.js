// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'
import elementFactory from '../component-factories/element-factory'

const Popover = withState(stateContainer({ element: 'popover', mouseEvents: true }))

Popover.Content = withActive()(
  stateContent({
    element: 'popover',
    tip: true,
    componentArias: { id: true, role: 'tooltip', hidden: true }
  })
)

Popover.Trigger = withActive()(
  stateTrigger({
    element: 'popover',
    componentArias: { describedby: true, subscribe: false }
  })
)

// $FlowFixMe
Popover.Body = elementFactory({ classes: 'popover-body' })
// $FlowFixMe
Popover.Header = elementFactory({ classes: 'popover-header', tag: 'h3' })

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
