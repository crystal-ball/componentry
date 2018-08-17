// @flow
import withActive from '../withActive'
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const Content = activeContent({
  arias: { id: true, hidden: true },
  element: 'active',
})
const withActiveContent = withActive(Content)

const Trigger = activeTrigger({
  arias: { controls: true },
  element: 'active',
})
const withActiveTrigger = withActive(Trigger)

const Active = activeContainer({
  Content: withActiveContent,
  Trigger: withActiveTrigger,
  element: 'active',
})

Active.Content = withActiveContent
Active.Trigger = withActiveTrigger

export default Active
