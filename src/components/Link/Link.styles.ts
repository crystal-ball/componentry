import { getMergedConfig } from '../../plugin-postcss/configs'
import { StylesDefinition } from '../../utils/types'

const { theme } = getMergedConfig()

//                                         <Link /> styles
// -------------------------------------------------------

export const linkStyles: LinkStyles = {
  // BASE
  '.C9Y-Link-base': {
    // Reset browser defaults for when Link renders a button element
    border: 'none',
  },

  '.C9Y-Link-DisabledWrapper': {
    cursor: 'not-allowed',
  },

  // VARIANTS
  '.C9Y-Link-text': {
    fontSize: 'inherit',
    color: theme.colors.primary[500],
    textDecoration: 'underline',
    '&:hover, .C9Y-hover': {
      color: theme.colors.primary[700],
    },
    '&:active, &.C9Y-active': {
      color: theme.colors.primary[900],
    },
    '&:disabled, &.C9Y-disabled': {
      color: theme.colors.primary[300],
    },
  },
}

export interface LinkStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Link-base': StylesDefinition
  /** Class applied to disabled links' wrapper element */
  '.C9Y-Link-DisabledWrapper': StylesDefinition
  /** Variant class applied when `variant="text"` */
  '.C9Y-Link-text': {
    '&:hover, .C9Y-hover': StylesDefinition
    '&:active, &.C9Y-active': StylesDefinition
    '&:disabled, &.C9Y-disabled': StylesDefinition
  } & StylesDefinition
}
