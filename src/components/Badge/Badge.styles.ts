import { type CSSProperties } from 'react'
import { Theme } from '../../theme/theme'

//                                         <Badge /> styles
// --------------------------------------------------------

export const badgeStyles = (theme: Theme): BadgeStyles => ({
  // BASE
  '.C9Y-Badge-base': {
    display: 'inline-flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  },

  // VARIANTS
  '.C9Y-Badge-filled': {
    padding: '4px 8px',
    color: theme.colors.inverse,
    backgroundColor: theme.colors.gray[700],
    fontWeight: theme.fontWeight.bold,
    borderRadius: theme.borderRadius.DEFAULT,
    fontSize: theme.fontSize.sm,
    lineHeight: 1,
    // 💡 Use em with font-size and padding to auto-scale with text
  },

  // SIZES
  '.C9Y-Badge-smallSize': {
    fontSize: theme.fontSize.sm,
    padding: '2px 6px',
  },
  '.C9Y-Badge-largeSize': {
    fontSize: theme.fontSize.body,
    padding: '6px 12px',
  },
})

export interface BadgeStyles {
  /** Base class applied to all variants for shared structural styles */
  '.C9Y-Badge-base': CSSProperties
  /** Variant class applied when `variant="filled"` */
  '.C9Y-Badge-filled': CSSProperties
  /** Sizing class applied when `size="small"` */
  '.C9Y-Badge-smallSize': CSSProperties
  /** Sizing class applied when `size="large"` */
  '.C9Y-Badge-largeSize': CSSProperties
}
