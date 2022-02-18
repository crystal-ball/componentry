import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                        <Button /> styles
// --------------------------------------------------------

export const Button = {
  // BASE
  '.🅲Button-base': {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    lineHeight: 1, // ensures text is center aligned within flex layout

    userSelect: 'none', // Prevent text selection on click of buttons
    whiteSpace: 'nowrap', // By default button content shouldn't wrap

    '&.🅲-disabled': {
      cursor: 'default',
      pointerEvents: 'none',
    },
  },

  // VARIANTS
  '.🅲Button-filled': {
    height: '2rem',
    padding: '0 1rem',
    backgroundColor: theme.colors.primary[500],
    border: `1px solid ${theme.colors.primary[500]}`,
    borderRadius: theme.borderRadius.md,
    color: theme.colors.inverse,
    fontSize: theme.fontSize.small,

    transition: 'background-color 0.15s linear',

    '&:hover, &.🅲-hover': {
      borderColor: theme.colors.primary[500],
      backgroundColor: theme.colors.primary[700],
    },
    '&:active, &.🅲-active': {
      borderColor: theme.colors.primary[700],
      backgroundColor: theme.colors.primary[900],
    },
    '&.🅲-disabled': {
      borderColor: theme.colors.primary[300],
      backgroundColor: theme.colors.primary[300],
    },

    // For buttons with color options you'll typically define them in each variant
    // like:
    // '&.🅲Button-errorColor': { ... }
  },
  '.🅲Button-outlined': {
    height: '2rem',
    padding: '0 1rem',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.colors.primary[500]}`,
    borderRadius: theme.borderRadius.md,
    color: theme.colors.primary[500],
    fontSize: theme.fontSize.small,

    transition: 'color 0.15s linear',

    '&:hover, &.🅲-hover': {
      borderColor: theme.colors.primary[700],
      color: theme.colors.primary[700],
    },
    '&:active, &.🅲-active': {
      borderColor: theme.colors.primary[900],
      color: theme.colors.primary[900],
    },
    '&.🅲-disabled': {
      borderColor: theme.colors.primary[300],
      color: theme.colors.primary[300],
    },
  },

  // SIZES
  '.🅲Button-smallSize': {
    height: '1.5rem',
    borderRadius: theme.borderRadius.md,
    fontSize: theme.fontSize.small,
    padding: '0rem 0.5rem',
  },
  '.🅲Button-largeSize': {
    height: '2.5rem',
    borderRadius: theme.borderRadius.lg,
    fontSize: theme.fontSize.large,
    padding: '0 2rem',
  },
}
