import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                      Componentry <Alert /> styles
// -----------------------------------------------------------------

export const alertStyles: Record<string, unknown> = {
  // BASE
  '.C9Y-Alert-base': {
    // Make the alert container a flex container by default with space-between
    // to align close button to right side
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  '.C9Y-Alert-dismissible': {
    opacity: 1,
    transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '.C9Y-Alert-dismissed': {
    opacity: 0,
  },

  // VARIANTS
  '.C9Y-Alert-filled': {
    padding: theme.spacing[2],
    background: theme.colors.primary[100],
    color: theme.colors.primary[500],
    border: '1px solid transparent',
    borderRadius: theme.borderRadius.md,
    borderColor: theme.colors.primary[300],

    '& .C9Y-AlertLink': {
      fontWeight: theme.fontWeight.bold,
    },

    // TODO: Recreate this with a Divider component
    // '& hr': { borderTopColor: theme.colors.primary[300] },
  },

  // ELEMENTS
  '.C9Y-AlertContent': {
    flexGrow: 1,
    flexShrink: 1,
  },

  '.C9Y-AlertHeading': {
    color: 'inherit',
    marginBottom: theme.spacing[2],
  },

  '.C9Y-AlertClose': {
    flexShrink: 0,
    marginLeft: theme.spacing[1],
    color: 'inherit',
  },
}

// --------------------------------------------------------
// COLORS

// Example of adding theme colors to an alert variant
// const themeColors = ['info', 'success', 'warning', 'error'] as const
// themeColors.forEach((color) => {
//   Alert[`.C9Y-Alert-filled.C9Y-Alert-${color}Color`] = {
//     'background': theme.colors[color][100],
//     'borderColor': theme.colors[color][300],
//     'color': theme.colors[color][500],

//     '& .C9Y-Alert-link': {
//       color: theme.colors[color][500],
//       fontWeight: theme.fontWeight.bold,
//     },

//     '& hr': {
//       borderTopColor: theme.colors[color][300],
//     },
//   }
// })
