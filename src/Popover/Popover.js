// @flow
import withActive from '../withActive'
import activeContainer from '../component-factories/active-container'
import activeContent from '../component-factories/active-content'
import activeTrigger from '../component-factories/active-trigger'
import elem from '../elem-factory'
import withTheme from '../withTheme'

const Content = activeContent({
  componentArias: { id: true, role: 'tooltip', hidden: true },
  element: 'popover',
  name: 'PopoverContent',
  popper: true,
})
const withActiveContent = withActive()(Content)

const Trigger = activeTrigger({
  element: 'popover',
  componentArias: { describedby: true, subscribe: false },
  name: 'PopoverTrigger',
})
const withActiveTrigger = withActive()(Trigger)

const Body = withTheme('PopoverBody', props =>
  elem({ classes: 'popover-body', ...props }),
)
const Header = withTheme('PopoverHeader', props =>
  elem({
    defaultAs: 'h3',
    classes: 'popover-header',

    ...props,
  }),
)

const Popover = activeContainer({
  Content: withActiveContent,
  Trigger: withActiveTrigger,
  defaultDirection: 'right',
  element: 'popover',
  escHandler: true,
  mouseEvents: true,
  name: 'Popover',
})

Popover.Content = withActiveContent
Popover.Trigger = withActiveTrigger
Popover.Body = Body
Popover.Header = Header

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
