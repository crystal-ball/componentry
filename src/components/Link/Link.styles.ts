import { type CSSProperties } from 'react'
import { Theme } from '../../theme/theme'

//                                         <Link /> styles
// -------------------------------------------------------

export const linkStyles = (theme: Theme): LinkStyles => ({
  // BASE
  '.C9Y-Link-base': {
    // Reset browser defaults for when Link renders a button element
    border: 'none',

    '&:disabled, &.C9Y-disabled': {
      cursor: 'not-allowed',
    },
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
})

export interface LinkStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Link-base': { '&:disabled, &.C9Y-disabled': CSSProperties } & CSSProperties

  /** Variant class applied when `variant="text"` */
  '.C9Y-Link-text': {
    '&:hover, .C9Y-hover': CSSProperties
    '&:active, &.C9Y-active': CSSProperties
    '&:disabled, &.C9Y-disabled': CSSProperties
  } & CSSProperties
}
