import StateContainer from './StateContainer'
import contentFactory from './content-factory'
import triggerFactory from './trigger-factory'
import withActive from './withActive'
import withActiveState from './withActiveState'

const State = withActive()(StateContainer)

State.Content = withActiveState({ id: true, hidden: true })(
  contentFactory({ element: 'state' })
)

State.Toggle = withActiveState({ controls: true })(
  triggerFactory({ link: true, trigger: 'toggle' })
)
State.Activate = withActiveState({ controls: true })(
  triggerFactory({ link: true, trigger: 'activate' })
)
State.Deactivate = withActiveState({ controls: true })(
  triggerFactory({ link: true, trigger: 'deactivate' })
)

export {
  State,
  StateContainer,
  contentFactory,
  triggerFactory,
  withActive,
  withActiveState
}
