import { theme } from '../../theme-defaults'

//                                         <Link /> styles
// -------------------------------------------------------

export const linkStyles = {
  // BASE
  '.🅲Link-base': {},

  // VARIANTS
  '.🅲Link-text': {
    'color': theme.colors.primary[500],
    '&:hover': {
      color: theme.colors.primary[900],
    },
  },
}

// --- ℹ️ Disabled link styles
// Componentry doesn't include disabled link styles as a UX best
// practice, but if necessary it's best to define normal link styles
// using `.link[href]` as the selector, and `link` as a 'disabled' link and
// then don't pass an href to create a 'placeholder link'
