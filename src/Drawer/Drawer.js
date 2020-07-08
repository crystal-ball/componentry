import activeContainer from '../factories/active-container-component'
import activeContent from '../factories/active-content-component'
import activeTrigger from '../factories/active-trigger-component'

/**
 * [Drawer component 📝](https://componentry.design/components/drawer)
 */
const Drawer = activeContainer('drawer')
export default Drawer

/**
 * [Drawer content component 📝](https://componentry.design/components/drawer)
 */
Drawer.Content = activeContent('drawer', { arias: { id: true, hidden: true } })

/**
 * [Drawer trigger component 📝](https://componentry.design/components/drawer)
 */
Drawer.Trigger = activeTrigger('drawer', { arias: { controls: true, expanded: true } })
