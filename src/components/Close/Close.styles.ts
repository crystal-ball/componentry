import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                        <Button /> styles
// --------------------------------------------------------

// Componentry supports using an SVG icon so that applications can choose a close
// icon that fits their theme, as well as using flexbox on containers with close
// buttons instead of floats.

// The 🅲Close classes allows for targeted styles for the close buttons. The .icon-close
// can also be styled for close buttons only using that as a target
// ℹ️ The background image styles for close icons is located in `/styles/componentry/icons`
export const Close = {
  '.🅲Close-base': {
    // Layout
    'alignItems': 'center',
    'display': 'inline-flex',
    'justifyContent': 'center',
    'lineHeight': 1, // ensures text is center aligned within flex layout

    // Button resets
    'appearance': 'none', // Remove Chrome native button styling
    'padding': 0,
    'backgroundColor': 'transparent',
    'border': 'none',
    'borderRadius': 0,

    'color': theme.colors.gray[500],
    'fontSize': theme.fontSize.base,

    'userSelect': 'auto',

    // Animate close icon opacity on hover
    'opacity': 0.6,
    'transition': 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',

    '&:hover,&:focus': {
      opacity: 1,
    },
  },
}
