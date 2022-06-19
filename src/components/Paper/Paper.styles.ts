import { getMergedConfig } from '../../plugin-postcss/configs'
import { StylesDefinition } from '../../utils/types'

const { theme } = getMergedConfig()

//                                         <Paper /> styles
// -------------------------------------------------------

export const paperStyles: PaperStyles = {
  // BASE
  '.C9Y-Paper-base': {
    borderRadius: theme.borderRadius.DEFAULT,
  },

  // VARIANTS
  '.C9Y-Paper-flat': {
    border: theme.border.DEFAULT,
  },
}

export interface PaperStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Paper-base': StylesDefinition
  /** Variant class applied when `variant="flat"` */
  '.C9Y-Paper-flat': StylesDefinition
}
