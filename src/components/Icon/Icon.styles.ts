import { StylesDefinition } from '../../utils/types'

//                                         <Icon /> styles
// -------------------------------------------------------

export const iconStyles: IconStyles = {
  // BASE
  '.C9Y-Icon-base': {
    display: 'inline-block',
    userSelect: 'none',
  },

  // VARIANTS
  '.C9Y-Icon-font': {
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

export interface IconStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Icon-base': StylesDefinition
  /** Variant class applied when `variant="font"` */
  '.C9Y-Icon-font': StylesDefinition
}
