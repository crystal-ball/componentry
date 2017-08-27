import withState from '../withState'
import SimpleElement from '../factories/SimpleElement'

/**
 * Base <State /> component is simply a div (returned from SimpleElement()) with
 * active state tracking provided by the withState HOC.
 *
 * See withState() for details on how `active` state and method handlers are added
 * to context
 */
export default withState()(SimpleElement())
