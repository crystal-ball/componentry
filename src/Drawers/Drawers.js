// @flow
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const makeDrawer = name => {
  const elem = name.slice(0, 1).toLocaleLowerCase() + name.slice(1)

  const Content = activeContent({
    arias: { id: true, hidden: true },
    element: elem,
  })

  const Trigger = activeTrigger({
    arias: { controls: true, expanded: true },
    element: elem,
  })

  const Element = withTheme(
    name,
    activeContainer({
      Content: withActive(withTheme(`${name}Content`, Content)),
      Trigger: withActive(withTheme(`${name}Trigger`, Trigger)),
      element: elem,
      name,
    }),
  )

  return Element
}

const Drawer = makeDrawer('Drawer')
const Accordion = makeDrawer('Accordion')

export { Accordion, Drawer }
