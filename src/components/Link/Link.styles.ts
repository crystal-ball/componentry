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

  // VARIANTS
  '.C9Y-Link-text': {
    fontSize: theme.fontSize.body,
    color: theme.colors.primary[500],
    textDecoration: 'underline',
    '&:hover': {
      color: theme.colors.primary[700],
    },
  },

  '.C9Y-Link-inherit': {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    color: theme.colors.primary[500],
    textDecoration: 'underline',
    '&:hover': {
      color: theme.colors.primary[700],
    },
  },
}

export interface LinkStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Link-base': StylesDefinition
  /** Variant class applied when `variant="text"` */
  '.C9Y-Link-text': {
    '&:hover': StylesDefinition
  } & StylesDefinition
  /** Variant class applied when `variant="inherit"` */
  '.C9Y-Link-inherit': {
    '&:hover': StylesDefinition
  } & StylesDefinition
}

// --- ℹ️ Disabled link styles
// Componentry doesn't include disabled link styles as a UX best
// practice, but if necessary it's best to define normal link styles
// using `.link[href]` as the selector, and `link` as a 'disabled' link and
// then don't pass an href to create a 'placeholder link'
