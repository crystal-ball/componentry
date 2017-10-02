import withState from './withState'
import withActive from './withActive'
import elementFactory from '../utils/element-factory'
import stateTrigger from '../component-factories/state-trigger'

const State = withState(elementFactory())

State.Content = withActive({ id: true, hidden: true })(
  elementFactory({ element: 'state' })
)
State.Trigger = withActive({ controls: true })(stateTrigger({ link: true }))

State.Activate = withActive({ controls: true })(
  stateTrigger({ link: true, trigger: 'activate' })
)
State.Deactivate = withActive({ controls: true })(
  stateTrigger({ link: true, trigger: 'deactivate' })
)

export { State, withState, withActive }
