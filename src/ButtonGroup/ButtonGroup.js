import activeContainer from '../active-container-factory'
import activeTrigger from '../active-trigger-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

// Make ButtonGroup an active component
// Make ButtonGroup.Button a button with button styles and activeIds

const ButtonGroup = activeContainer({ name: 'btn-group', role: 'group' })

const Button = activeTrigger({ defaultAnchor: false, triggerType: 'activate' })

ButtonGroup.Button = withActive(withTheme('ButtonGroupButton', Button))

export default withTheme('ButtonGroup', ButtonGroup)
