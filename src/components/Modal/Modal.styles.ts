import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                      Componentry <Modal /> styles
// -----------------------------------------------------------------

// Elements structure
// div.ModalOverlay      - Modal overlay background
// div.ModalPositioner   - Manages positioning of modal container
//   div.ModalContainer  - Contains the modal header,body,footer elements
//     div.ModalBody     - Contains modal content

export const modalStyles = {
  '.🅲ModalOverlay': {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: theme.zIndex.modal,
    background: '#3a4b53',
    opacity: 0,
    transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',

    '&.🅲-active': {
      opacity: 0.7,
    },
  },

  '.🅲ModalPositioner': {
    position: 'fixed',
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
    paddingTop: theme.spacing[6],
    paddingBottom: theme.spacing[6],

    opacity: 0.5,
    transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',

    '&.🅲-active': {
      opacity: 1,
    },
  },

  '.🅲ModalContainer': {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.background,
    maxWidth: '750px',
    // Prevent inner element bgs from overlaying border style
    backgroundClip: 'padding-box',
    border: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,
    // boxShadow: box-shadow($modal-container-box-shadow),
    borderRadius: theme.borderRadius.md,

    // Horizontally center the content
    marginLeft: 'auto',
    marginRight: 'auto',

    '&.center': {
      margin: 'auto',
    },
  },

  // --- SIZES
  // 🤔 How to allow users to make modals 100% width for small breakpoints?
  '.🅲ModalContainer-smSize': {
    maxWidth: '450px',
  },

  '.🅲ModalContainer-lgSize': {
    maxWidth: '900px',
  },

  // --- SCROLLING

  // Modal overlay scrolling
  '.🅲ModalPositioner.🅲Modal-overlayScroll': {
    overflowX: 'hidden',
    overflowY: 'auto',
  },

  // Modal container scrolling
  '.🅲ModalPositioner.🅲Modal-containerScroll': {
    '.🅲ModalContainer': {
      maxHeight: '100%',
      overflowY: 'scroll',
    },
  },

  // Modal body scrolling
  '.🅲ModalPositioner.🅲Modal-bodyScroll': {
    '.🅲ModalContainer': {
      maxHeight: '100%',
    },

    '.🅲ModalBody': {
      overflowY: 'scroll',
    },
  },

  // --- HEADER
  '.🅲ModalHeader': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Put modal header elements (title and dismiss) on opposite ends
    padding: theme.spacing[2],
    backgroundColor: theme.colors.background,
    borderBottom: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,
    borderTopLeftRadius: theme.borderRadius.md,
    borderTopRightRadius: theme.borderRadius.md,
  },

  // --- TITLE
  '.🅲ModalTitle': {
    marginTop: 0,
    marginBottom: 0,
    lineHeight: theme.lineHeight.none,
    color: theme.colors.gray[900],
    fontSize: theme.fontSize.h3,
    fontWeight: theme.fontWeight.bold,
  },

  // --- BODY
  '.🅲ModalBody': {
    position: 'relative',
    // Enable `flex-grow: 1` so that the body take up as much space as possible
    // when should there be a fixed height on `.modal-container`.
    flex: '1 1 auto',
    padding: theme.spacing[2],
  },

  // --- FOOTER
  '.🅲ModalFooter': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing[2],
    backgroundColor: theme.colors.background,
    borderTop: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,
    borderBottomLeftRadius: theme.borderRadius.md,
    borderBottomRightRadius: theme.borderRadius.md,
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
}
