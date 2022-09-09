import { type CSSProperties } from 'react'
import { Theme } from '../../theme/theme'

//                                         <Text /> styles
// -------------------------------------------------------

export const textStyles = (theme: Theme): TextStyles => ({
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
      marginTop: theme.spacing[4],
    },
  },
})

export interface TextStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Text-base': CSSProperties
  /** Variant class applied when `variant="h1"` */
  '.C9Y-Text-h1': CSSProperties
  /** Variant class applied when `variant="h2"` */
  '.C9Y-Text-h2': CSSProperties
  /** Variant class applied when `variant="h3"` */
  '.C9Y-Text-h3': CSSProperties
  /** Variant class applied when `variant="body"` */
  '.C9Y-Text-body': {
    /** Sibling selector for auto-spacing multiple body elements */
    '& + &': CSSProperties
  } & CSSProperties
}
