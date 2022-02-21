import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                        <Button /> styles
// --------------------------------------------------------

export const buttonStyles = {
  // BASE
  '.C9Y-Button-base': {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    lineHeight: 1, // ensures text is center aligned within flex layout

    userSelect: 'none', // Prevent text selection on click of buttons
    whiteSpace: 'nowrap', // By default button content shouldn't wrap

    '&.C9Y-disabled': {
      cursor: 'default',
      pointerEvents: 'none',
    },
  },

  // VARIANTS
  '.C9Y-Button-filled': {
    height: '2rem',
    padding: '0 1rem',
    backgroundColor: theme.colors.primary[500],
    border: `1px solid ${theme.colors.primary[500]}`,
    borderRadius: theme.borderRadius.md,
    color: theme.colors.inverse,
    fontSize: theme.fontSize.small,

    transition: 'background-color 0.15s linear',

    '&:hover, &.C9Y-over': {
      borderColor: theme.colors.primary[500],
      backgroundColor: theme.colors.primary[700],
    },
    '&:active, &.C9Y-active': {
      borderColor: theme.colors.primary[700],
      backgroundColor: theme.colors.primary[900],
    },
    '&.C9Y-disabled': {
      borderColor: theme.colors.primary[300],
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
    borderRadius: theme.borderRadius.md,
    color: theme.colors.primary[500],
    fontSize: theme.fontSize.small,

    transition: 'color 0.15s linear',

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
    borderRadius: theme.borderRadius.md,
    fontSize: theme.fontSize.small,
    padding: '0rem 0.5rem',
  },
  '.C9Y-Button-largeSize': {
    height: '2.5rem',
    borderRadius: theme.borderRadius.lg,
    fontSize: theme.fontSize.large,
    padding: '0 2rem',
  },
}
