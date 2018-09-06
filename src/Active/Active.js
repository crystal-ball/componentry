// @flow
import withActive from '../withActive'
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const Content = activeContent({
  arias: { id: true, hidden: true },
  classes: 'active-content',
})

const Trigger = activeTrigger({
  arias: { controls: true },
  classes: 'active-toggle',
})

const Active = activeContainer({
  Content: withActive(Content),
  Trigger: withActive(Trigger),
  classes: 'active',
  escHandler: true,
})

export default Active
