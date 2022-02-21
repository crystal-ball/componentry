import { getMergedConfig } from '../../plugin-postcss/configs'
import { StylesDefinition } from '../../utils/types'

//                                         <Text /> styles
// -------------------------------------------------------

const { theme } = getMergedConfig()

export const textStyles: TextStyles = {
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
    fontSize: theme.fontSize.body,
    color: theme.colors.gray[800],

    // Set spacing between multiple paragraphs using sibling selector and
    // margin-top.
    '& + &': {
      marginTop: theme.spacing[2],
    },
  },
}

/** @public */
export type TextStyles = {
  /** Base class applied to all variants for shared structural styles */
  '.🅲Text-base': StylesDefinition
  /** Variant class applied when `variant="h1"` */
  '.🅲Text-h1': StylesDefinition
  /** Variant class applied when `variant="h2"` */
  '.🅲Text-h2': StylesDefinition
  /** Variant class applied when `variant="h3"` */
  '.🅲Text-h3': StylesDefinition
  /** Variant class applied when `variant="body"` */
  '.🅲Text-body': {
    /** Sibling selector for auto-spacing multiple body elements */
    '& + &': StylesDefinition
  } & StylesDefinition
}
