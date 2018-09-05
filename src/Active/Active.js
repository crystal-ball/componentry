// @flow
import withActive from '../withActive'
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const Content = activeContent({
  arias: { id: true, hidden: true },
  element: 'active',
})

const Trigger = activeTrigger({
  arias: { controls: true },
  element: 'active',
})

const Active = activeContainer({
  Content: withActive(Content),
  Trigger: withActive(Trigger),
  element: 'active',
  escHandler: true,
})

export default Active
