import activeContainer from '../active-container-factory'
import activeTrigger from '../active-trigger-factory'

const ButtonGroup = activeContainer('button-group', {
  baseClass: 'btn-group',
  role: 'group',
})
export default ButtonGroup

ButtonGroup.Option = activeTrigger('button-group', {
  as: 'label',
  variantDefault: 'btn',
})
