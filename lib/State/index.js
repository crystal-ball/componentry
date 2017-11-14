// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const Content = stateContent({
  componentArias: { id: true, hidden: true },
  name: 'StateContent'
})
const withActiveContent = withActive()(Content)

const Trigger = stateTrigger({
  componentArias: { controls: true },
  name: 'StateTrigger'
})
const withActiveTrigger = withActive()(Trigger)

const Container = stateContainer({
  name: 'State',
  Content: withActiveContent,
  Trigger: withActiveTrigger
})
const State = withState(Container)

State.Content = withActiveContent
State.Trigger = withActiveTrigger

export default State
export { withState, withActive }
