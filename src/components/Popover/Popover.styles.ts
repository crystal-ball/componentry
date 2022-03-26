import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                       <Popover /> styles
// --------------------------------------------------------

const arrowWidth = 4 // in pixels

export const popoverStyles = {
  // --- CONTAINER
  '.C9Y-Popover-base': {
    // Default align content to dead center of action the specific content styles can
    // then easily move to top/left/right/bottom where needed
    alignItems: 'center',
    display: 'inline-flex', // flex instead of block for easier center alignment of content
    justifyContent: 'center',
    position: 'relative',

    // Directional styles

    '&.C9Y-Popover-top': {
      '.C9Y-PopoverContent': {
        bottom: '100%',
        justifyContent: 'center',
      },

      '.C9Y-PopoverContentContents': {
        // Top requires bumping bottom 100% again to compensate for container not having
        // any height
        bottom: '100%',
        marginBottom: `${arrowWidth}px`,
      },

      '.C9Y-PopoverArrow:after': {
        // top: 100%,
        // width: 100%,
        // }
        bottom: `${arrowWidth * 0.5}px`,
      },
    },

    '&.C9Y-Popover-right': {
      '.C9Y-PopoverContent': {
        left: '100%',
        alignItems: 'center',
      },

      '.C9Y-PopoverContentContents': {
        marginLeft: `${arrowWidth}px`,
      },

      // '.C9Y-PopoverArrow': {
      //   height: '100%',
      //   right: '100%',
      // },

      '.C9Y-PopoverArrow:after': {
        left: `${arrowWidth * 0.5}px`,
      },
    },

    '&.C9Y-Popover-bottom': {
      '.C9Y-PopoverContent': {
        top: '100%',
        justifyContent: 'center',
      },

      '.C9Y-PopoverContentContents': {
        marginTop: `${arrowWidth}px`,
      },

      // '.tipContainer': {
      //   bottom: '100%',
      //   width: '100%',
      // },

      '.C9Y-PopoverArrow:after': {
        top: `${arrowWidth * 0.5}px`,
      },
    },

    '&.C9Y-Popover-left': {
      '.C9Y-PopoverContent': {
        right: '100%',
        alignItems: 'center',
      },

      '.C9Y-PopoverContentContents': {
        marginRight: `${arrowWidth}px`,
        right: 0,
      },

      // '.tip-container': {
      //   height: '100%',
      //   left: '100%',
      // },

      '.C9Y-PopoverArrow:after': {
        right: `${arrowWidth * 0.5}px`,
      },
    },
  },

  // --- Popover action ------------------------------------

  '.C9Y-PopoverAction': {},

  // Content container overrides the width constraints for parent element
  '.C9Y-PopoverContent': {
    width: '300px',
    position: 'absolute',
    display: 'inline-flex',
  },

  // Content Element - The content element should be used to wrap a body/header element
  '.C9Y-PopoverContentContents': {
    display: 'block',
    position: 'absolute',
    maxWidth: '300px',
    backgroundClip: 'padding-box',
    backgroundColor: theme.colors.background,
    border: theme.border.DEFAULT,
    fontSize: theme.fontSize.sm,
    // Allow breaking very long words so they don't overflow the popover's bounds
    wordWrap: 'break-word',

    // box-shadow: box-shadow($popover-box-shadow),
    borderRadius: theme.borderRadius.DEFAULT,

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
  '.C9Y-PopoverArrow': {
    height: `${arrowWidth}px`,
    overflow: 'hidden',
    width: `${arrowWidth}px`,

    '&:after': {
      border: theme.border.DEFAULT,
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
  '.C9Y-PopoverBody': {
    padding: theme.spacing[4],
    color: theme.colors.gray[700],
  },

  // --- HEADING
  '.C9Y-PopoverHeading': {
    padding: theme.spacing[2],
    // Try to guarantee that spacing is correct regardless of div vs h* usage
    marginTop: 0,
    marginBottom: 0,
    fontSize: theme.fontSize.lg,
    color: theme.colors.gray[900],
    borderBottom: theme.border.DEFAULT,
  },
}
