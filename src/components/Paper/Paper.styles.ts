import { type CSSProperties } from 'react'
import { Theme } from '../../theme/theme'

//                                        <Paper /> styles
// -------------------------------------------------------

export const paperStyles = (theme: Theme): PaperStyles => ({
  // BASE
  '.C9Y-Paper-base': {
    borderRadius: theme.borderRadius.DEFAULT,
  },

  // VARIANTS
  '.C9Y-Paper-flat': {
    border: theme.border.DEFAULT,
  },
})

export interface PaperStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Paper-base': CSSProperties
  /** Variant class applied when `variant="flat"` */
  '.C9Y-Paper-flat': CSSProperties
}
