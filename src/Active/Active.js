import { activeContainerComponent } from '../factories/active-container-component'
import { activeContentComponent } from '../factories/active-content-component'
import { activeTriggerComponent } from '../factories/active-trigger-component'

/**
 * [Active component 📝](https://componentry.design/components/active)
 */
export const Active = activeContainerComponent('active', { escEvents: true })

/** Active content component */
Active.Content = activeContentComponent('active', { arias: { id: true, hidden: true } })

/** Active trigger component */
Active.Trigger = activeTriggerComponent('active', { arias: { controls: true } })
