// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'

const createDrawerComponent = name => {
  const elem = name.slice(0, 1).toLocaleLowerCase() + name.slice(1)

  const Content = stateContent({
    element: elem,
    componentArias: { id: true, hidden: true },
    name: `${name}Content`
  })
  const withActiveContent = withActive()(Content)

  const Trigger = stateTrigger({
    element: elem,
    componentArias: { controls: true, expanded: true },
    name: `${name}Trigger`
  })
  const withActiveTrigger = withActive()(Trigger)

  const Container = stateContainer({
    element: elem,
    name,
    Content: withActiveContent,
    Trigger: withActiveTrigger
  })
  const DrawerComponent = withState(Container)

  DrawerComponent.Content = withActiveContent
  DrawerComponent.Trigger = withActiveTrigger

  return DrawerComponent
}

const Drawer = createDrawerComponent('Drawer')
const Accordion = createDrawerComponent('Accordion')

export { Drawer, Accordion }
