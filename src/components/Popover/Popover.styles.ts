import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                       <Popover /> styles
// --------------------------------------------------------

const arrowWidth = 4 // in pixels

export const popoverStyles = {
  // --- CONTAINER
  '.🅲Popover-base': {
    // Default align content to dead center of action the specific content styles can
    // then easily move to top/left/right/bottom where needed
    'alignItems': 'center',
    'display': 'inline-flex', // flex instead of block for easier center alignment of content
    'justifyContent': 'center',
    'position': 'relative',

    // Directional styles

    '&.🅲Popover-top': {
      '.🅲PopoverContent': {
        bottom: '100%',
        justifyContent: 'center',
      },

      '.🅲PopoverContentContents': {
        // Top requires bumping bottom 100% again to compensate for container not having
        // any height
        bottom: '100%',
        marginBottom: `${arrowWidth}px`,
      },

      '.🅲PopoverArrow:after': {
        // top: 100%,
        // width: 100%,
        // }
        bottom: `${arrowWidth * 0.5}px`,
      },
    },

    '&.🅲Popover-right': {
      '.🅲PopoverContent': {
        left: '100%',
        alignItems: 'center',
      },

      '.🅲PopoverContentContents': {
        marginLeft: `${arrowWidth}px`,
      },

      // '.🅲PopoverArrow': {
      //   height: '100%',
      //   right: '100%',
      // },

      '.🅲PopoverArrow:after': {
        left: `${arrowWidth * 0.5}px`,
      },
    },

    '&.🅲Popover-bottom': {
      '.🅲PopoverContent': {
        top: '100%',
        justifyContent: 'center',
      },

      '.🅲PopoverContentContents': {
        marginTop: `${arrowWidth}px`,
      },

      // '.tipContainer': {
      //   bottom: '100%',
      //   width: '100%',
      // },

      '.🅲PopoverArrow:after': {
        top: `${arrowWidth * 0.5}px`,
      },
    },

    '&.🅲Popover-left': {
      '.🅲PopoverContent': {
        right: '100%',
        alignItems: 'center',
      },

      '.🅲PopoverContentContents': {
        marginRight: `${arrowWidth}px`,
        right: 0,
      },

      // '.tip-container': {
      //   height: '100%',
      //   left: '100%',
      // },

      '.🅲PopoverArrow:after': {
        right: `${arrowWidth * 0.5}px`,
      },
    },
  },

  // --- Popover action ------------------------------------

  '.🅲PopoverAction': {},

  // Content container overrides the width constraints for parent element
  '.🅲PopoverContent': {
    width: '300px',
    position: 'absolute',
    display: 'inline-flex',
  },

  // Content Element - The content element should be used to wrap a body/header element
  '.🅲PopoverContentContents': {
    display: 'block',
    position: 'absolute',
    maxWidth: '300px',
    backgroundClip: 'padding-box',
    backgroundColor: theme.colors.background,
    border: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,
    fontSize: theme.fontSize.small,
    // Allow breaking very long words so they don't overflow the popover's bounds
    wordWrap: 'break-word',

    // box-shadow: box-shadow($popover-box-shadow),
    borderRadius: theme.borderRadius.md,

    // '.tip-container': {
    //   alignItems: 'center',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   overflow: 'hidden',
    //   position: 'absolute',
    // },
  },

  // The .tip container creates a containing box of the same height and width as the
  // tip with overflow hidden. Then inside that container we create a square of the
  // same dimensions, and rotate it 45 degrees to create the tip effect
  '.🅲PopoverArrow': {
    'height': `${arrowWidth}px`,
    'overflow': 'hidden',
    'width': `${arrowWidth}px`,

    '&:after': {
      border: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,
      // box-shadow: $popover-box-shadow,
      background: theme.colors.background,
      content: "''",
      height: `${arrowWidth}px`,
      position: 'absolute',
      transform: 'rotate(45deg)',
      width: `${arrowWidth}px`,
    },
  },

  // --- BODY
  // Body element should contain popover inner content
  '.🅲PopoverBody': {
    padding: theme.spacing[2],
    color: theme.colors.gray[700],
  },

  // --- HEADING
  '.🅲PopoverHeading': {
    padding: theme.spacing[1],
    // Try to guarantee that spacing is correct regardless of div vs h* usage
    marginTop: 0,
    marginBottom: 0,
    fontSize: theme.fontSize.large,
    color: theme.colors.gray[900],
    borderBottom: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,
  },
}
