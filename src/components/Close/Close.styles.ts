//                                        <Close /> styles
// --------------------------------------------------------

// The 🅲Close-base class allows for targeted styles for close buttons. The
// .icon-close can also be styled for SVG customizations.
//
// 📝 Close originally included a `color` and `fontSize` style, but due to
// ordering these styles would override Alert close customizations so they were
// removed to keep this element as flexible as possible. -> The intent is that
// this building block will be used in other design system elements, and those
// elements can customize size/color as needed
//
// ℹ️ The background image styles for close icons is located in the Icon styles
export const Close = {
  '.🅲Close-base': {
    // Layout
    'alignItems': 'center',
    'display': 'inline-flex',
    'justifyContent': 'center',
    'lineHeight': 1, // ensures icon is center aligned within flex layout

    // Button resets
    'appearance': 'none', // Remove Chrome native button styling
    'padding': 0,
    'backgroundColor': 'transparent',
    'border': 'none',
    'borderRadius': 0,
    'userSelect': 'none',

    // Animate close icon opacity on hover
    'opacity': 0.6,
    'transition': 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',

    '&:hover,&:focus': {
      opacity: 1,
    },
  },
}
