import StateContainer from './StateContainer'
import contentFactory from './content-factory'
import triggerFactory from './trigger-factory'
import withActive from './withActive'
import withState from './withState'

const State = withState()(StateContainer)

const Content = withActive({ id: true, hidden: true })(
  contentFactory({ type: 'state' })
)

const Toggle = withActive({ controls: true })(
  triggerFactory({ link: true, trigger: 'Toggle' })
)
const Activate = withActive({ controls: true })(
  triggerFactory({ link: true, trigger: 'Activate' })
)
const Deactivate = withActive({ controls: true })(
  triggerFactory({ link: true, trigger: 'Deactivate' })
)

export {
  Activate,
  Content,
  Deactivate,
  State,
  StateContainer,
  Toggle,
  contentFactory,
  triggerFactory,
  withActive,
  withState
}
