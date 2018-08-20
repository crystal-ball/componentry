// @flow
import container from '../active-container-factory'
import content from '../active-content-factory'
import trigger from '../active-trigger-factory'
import elem from '../elem-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const Content = content({
  arias: { id: true, role: 'tooltip', hidden: true },
  element: 'popover',
  popper: true,
})
const withActiveContent = withActive(withTheme('PopoverContent', Content))

const Trigger = trigger({
  arias: { describedby: true },
  element: 'popover',
})
const withActiveTrigger = withActive(withTheme('PopoverTrigger', Trigger))

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

const Popover = withTheme(
  'Popover',
  container({
    Content: withActiveContent,
    Trigger: withActiveTrigger,
    element: 'popover',
    escHandler: true,
    mouseEvents: true,
  }),
)
Popover.defaultProps = {
  direction: 'right',
}

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
