import activeContainer from '../active-container-factory'
import activeTrigger from '../active-trigger-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const ButtonGroup = activeContainer({ name: 'btn-group', role: 'group' })

ButtonGroup.Button = withActive(
  withTheme('ButtonGroupButton', activeTrigger({ defaultAnchor: false })),
)

export default withTheme('ButtonGroup', ButtonGroup)
