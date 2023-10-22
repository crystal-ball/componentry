import { type CSSProperties } from 'react'
import { Theme } from '../../theme/theme'

//                                        <Button /> styles
// --------------------------------------------------------

export const buttonStyles = (theme: Theme): ButtonStyles => ({
  // BASE
  '.C9Y-Button-base': {
    height: '2rem',
    padding: '0 1rem',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    lineHeight: 1, // ensures text is center aligned within flex layout

    border: 'none', // reset borders for easier opt-in styling
    userSelect: 'none', // Prevent text selection on click of buttons
    whiteSpace: 'nowrap', // By default button content shouldn't wrap

    '&:disabled, &.C9Y-disabled': {
      cursor: 'not-allowed',
    },

    // ICONS
    '&:has(> svg:last-child)': {
      paddingRight: '0.75rem',
    },

    '&:has(> svg:first-child)': {
      paddingLeft: '0.75rem',
    },

    '&:has(> svg:only-child)': {
      width: '2rem',
      padding: 0,
    },
  },

  // VARIANTS
  '.C9Y-Button-filled': {
    backgroundColor: theme.colors.primary[500],
    borderRadius: theme.borderRadius.DEFAULT,
    color: theme.colors.inverse,

    transition: 'background-color 0.15s linear',

    '&:hover, &.C9Y-hovered': {
      backgroundColor: theme.colors.primary[700],
    },
    '&:active, &.C9Y-pressed': {
      backgroundColor: theme.colors.primary[900],
    },
    '&:disabled, &.C9Y-disabled': {
      backgroundColor: theme.colors.primary[300],
    },

    // For buttons with color options you can define them in each variant, eg:
    // '&.C9Y-Button-errorColor': { ... }
  },
  '.C9Y-Button-outlined': {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.colors.primary[500]}`,
    borderRadius: theme.borderRadius.DEFAULT,
    color: theme.colors.primary[500],

    transition: 'color, border-color 0.15s linear',

    '&:hover, &.C9Y-hovered': {
      borderColor: theme.colors.primary[700],
      color: theme.colors.primary[700],
    },
    '&:active, &.C9Y-pressed': {
      borderColor: theme.colors.primary[900],
      color: theme.colors.primary[900],
    },
    '&:disabled, &.C9Y-disabled': {
      borderColor: theme.colors.primary[300],
      color: theme.colors.primary[300],
    },
  },

  // SIZES
  '.C9Y-Button-smallSize': {
    height: '1.5rem',
    gap: '0.375rem',
    padding: '0rem 0.5rem',
    borderRadius: theme.borderRadius.DEFAULT,
    fontSize: '0.75rem',

    '&:has(> svg:last-child)': {
      paddingRight: '0.5rem',
    },

    '&:has(> svg:first-child)': {
      paddingLeft: '0.5rem',
    },

    '&:has(> svg:only-child)': {
      width: '1.5rem',
      padding: 0,
    },
  },

  '.C9Y-Button-largeSize': {
    height: '2.5rem',
    gap: '0.625rem',
    padding: '0 1.5rem',
    borderRadius: theme.borderRadius.md,
    fontSize: '1rem',

    '&:has(> svg:last-child)': {
      paddingRight: '1.25rem',
    },

    '&:has(> svg:first-child)': {
      paddingLeft: '1.25rem',
    },

    '&:has(> svg:only-child)': {
      width: '2.5rem',
      padding: 0,
    },
  },
})

export interface ButtonStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Button-base': {
    '&:has(> svg:last-child)': CSSProperties
    '&:has(> svg:first-child)': CSSProperties
    '&:has(> svg:only-child)': CSSProperties
    '&:disabled, &.C9Y-disabled': CSSProperties
  } & CSSProperties

  /** Variant class applied when `variant="filled"` */
  '.C9Y-Button-filled': {
    '&:hover, &.C9Y-hovered': CSSProperties
    '&:active, &.C9Y-pressed': CSSProperties
    '&:disabled, &.C9Y-disabled': CSSProperties
  } & CSSProperties
  /** Variant class applied when `variant="outlined"` */
  '.C9Y-Button-outlined': {
    '&:hover, &.C9Y-hovered': CSSProperties
    '&:active, &.C9Y-pressed': CSSProperties
    '&:disabled, &.C9Y-disabled': CSSProperties
  } & CSSProperties

  /** Sizing class applied when `size="small"` */
  '.C9Y-Button-smallSize': {
    '&:has(> svg:last-child)': CSSProperties
    '&:has(> svg:first-child)': CSSProperties
    '&:has(> svg:only-child)': CSSProperties
  } & CSSProperties
  /** Sizing class applied when `size="large"` */
  '.C9Y-Button-largeSize': {
    '&:has(> svg:last-child)': CSSProperties
    '&:has(> svg:first-child)': CSSProperties
    '&:has(> svg:only-child)': CSSProperties
  } & CSSProperties
}
