import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                         <Text /> styles
// -------------------------------------------------------

export const Text = {
  // BASE
  '.🅲Text-base': {},

  // VARIANTS
  '.🅲Text-h1': {
    fontSize: theme.fontSize.h1,
    color: theme.colors.gray[900],
  },
  '.🅲Text-h2': {
    fontSize: theme.fontSize.h2,
    color: theme.colors.gray[900],
  },
  '.🅲Text-h3': {
    fontSize: theme.fontSize.h3,
    color: theme.colors.gray[900],
  },
  '.🅲Text-body': {
    'fontSize': theme.fontSize.body,
    'color': theme.colors.gray[800],

    // Set spacing between multiple paragraphs using sibling selector and
    // margin-top.
    '& + &': {
      marginTop: theme.spacing[2],
    },
  },
}
