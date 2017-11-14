// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'
import elementFactory from '../component-factories/element-factory'

const Content = stateContent({
  componentArias: { id: true, role: 'tooltip', hidden: true },
  element: 'popover',
  name: 'PopoverContent',
  tip: true
})
const withActiveContent = withActive()(Content)

const Trigger = stateTrigger({
  element: 'popover',
  componentArias: { describedby: true, subscribe: false },
  name: 'PopoverTrigger'
})
const withActiveTrigger = withActive()(Trigger)

const PopoverBody = elementFactory({ classes: 'popover-body' })
const PopoverHeader = elementFactory({ classes: 'popover-header', tag: 'h3' })

const Container = stateContainer({
  element: 'popover',
  mouseEvents: true,
  name: 'Popover',
  Content: withActiveContent,
  Trigger: withActiveTrigger
})
const Popover = withState(Container)

Popover.Content = withActiveContent
Popover.Trigger = withActiveTrigger
// $FlowFixMe
Popover.Body = PopoverBody
// $FlowFixMe
Popover.Header = PopoverHeader

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
