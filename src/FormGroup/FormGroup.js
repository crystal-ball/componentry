import elem from '../elem-factory'
import withTheme from '../withTheme'

/**
 * FormGroup provides form structure
 */
export default withTheme('FormGroup', props =>
  elem({
    defaultAs: 'div',
    classes: 'form-group',
    ...props,
  }),
)
