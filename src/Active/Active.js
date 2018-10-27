import withActive from '../withActive'
import activeContainer from '../active-container-factory'
import activeContent from '../active-content-factory'
import activeTrigger from '../active-trigger-factory'

const Active = activeContainer({
  name: 'active',
  escHandler: true,
})

Active.Content = withActive(
  activeContent({
    arias: { id: true, hidden: true },
    classes: 'active-content',
  }),
)

Active.Trigger = withActive(
  activeTrigger({
    arias: { controls: true },
    classes: 'active-trigger',
  }),
)

export default Active
