import { type CSSProperties } from 'react'
import { Theme } from '../../theme/theme'

//                                     <FormGroup /> styles
// --------------------------------------------------------

export const formGroupStyles = (theme: Theme): FormGroupStyles => ({
  '.C9Y-FormGroup': {
    marginBottom: theme.spacing[4],
  },
})

export interface FormGroupStyles {
  '.C9Y-FormGroup': CSSProperties
}
