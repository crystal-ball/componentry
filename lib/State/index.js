// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const State = withState(stateContainer({ element: 'state' }))

State.Content = withActive(
  stateContent({ element: 'state', componentArias: { id: true, hidden: true } })
)

State.Trigger = withActive(
  stateTrigger({ element: 'state', componentArias: { controls: true } })
)

export default State
export { withState, withActive }
