import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

/**
 * [Active component 📝](https://componentry.design/components/active)
 */
const Active = activeContainer('active', { escEvents: true })
export default Active

/** Active content component */
Active.Content = activeContent('active', { arias: { id: true, hidden: true } })

/** Active trigger component */
Active.Trigger = activeTrigger('active', { arias: { controls: true } })
