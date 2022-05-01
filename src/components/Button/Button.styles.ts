import { getMergedConfig } from '../../plugin-postcss/configs'
import { StylesDefinition } from '../../utils/types'

const { theme } = getMergedConfig()

//                                        <Button /> styles
// --------------------------------------------------------

export const buttonStyles: ButtonStyles = {
  // BASE
  '.C9Y-Button-base': {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    lineHeight: 1, // ensures text is center aligned within flex layout

    border: 'none', // reset borders for easier opt-in styling
    userSelect: 'none', // Prevent text selection on click of buttons
    whiteSpace: 'nowrap', // By default button content shouldn't wrap
  },

  '.C9Y-Button-DisabledWrapper': {
    cursor: 'not-allowed',
  },

  // VARIANTS
  '.C9Y-Button-filled': {
    height: '2rem',
    padding: '0 1rem',
    backgroundColor: theme.colors.primary[500],
    borderRadius: theme.borderRadius.DEFAULT,
    color: theme.colors.inverse,

    transition: 'background-color 0.15s linear',

    '&:hover, &.C9Y-hover': {
      backgroundColor: theme.colors.primary[700],
    },
    '&:active, &.C9Y-active': {
      backgroundColor: theme.colors.primary[900],
    },
    '&.C9Y-disabled': {
      backgroundColor: theme.colors.primary[300],
    },

    // For buttons with color options you'll typically define them in each variant
    // like:
    // '&.C9Y-Button-errorColor': { ... }
  },
  '.C9Y-Button-outlined': {
    height: '2rem',
    padding: '0 1rem',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.colors.primary[500]}`,
    borderRadius: theme.borderRadius.DEFAULT,
    color: theme.colors.primary[500],

    transition: 'color, border-color 0.15s linear',

    '&:hover, &.C9Y-hover': {
      borderColor: theme.colors.primary[700],
      color: theme.colors.primary[700],
    },
    '&:active, &.C9Y-active': {
      borderColor: theme.colors.primary[900],
      color: theme.colors.primary[900],
    },
    '&.C9Y-disabled': {
      borderColor: theme.colors.primary[300],
      color: theme.colors.primary[300],
    },
  },

  // SIZES
  '.C9Y-Button-smallSize': {
    height: '1.5rem',
    borderRadius: theme.borderRadius.DEFAULT,
    fontSize: '0.75rem',
    padding: '0rem 0.5rem',
  },
  '.C9Y-Button-largeSize': {
    height: '2.5rem',
    borderRadius: theme.borderRadius.md,
    fontSize: '1rem',
    padding: '0 2rem',
  },

  // ICONS
  '.C9Y-Button-Icon': {
    fontSize: '1rem',
  },
  '.C9Y-Button-Icon-smallSize': {
    fontSize: '0.75rem',
  },
  '.C9Y-Button-Icon-largeSize': {
    fontSize: '1.25rem',
  },
}

export interface ButtonStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Button-base': StylesDefinition
  /** Class applied to disabled button wrapper element */
  '.C9Y-Button-DisabledWrapper': StylesDefinition
  /** Base class applied to all Button Icons */
  '.C9Y-Button-Icon': StylesDefinition
  /** Variant class applied when `variant="filled"` */
  '.C9Y-Button-filled': {
    '&:hover, &.C9Y-hover': StylesDefinition
    '&:active, &.C9Y-active': StylesDefinition
    '&.C9Y-disabled': StylesDefinition
  } & StylesDefinition
  /** Variant class applied when `variant="outlined"` */
  '.C9Y-Button-outlined': {
    '&:hover, &.C9Y-hover': StylesDefinition
    '&:active, &.C9Y-active': StylesDefinition
    '&.C9Y-disabled': StylesDefinition
  } & StylesDefinition
  /** Sizing class applied when `size="small"` */
  '.C9Y-Button-smallSize': StylesDefinition
  /** Sizing class applied when `size="large"` */
  '.C9Y-Button-largeSize': StylesDefinition
  /** Sizing class applied to Button Icons when `size="small"` */
  '.C9Y-Button-Icon-smallSize': StylesDefinition
  /** Sizing class applied Button Icons when `size="large"` */
  '.C9Y-Button-Icon-largeSize': StylesDefinition
}
