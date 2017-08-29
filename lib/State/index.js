import StateContainer from './StateContainer'
import contentFactory from './content-factory'
import triggerFactory from './trigger-factory'
import withActive from './withActive'
import withState from './withState'

const State = withState()(StateContainer)

State.Content = withActive({ id: true, hidden: true })(
  contentFactory({ type: 'state' })
)

State.Toggle = withActive({ controls: true })(
  triggerFactory({ link: true, trigger: 'toggle' })
)
State.Activate = withActive({ controls: true })(
  triggerFactory({ link: true, trigger: 'activate' })
)
State.Deactivate = withActive({ controls: true })(
  triggerFactory({ link: true, trigger: 'deactivate' })
)

export {
  State,
  StateContainer,
  contentFactory,
  triggerFactory,
  withActive,
  withState
}
