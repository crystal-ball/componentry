import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                     <FormGroup /> styles
// --------------------------------------------------------

export const FormGroup = {
  '.🅲FormGroup': {
    marginBottom: theme.spacing[2],
  },
}
