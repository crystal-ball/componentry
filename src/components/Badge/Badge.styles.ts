import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                         <Badge /> styles
// --------------------------------------------------------

export const Badge = {
  '.🅲Badge-base': {
    'display': 'inline-flex',
    'alignItems': 'center',
    'whiteSpace': 'nowrap',

    // Empty badges collapse automatically
    '&:empty': {
      display: 'none',
    },
  },

  '.🅲Badge-filled': {
    padding: '4px 8px',
    color: theme.colors.inverse,
    backgroundColor: theme.colors.gray[700],
    fontWeight: theme.fontWeight.bold,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.fontSize.sm,
    lineHeight: 1,
    // 💡 Use em with font-size and padding to auto-scale with text
  },
}
