import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                      Componentry <Alert /> styles
// -----------------------------------------------------------------

export const Alert: Record<string, unknown> = {
  // BASE
  '.🅲Alert-base': {
    // Make the alert container a flex container by default with space-between
    // to align close button to right side
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  // VARIANTS
  '.🅲Alert-filled': {
    'padding': theme.spacing[2],
    'background': theme.colors.primary[100],
    'color': theme.colors.primary[500],
    'border': '1px solid transparent',
    'borderRadius': theme.borderRadius.md,
    'borderColor': theme.colors.primary[300],

    '& .🅲Alert-link': {
      fontWeight: theme.fontWeight.bold,
    },

    '& hr': {
      borderTopColor: theme.colors.primary[300],
    },
  },

  // ELEMENTS
  '.🅲Alert-content': {
    flexGrow: 1,
    flexShrink: 1,
  },

  '.🅲Alert-heading': {
    color: 'inherit',
    marginBottom: theme.spacing[2],
  },

  '.🅲Alert-close': {
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
