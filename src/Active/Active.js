import activeContainer from '../factories/active-container-component'
import activeContent from '../factories/active-content-component'
import activeTrigger from '../factories/active-trigger-component'

/**
 * [Active component 📝](https://componentry.design/components/active)
 */
const Active = activeContainer('active', { escEvents: true })
export default Active

/** Active content component */
Active.Content = activeContent('active', { arias: { id: true, hidden: true } })

/** Active trigger component */
Active.Trigger = activeTrigger('active', { arias: { controls: true } })
