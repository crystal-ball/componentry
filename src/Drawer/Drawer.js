import { activeContainerComponent } from '../factories/active-container-component'
import { activeContentComponent } from '../factories/active-content-component'
import { activeTriggerComponent } from '../factories/active-trigger-component'

/**
 * [Drawer component 📝](https://componentry.design/components/drawer)
 */
export const Drawer = activeContainerComponent('drawer')

/**
 * [Drawer content component 📝](https://componentry.design/components/drawer)
 */
Drawer.Content = activeContentComponent('drawer', { arias: { id: true, hidden: true } })

/**
 * [Drawer trigger component 📝](https://componentry.design/components/drawer)
 */
Drawer.Trigger = activeTriggerComponent('drawer', {
  arias: { controls: true, expanded: true },
})
