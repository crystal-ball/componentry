import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                      Componentry <Alert /> styles
// -----------------------------------------------------------------

export const alertStyles: Record<string, unknown> = {
  // BASE
  '.🅲Alert-base': {
    // Make the alert container a flex container by default with space-between
    // to align close button to right side
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  '.🅲Alert-dismissible': {
    opacity: 1,
    transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '.🅲Alert-dismissed': {
    opacity: 0,
  },

  // VARIANTS
  '.🅲Alert-filled': {
    padding: theme.spacing[2],
    background: theme.colors.primary[100],
    color: theme.colors.primary[500],
    border: '1px solid transparent',
    borderRadius: theme.borderRadius.md,
    borderColor: theme.colors.primary[300],

    '& .🅲AlertLink': {
      fontWeight: theme.fontWeight.bold,
    },

    // TODO: Recreate this with a Divider component
    // '& hr': { borderTopColor: theme.colors.primary[300] },
  },

  // ELEMENTS
  '.🅲AlertContent': {
    flexGrow: 1,
    flexShrink: 1,
  },

  '.🅲AlertHeading': {
    color: 'inherit',
    marginBottom: theme.spacing[2],
  },

  '.🅲AlertClose': {
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
//   Alert[`.🅲Alert-filled.🅲Alert-${color}Color`] = {
//     'background': theme.colors[color][100],
//     'borderColor': theme.colors[color][300],
//     'color': theme.colors[color][500],

//     '& .🅲Alert-link': {
//       color: theme.colors[color][500],
//       fontWeight: theme.fontWeight.bold,
//     },

//     '& hr': {
//       borderTopColor: theme.colors[color][300],
//     },
//   }
// })
