import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                          <Card /> styles
// --------------------------------------------------------

export const Card = {
  '.🅲Card-base': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    wordWrap: 'break-word',
    backgroundClip: 'border-box',
  },

  '.🅲Card-outlined': {
    backgroundColor: theme.colors.background,
    border: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,
    borderRadius: theme.borderRadius.md,
  },

  // --- BODY SUB-COMPONENT
  '.🅲CardBody': {
    // Enable `flex-grow: 1` for decks and groups so that card blocks take up
    // as much space as possible, ensuring footers are aligned to the bottom.
    flex: '1 1 auto',
    padding: theme.spacing[2],
  },

  // --- HEADER SUB-COMPONENT
  '.🅲CardHeader': {
    'padding': theme.spacing[2],
    //   margin-bottom: 0; // Removes the default margin-bottom of <hN>
    'backgroundColor': theme.colors.background,
    'borderBottom': `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,

    '&:first-child': {
      borderRadius: `3px 3px 0 0`, // 🤔 To properly handle layout this value needs to be: card borderRadius - card borderWidth
    },
  },

  // --- FOOTER SUB-COMPONENT
  '.🅲CardFooter': {
    'padding': theme.spacing[2],
    'backgroundColor': theme.colors.background,
    'borderTop': `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,

    '&:last-child': {
      borderRadius: `0 0 3px 3px`, // 🤔 To properly handle layout this value needs to be: card borderRadius - card borderWidth
    },
  },

  // --- TITLE SUB-COMPONENT
  '.🅲CardTitle': {
    fontSize: theme.fontSize.h3,
    color: theme.colors.gray[900], // Matches default header color
  },
  '.🅲CardSubtitle': {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gray[600],
  },
}