import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const Active = activeContainer('active', { escHandler: true })
export default Active

Active.Content = activeContent('active', { arias: { id: true, hidden: true } })
Active.Trigger = activeTrigger('active', { arias: { controls: true } })
