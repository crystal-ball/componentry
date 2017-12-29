// @flow
import withActive from '../withActive/withActive'
import activeContainer from '../component-factories/active-container'
import activeContent from '../component-factories/active-content'
import activeTrigger from '../component-factories/active-trigger'

const createDrawerComponent = name => {
  const elem = name.slice(0, 1).toLocaleLowerCase() + name.slice(1)

  const Content = activeContent({
    element: elem,
    componentArias: { id: true, hidden: true },
    name: `${name}Content`,
  })
  const withActiveContent = withActive()(Content)

  const Trigger = activeTrigger({
    element: elem,
    componentArias: { controls: true, expanded: true },
    name: `${name}Trigger`,
  })
  const withActiveTrigger = withActive()(Trigger)

  const Drawer = activeContainer({
    element: elem,
    name,
    Content: withActiveContent,
    Trigger: withActiveTrigger,
  })

  Drawer.Content = withActiveContent
  Drawer.Trigger = withActiveTrigger

  return Drawer
}

const Drawer = createDrawerComponent('Drawer')
const Accordion = createDrawerComponent('Accordion')

export { Drawer, Accordion }
