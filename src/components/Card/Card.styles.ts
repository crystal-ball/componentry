import { type CSSProperties } from 'react'
import { Theme } from '../../theme/theme'

//                                          <Card /> styles
// --------------------------------------------------------

export const cardStyles = (theme: Theme): CardStyles => ({
  '.C9Y-Card-base': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    wordWrap: 'break-word',
    backgroundClip: 'border-box',
  },

  '.C9Y-Card-outlined': {
    backgroundColor: theme.colors.background,
    border: theme.border.DEFAULT,
    borderRadius: theme.borderRadius.DEFAULT,
  },

  // --- BODY SUB-COMPONENT
  '.C9Y-CardBody': {
    // Enable `flex-grow: 1` for decks and groups so that card blocks take up
    // as much space as possible, ensuring footers are aligned to the bottom.
    flex: '1 1 auto',
    padding: theme.spacing[4],
  },

  // --- HEADER SUB-COMPONENT
  '.C9Y-CardHeader': {
    padding: theme.spacing[4],
    //   margin-bottom: 0; // Removes the default margin-bottom of <hN>
    backgroundColor: theme.colors.background,
    borderBottom: theme.border.DEFAULT,

    '&:first-child': {
      borderRadius: `3px 3px 0 0`, // 🤔 To properly handle layout this value needs to be: card borderRadius - card borderWidth
    },
  },

  // --- FOOTER SUB-COMPONENT
  '.C9Y-CardFooter': {
    padding: theme.spacing[4],
    backgroundColor: theme.colors.background,
    borderTop: theme.border.DEFAULT,

    '&:last-child': {
      borderRadius: `0 0 3px 3px`, // 🤔 To properly handle layout this value needs to be: card borderRadius - card borderWidth
    },
  },

  // --- TITLE SUB-COMPONENT
  '.C9Y-CardTitle': {
    fontSize: theme.fontSize.h3,
    color: theme.colors.gray[900], // Matches default header color
  },
  '.C9Y-CardSubtitle': {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gray[600],
  },
})

export interface CardStyles {
  '.C9Y-Card-base': CSSProperties
  '.C9Y-Card-outlined': CSSProperties
  '.C9Y-CardBody': CSSProperties
  '.C9Y-CardHeader': {
    '&:first-child': CSSProperties
  } & CSSProperties
  '.C9Y-CardFooter': {
    '&:last-child': CSSProperties
  } & CSSProperties
  '.C9Y-CardTitle': CSSProperties
  '.C9Y-CardSubtitle': CSSProperties
}
