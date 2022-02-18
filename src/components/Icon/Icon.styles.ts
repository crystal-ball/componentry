//                                         <Icon /> styles
// -------------------------------------------------------

export const Icon = {
  // BASE
  '.🅲Icon-base': {
    display: 'inline-block',
    userSelect: 'none',
  },

  // VARIANTS
  '.🅲Icon-font': {
    // 1em width+height makes icons font-sized by default 🔮
    height: '1em',
    width: '1em',
    // Helpful default to help prevent icon from getting squished
    flexShrink: 0,
    // Alignment: In flex layouts default to centered
    alignSelf: 'center',
    // Alignment: Outside flex layouts center to text baseline with negative vertical align
    verticalAlign: '-.15em',
    // Default to use the parent color as the icon color
    fill: 'currentColor',
  },

  // SIZES
  // ...coming soon
}
