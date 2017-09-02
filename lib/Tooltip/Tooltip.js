import {
  StateContainer,
  contentFactory,
  triggerFactory,
  withActiveState,
  withActive
} from '../State'

/**
 * The Tooltip component creates an expandable info container on hover.
 *
 * TODO:
 * - Check body overflow on render and adjust width if needed
 * @class Tooltip
 * @constructor
 * @extends React.Component
 */
export default withActive({ element: 'tooltip' })(
  class Tooltip extends StateContainer {
    static Content = withActiveState({ id: true, role: 'tooltip', hidden: true })(
      contentFactory({ tip: true })
    )
    static Toggle = withActiveState({ describedby: true, subscribe: false })(
      triggerFactory({ mouseEvents: true })
    )
  }
)
