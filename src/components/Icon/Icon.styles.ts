//                                         <Icon /> styles
// -------------------------------------------------------

export const Icon = {
  // BASE
  '.🅲Icon-base': {},

  // VARIANTS
  '.🅲Icon-font': {
    display: 'inline', // default disregard any margin/paddings
    alignSelf: 'center',
    flexShrink: 0,
    verticalAlign: 'unset',
    // width + height of 1em makes icons font-sized by default 🎓
    height: '1em',
    width: '1em',
    // Default to use the parent color as the icon color
    fill: 'none',
    stroke: 'currentColor',
  },

  '.🅲Icon-baseline': {
    // Use negative margin bottom to align icon baseline with text, this is required
    // when you can't use the icon in a flex context
    // ref: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
    marginBottom: '-0.125em',
  },

  // TODO:
  // BACKGROUND ICONS
  // By default Componentry provides a very simple set of icon classes with background
  // images, but this is not the recommended system. Consumers should set up an SVG
  // icon system and set $include-icons to false to use real SVGs for icons.
  // '.icon-close': {
  //   backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23${theme.colors.gray[500]}' viewBox='0 0 32 32'%3E%3Cpath d='M32,3.22,19.22,16,32,28.78,28.78,32,16,19.22,3.22,32,0,28.78,12.78,16,0,3.22,3.22,0,16,12.78,28.78,0Z'/%3E%3C/svg%3E")`,
  // },
}
