import { theme } from '../../theme-defaults'

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

  // VARIANTS
  '.🅲Alert-filled': {
    padding: theme.spacing[2],
    border: '1px solid transparent',
    borderRadius: theme.borderRadius.md,
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
  },
}

// --------------------------------------------------------
// COLORS

const themeColors = ['primary', 'info', 'success', 'warning', 'error'] as const
themeColors.forEach((color) => {
  alertStyles[`.🅲Alert-filled.🅲Alert-${color}Color`] = {
    'background': theme.colors[color][100],
    'borderColor': theme.colors[color][300],
    'color': theme.colors[color][500],

    '& .🅲Alert-link': {
      color: theme.colors[color][500],
      fontWeight: theme.fontWeight.bold,
    },

    '& hr': {
      borderTopColor: theme.colors[color][300],
    },
  }
})
