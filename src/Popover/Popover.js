// @flow
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import elem from '../elem-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const Content = activeContent({
  arias: { id: true, role: 'tooltip', hidden: true },
  element: 'popover',
  popper: true,
})

const Trigger = activeTrigger({
  arias: { describedby: true },
  element: 'popover',
})

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
  Content: withActive(withTheme('PopoverContent', Content)),
  Trigger: withActive(withTheme('PopoverTrigger', Trigger)),
  element: 'popover',
  escHandler: true,
  mouseEvents: true,
})
Popover.defaultProps = {
  ...Popover.defaultProps,
  direction: 'right',
}

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
export default withTheme('Popover', Popover)
