import {
  StateContainer,
  contentFactory,
  triggerFactory,
  withActive,
  withState
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
export default withState({ type: 'tooltip' })(
  class Drawer extends StateContainer {
    static Content = withActive({ id: true, role: 'tooltip', hidden: true })(
      contentFactory({ tip: true })
    )
    static Toggle = withActive({ describedby: true, subscribe: false })(
      triggerFactory({ mouseEvents: true })
    )
  }
)
