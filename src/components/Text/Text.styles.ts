import { getMergedConfig } from '../../plugin-postcss/configs'
import { StylesDefinition } from '../../utils/types'

//                                         <Text /> styles
// -------------------------------------------------------

const { theme } = getMergedConfig()

export const textStyles: TextStyles = {
  // BASE
  '.C9Y-Text-base': {},

  // VARIANTS
  '.C9Y-Text-h1': {
    fontSize: theme.fontSize.h1,
    color: theme.colors.gray[900],
  },
  '.C9Y-Text-h2': {
    fontSize: theme.fontSize.h2,
    color: theme.colors.gray[900],
  },
  '.C9Y-Text-h3': {
    fontSize: theme.fontSize.h3,
    color: theme.colors.gray[900],
  },
  '.C9Y-Text-body': {
    fontSize: theme.fontSize.body,
    color: theme.colors.gray[800],

    // Set spacing between multiple paragraphs using sibling selector and
    // margin-top.
    '& + &': {
      marginTop: theme.spacing[2],
    },
  },
}

export interface TextStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Text-base': StylesDefinition
  /** Variant class applied when `variant="h1"` */
  '.C9Y-Text-h1': StylesDefinition
  /** Variant class applied when `variant="h2"` */
  '.C9Y-Text-h2': StylesDefinition
  /** Variant class applied when `variant="h3"` */
  '.C9Y-Text-h3': StylesDefinition
  /** Variant class applied when `variant="body"` */
  '.C9Y-Text-body': {
    /** Sibling selector for auto-spacing multiple body elements */
    '& + &': StylesDefinition
  } & StylesDefinition
}
