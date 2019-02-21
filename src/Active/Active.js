import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const Active = activeContainer('Active', {
  name: 'active',
  escHandler: true,
})
export default Active

Active.Content = activeContent('ActiveContent', {
  arias: { id: true, hidden: true },
  classes: 'active-content',
})

Active.Trigger = activeTrigger('ActiveTrigger', {
  arias: { controls: true },
  classes: 'active-trigger',
})
