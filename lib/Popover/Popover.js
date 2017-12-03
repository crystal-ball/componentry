// @flow
import withActive from '../withActive/withActive'
import activeContainer from '../component-factories/active-container'
import activeContent from '../component-factories/active-content'
import activeTrigger from '../component-factories/active-trigger'
import elementFactory from '../component-factories/element-factory'

const Content = activeContent({
  componentArias: { id: true, role: 'tooltip', hidden: true },
  element: 'popover',
  name: 'PopoverContent',
  tip: true,
  widthValidation: true
})
const withActiveContent = withActive()(Content)

const Trigger = activeTrigger({
  element: 'popover',
  componentArias: { describedby: true, subscribe: false },
  name: 'PopoverTrigger'
})
const withActiveTrigger = withActive()(Trigger)

const PopoverBody = elementFactory({ classes: 'popover-body', name: 'PopoverBody' })
const PopoverHeader = elementFactory({
  classes: 'popover-header',
  tag: 'h3',
  name: 'PopoverHeader'
})

const Popover = activeContainer({
  element: 'popover',
  mouseEvents: true,
  name: 'Popover',
  escHandler: true,
  Content: withActiveContent,
  Trigger: withActiveTrigger
})

Popover.Content = withActiveContent
Popover.Trigger = withActiveTrigger
Popover.Body = PopoverBody
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
