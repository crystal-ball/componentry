// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Container = stateContainer({ name: 'State' })
const State = withState(Container)

const Content = stateContent({
  componentArias: { id: true, hidden: true },
  name: 'StateContent'
})

const withActiveContent = withActive()(Content)
State.Content = withActiveContent

const Trigger = stateTrigger({
  componentArias: { controls: true },
  name: 'StateTrigger'
})

const withActiveTrigger = withActive()(Trigger)
State.Trigger = withActiveTrigger

export default State
export { withState, withActive }
