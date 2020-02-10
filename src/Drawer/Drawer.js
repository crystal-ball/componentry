import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

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
