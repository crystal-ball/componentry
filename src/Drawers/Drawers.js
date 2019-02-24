import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const makeDrawer = name => {
  const Element = activeContainer(name)
  Element.Content = activeContent(name, { arias: { id: true, hidden: true } })
  Element.Trigger = activeTrigger(name, { arias: { controls: true, expanded: true } })

  return Element
}

const Drawer = makeDrawer('drawer')
const Accordion = makeDrawer('accordion')

export { Accordion, Drawer }
