// @flow
import withActive from '../withActive/withActive'
import activeContainer from '../component-factories/active-container'
import activeContent from '../component-factories/active-content'
import activeTrigger from '../component-factories/active-trigger'

const Content = activeContent({
  componentArias: { id: true, hidden: true },
  name: 'ActiveContent'
})
const withActiveContent = withActive()(Content)

const Trigger = activeTrigger({
  componentArias: { controls: true },
  name: 'ActiveTrigger'
})
const withActiveTrigger = withActive()(Trigger)

const Active = activeContainer({
  name: 'Active',
  escHandler: true,
  Content: withActiveContent,
  Trigger: withActiveTrigger
})

Active.Content = withActiveContent
Active.Trigger = withActiveTrigger

export default Active
