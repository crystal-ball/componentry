import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                         <Link /> styles
// -------------------------------------------------------

export const Link = {
  // BASE
  '.🅲Link-base': {
    // Reset browser defaults for when Link renders a button element
    border: 'none',
  },

  // VARIANTS
  '.🅲Link-text': {
    'fontSize': theme.fontSize.body,
    'color': theme.colors.primary[500],
    'textDecoration': 'underline',
    '&:hover': {
      color: theme.colors.primary[700],
    },
  },

  '.🅲Link-inherit': {
    'fontSize': 'inherit',
    'fontWeight': 'inherit',
    'color': theme.colors.primary[500],
    'textDecoration': 'underline',
    '&:hover': {
      color: theme.colors.primary[700],
    },
  },
}

// --- ℹ️ Disabled link styles
// Componentry doesn't include disabled link styles as a UX best
// practice, but if necessary it's best to define normal link styles
// using `.link[href]` as the selector, and `link` as a 'disabled' link and
// then don't pass an href to create a 'placeholder link'
