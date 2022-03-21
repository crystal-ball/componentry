import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                          <Card /> styles
// --------------------------------------------------------

export const cardStyles = {
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
    border: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,
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
    borderBottom: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,

    '&:first-child': {
      borderRadius: `3px 3px 0 0`, // 🤔 To properly handle layout this value needs to be: card borderRadius - card borderWidth
    },
  },

  // --- FOOTER SUB-COMPONENT
  '.C9Y-CardFooter': {
    padding: theme.spacing[4],
    backgroundColor: theme.colors.background,
    borderTop: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,

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
    fontSize: theme.fontSize.small,
    color: theme.colors.gray[600],
  },
}
