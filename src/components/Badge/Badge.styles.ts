import { type CSSProperties } from 'react'
import { Theme } from '../../theme/theme'

//                                         <Badge /> styles
// --------------------------------------------------------

export const badgeStyles = (theme: Theme): BadgeStyles => ({
  '.C9Y-Badge-base': {
    display: 'inline-flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',

    // Empty badges collapse automatically
    '&:empty': {
      display: 'none',
    },
  },

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
})

export interface BadgeStyles {
  '.C9Y-Badge-base': {
    '&:empty': CSSProperties
  } & CSSProperties
  '.C9Y-Badge-filled': CSSProperties
}
