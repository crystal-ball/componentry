import { Theme } from '../../theme/theme'

//                                      Componentry <Modal /> styles
// -----------------------------------------------------------------

// Elements structure
// div.ModalOverlay      - Modal overlay background
// div.ModalPositioner   - Manages positioning of modal container
//   div.ModalContainer  - Contains the modal header,body,footer elements
//     div.ModalBody     - Contains modal content

export const modalStyles = (theme: Theme) => ({
  '.C9Y-ModalOverlay': {
    position: 'fixed',
    pointerEvents: 'none',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: theme.zIndex.modal,
    background: '#3a4b53',
    opacity: 0,
    transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',

    '&.C9Y-active': {
      opacity: 0.7,
    },
  },

  '.C9Y-ModalPositioner': {
    position: 'fixed',
    pointerEvents: 'none',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: theme.zIndex.modal,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // Providing padding in positioner simplifies layout for long modals
    paddingTop: theme.spacing[12],
    paddingBottom: theme.spacing[12],

    opacity: 0,
    transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',

    '&.C9Y-active': {
      pointerEvents: 'auto',
      opacity: 0.5,
    },
    '&.C9Y-visible': {
      opacity: 1,
    },
  },

  '.C9Y-ModalContainer': {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.background,
    maxWidth: '750px',
    // Prevent inner element bgs from overlaying border style
    backgroundClip: 'padding-box',
    border: theme.border.DEFAULT,
    // boxShadow: box-shadow($modal-container-box-shadow),
    borderRadius: theme.borderRadius.DEFAULT,

    // Horizontally center the content
    marginLeft: 'auto',
    marginRight: 'auto',

    '&.center': {
      margin: 'auto',
    },
  },

  // --- SIZES
  // 🤔 How to allow users to make modals 100% width for small breakpoints?
  '.C9Y-ModalContainer-smSize': {
    maxWidth: '450px',
  },

  '.C9Y-ModalContainer-lgSize': {
    maxWidth: '900px',
  },

  // --- SCROLLING

  // Modal overlay scrolling
  '.C9Y-ModalPositioner.C9Y-Modal-overlayScroll': {
    overflowX: 'hidden',
    overflowY: 'auto',
  },

  // Modal container scrolling
  '.C9Y-ModalPositioner.C9Y-Modal-containerScroll': {
    '.C9Y-ModalContainer': {
      maxHeight: '100%',
      overflowY: 'scroll',
    },
  },

  // Modal body scrolling
  '.C9Y-ModalPositioner.C9Y-Modal-bodyScroll': {
    '.C9Y-ModalContainer': {
      maxHeight: '100%',
    },

    '.C9Y-ModalBody': {
      overflowY: 'scroll',
    },
  },

  // --- HEADER
  '.C9Y-ModalHeader': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Put modal header elements (title and dismiss) on opposite ends
    padding: theme.spacing[4],
    backgroundColor: theme.colors.background,
    borderBottom: theme.border.DEFAULT,
    borderTopLeftRadius: theme.borderRadius.DEFAULT,
    borderTopRightRadius: theme.borderRadius.DEFAULT,
  },

  // --- TITLE
  '.C9Y-ModalTitle': {
    marginTop: 0,
    marginBottom: 0,
    lineHeight: theme.lineHeight.none,
    color: theme.colors.gray[900],
    fontSize: theme.fontSize.h3,
    fontWeight: theme.fontWeight.bold,
  },

  // --- BODY
  '.C9Y-ModalBody': {
    position: 'relative',
    // Enable `flex-grow: 1` so that the body take up as much space as possible
    // when should there be a fixed height on `.modal-container`.
    flex: '1 1 auto',
    padding: theme.spacing[4],
  },

  // --- FOOTER
  '.C9Y-ModalFooter': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing[4],
    backgroundColor: theme.colors.background,
    borderTop: theme.border.DEFAULT,
    borderBottomLeftRadius: theme.borderRadius.DEFAULT,
    borderBottomRightRadius: theme.borderRadius.DEFAULT,
  },

  // // Measure scrollbar width for padding body during modal show/hide
  // // TODO: Enable this to prevent scrollbar jitter
  // .modal-scrollbar-measure {
  //   position: absolute,
  //   top: -9999px,
  //   width: 50px,
  //   height: 50px,
  //   overflow: scroll,
  // }
})
