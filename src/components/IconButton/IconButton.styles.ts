import { getMergedConfig } from '../../plugin-postcss/configs'
import { StylesDefinition } from '../../utils/types'

const { theme } = getMergedConfig()

//                                        <Button /> styles
// --------------------------------------------------------

export const iconButtonStyles: IconButtonStyles = {
  // BASE
  '.C9Y-IconButton-base': {
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

  '.C9Y-IconButton-DisabledWrapper': {
    cursor: 'not-allowed',
  },

  // VARIANTS
  '.C9Y-IconButton-filled': {
    height: '2rem',
    width: '2rem',
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
    '&:disabled, &.C9Y-disabled': {
      backgroundColor: theme.colors.primary[300],
    },
  },

  '.C9Y-IconButton-outlined': {
    height: '2rem',
    width: '2rem',
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
    '&:disabled, &.C9Y-disabled': {
      borderColor: theme.colors.primary[300],
      color: theme.colors.primary[300],
    },
  },

  // SIZES
  '.C9Y-IconButton-smallSize': {
    height: '1.5rem',
    width: '1.5rem',
    fontSize: '0.75rem',
  },
  '.C9Y-IconButton-largeSize': {
    height: '2.5rem',
    width: '2.5rem',
    fontSize: '1rem',
  },
}

export interface IconButtonStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-IconButton-base': StylesDefinition
  /** Class applied to disabled button wrapper element */
  '.C9Y-IconButton-DisabledWrapper': StylesDefinition

  /** Variant class applied when `variant="transparent"` */
  '.C9Y-IconButton-filled': {
    '&:hover, &.C9Y-hover': StylesDefinition
    '&:active, &.C9Y-active': StylesDefinition
    '&:disabled, &.C9Y-disabled': StylesDefinition
  } & StylesDefinition
  /** Variant class applied when `variant="outlined"` */
  '.C9Y-IconButton-outlined': {
    '&:hover, &.C9Y-hover': StylesDefinition
    '&:active, &.C9Y-active': StylesDefinition
    '&:disabled, &.C9Y-disabled': StylesDefinition
  } & StylesDefinition
  /** Sizing class applied when `size="small"` */
  '.C9Y-IconButton-smallSize': StylesDefinition
  /** Sizing class applied when `size="large"` */
  '.C9Y-IconButton-largeSize': StylesDefinition
}
