import activeContainer from '../active-container-factory'
import activeTrigger from '../active-trigger-factory'

const ButtonGroup = activeContainer('ButtonGroup', { name: 'btn-group', role: 'group' })
export default ButtonGroup

ButtonGroup.Button = activeTrigger('ButtonGroupButton', { defaultAnchor: false })
