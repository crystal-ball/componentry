// @flow
import withActive from '../withActive'
import withTheme from '../withTheme'
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const makeDrawer = name => {
  const elem = name.slice(0, 1).toLocaleLowerCase() + name.slice(1)

  const Content = activeContent({
    arias: { id: true, hidden: true },
    element: elem,
  })
  const withActiveContent = withActive(withTheme(`${name}Content`, Content))

  const Trigger = activeTrigger({
    arias: { controls: true, expanded: true },
    element: elem,
  })
  const withActiveTrigger = withActive(withTheme(`${name}Trigger`, Trigger))

  const Element = withTheme(
    name,
    activeContainer({
      element: elem,
      name,
      Content: withActiveContent,
      Trigger: withActiveTrigger,
    }),
  )

  Element.Content = withActiveContent
  Element.Trigger = withActiveTrigger

  return Element
}

const Drawer = makeDrawer('Drawer')
const Accordion = makeDrawer('Accordion')

export { Accordion, Drawer }