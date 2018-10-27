import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import elem from '../elem-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const Popover = activeContainer({
  name: 'popover',
  escHandler: true,
  defaultMouseEvents: true,
  defaultDirection: 'right',
})

Popover.Body = withTheme('PopoverBody', props =>
  elem({ classes: 'popover-body', ...props }),
)

Popover.Content = withActive(
  withTheme(
    'PopoverContent',
    activeContent({
      arias: { id: true, role: 'tooltip', hidden: true },
      classes: 'popover-content',
      popper: true,
    }),
  ),
)

Popover.Header = withTheme('PopoverHeader', props =>
  elem({
    defaultAs: 'h3',
    classes: 'popover-header',
    ...props,
  }),
)

Popover.Trigger = withActive(
  withTheme(
    'PopoverTrigger',
    activeTrigger({
      arias: { describedby: true },
      classes: 'popover-trigger',
    }),
  ),
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
export default withTheme('Popover', Popover)
