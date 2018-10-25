// @flow
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const makeDrawer = name => {
  const elem = name.slice(0, 1).toLocaleLowerCase() + name.slice(1)

  const Element = withTheme(name, activeContainer({ classes: elem }))

  const Content = activeContent({
    arias: { id: true, hidden: true },
    classes: `${elem}-content`,
  })
  Element.Content = withActive(withTheme(`${name}Content`, Content))

  const Trigger = activeTrigger({
    arias: { controls: true, expanded: true },
    classes: `${elem}-toggle`,
  })
  Element.Trigger = withActive(withTheme(`${name}Trigger`, Trigger))

  return Element
}

const Drawer = makeDrawer('Drawer')
const Accordion = makeDrawer('Accordion')

export { Accordion, Drawer }
