import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                     <FormGroup /> styles
// --------------------------------------------------------

export const formGroupStyles = {
  '.C9Y-FormGroup': {
    marginBottom: theme.spacing[4],
  },
}
