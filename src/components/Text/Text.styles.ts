//                                         <Text /> styles
// -------------------------------------------------------

export const textStyles = {
  // BASE
  '.🅲Text-base': {},

  // VARIANTS
  '.🅲Text-h1': {
    fontSize: '3rem',
  },
  '.🅲Text-h2': {
    fontSize: '2rem',
  },
  '.🅲Text-h3': {
    fontSize: '1.5rem',
  },
  '.🅲Text-body': {
    'fontSize': '1rem',
    // Set spacing between multiple paragraphs using sibling selector and
    // margin-top.
    '& + &': {
      marginTop: '1rem',
    },
  },
}
