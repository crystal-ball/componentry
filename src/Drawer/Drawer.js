import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const Drawer = activeContainer('drawer')
Drawer.Content = activeContent('drawer', { arias: { id: true, hidden: true } })
Drawer.Trigger = activeTrigger('drawer', { arias: { controls: true, expanded: true } })
export default Drawer
