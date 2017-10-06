import withState from './withState'
import withActive from './withActive'
import elementFactory from '../utils/element-factory'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const State = withState(elementFactory())

State.Content = withActive({ id: true, hidden: true })(
  stateContent({ element: 'state' })
)
State.Trigger = withActive({ controls: true })(
  stateTrigger({ element: 'state', link: true })
)

State.Activate = withActive({ controls: true })(
  stateTrigger({ element: 'state', link: true, trigger: 'activate' })
)
State.Deactivate = withActive({ controls: true })(
  stateTrigger({ element: 'state', link: true, trigger: 'deactivate' })
)

export default State
export { withState, withActive }
