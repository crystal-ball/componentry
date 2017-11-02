// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const State = withState(stateContainer({ element: 'state' }))

State.Content = withActive({ id: true, hidden: true })(
  stateContent({ element: 'state' })
)
State.Trigger = withActive({ controls: true })(
  // $FlowFixMe
  stateTrigger({ element: 'state', link: true })
)
// $FlowFixMe
State.Activate = withActive({ controls: true })(
  // $FlowFixMe
  stateTrigger({ element: 'state', link: true, trigger: 'activate' })
)
// $FlowFixMe
State.Deactivate = withActive({ controls: true })(
  // $FlowFixMe
  stateTrigger({ element: 'state', link: true, trigger: 'deactivate' })
)

export default State
export { withState, withActive }
