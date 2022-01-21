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

// .🅲-card {
//   > hr {
//     margin-right: 0;
//     margin-left: 0;
//   }

//   > .list:first-child {
//     .list-item:first-child {
//       @include border-top-radius($card-border-radius);
//     }
//   }

//   > .list:last-child {
//     .list-item:last-child {
//       @include border-bottom-radius($card-border-radius);
//     }
//   }
// }

// .card-subtitle {
//   margin-top: -($card-spacer-y / 2);
//   margin-bottom: $card-spacer-y;
// }

// .card-text:last-child {
//   margin-bottom: 0;
// }

// .card-link {
//   @include hover {
//     text-decoration: none;
//   }

//   + .card-link {
//     margin-left: $card-spacer-x;
//   }
// }

// //
// // Optional textual caps
// //

// //
// // Header navs
// //

// .card-header-tabs {
//   margin-right: -($card-spacer-x / 2);
//   margin-bottom: -$card-spacer-y;
//   margin-left: -($card-spacer-x / 2);
//   border-bottom: 0;
// }

// .card-header-pills {
//   margin-right: -($card-spacer-x / 2);
//   margin-left: -($card-spacer-x / 2);
// }

// // Card image
// .card-img-overlay {
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   padding: $card-img-overlay-padding;
// }

// .card-img {
//   width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch
//   @include border-radius($card-inner-border-radius);
// }

// // Card image caps
// .card-img-top {
//   width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch
//   @include border-top-radius($card-inner-border-radius);
// }

// .card-img-bottom {
//   width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch
//   @include border-bottom-radius($card-inner-border-radius);
// }

// // Card deck

// .card-deck {
//   display: flex;
//   flex-direction: column;

//   .card {
//     margin-bottom: $card-deck-margin;
//   }

//   @include media-breakpoint-up(sm) {
//     flex-flow: row wrap;
//     margin-right: -$card-deck-margin;
//     margin-left: -$card-deck-margin;

//     .card {
//       display: flex;
//       // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4
//       flex: 1 0 0%;
//       flex-direction: column;
//       margin-right: $card-deck-margin;
//       margin-bottom: 0; // Override the default
//       margin-left: $card-deck-margin;
//     }
//   }
// }

// //
// // Card groups
// //

// .card-group {
//   display: flex;
//   flex-direction: column;

//   // The child selector allows nested `.card` within `.card-group`
//   // to display properly.
//   > .card {
//     margin-bottom: $card-group-margin;
//   }

//   @include media-breakpoint-up(sm) {
//     flex-flow: row wrap;
//     // The child selector allows nested `.card` within `.card-group`
//     // to display properly.
//     > .card {
//       // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4
//       flex: 1 0 0%;
//       margin-bottom: 0;

//       + .card {
//         margin-left: 0;
//         border-left: 0;
//       }

//       // Handle rounded corners
//       @if $enable-rounded {
//         &:first-child {
//           @include border-right-radius(0);

//           .card-img-top,
//           .card-header {
//             border-top-right-radius: 0;
//           }
//           .card-img-bottom,
//           .card-footer {
//             border-bottom-right-radius: 0;
//           }
//         }

//         &:last-child {
//           @include border-left-radius(0);

//           .card-img-top,
//           .card-header {
//             border-top-left-radius: 0;
//           }
//           .card-img-bottom,
//           .card-footer {
//             border-bottom-left-radius: 0;
//           }
//         }

//         &:only-child {
//           @include border-radius($card-border-radius);

//           .card-img-top,
//           .card-header {
//             @include border-top-radius($card-border-radius);
//           }
//           .card-img-bottom,
//           .card-footer {
//             @include border-bottom-radius($card-border-radius);
//           }
//         }

//         &:not(:first-child):not(:last-child):not(:only-child) {
//           @include border-radius(0);

//           .card-img-top,
//           .card-img-bottom,
//           .card-header,
//           .card-footer {
//             @include border-radius(0);
//           }
//         }
//       }
//     }
//   }
// }

// //
// // Columns
// //

// .card-columns {
//   .card {
//     margin-bottom: $card-columns-margin;
//   }

//   @include media-breakpoint-up(sm) {
//     column-count: $card-columns-count;
//     column-gap: $card-columns-gap;
//     orphans: 1;
//     widows: 1;

//     .card {
//       display: inline-block; // Don't let them vertically span multiple columns
//       width: 100%; // Don't let their width change
//     }
//   }
// }

// //
// // Accordion
// //

// .accordion {
//   .card:not(:first-of-type):not(:last-of-type) {
//     border-bottom: 0;
//     border-radius: 0;
//   }

//   .card:not(:first-of-type) {
//     .card-header:first-child {
//       border-radius: 0;
//     }
//   }

//   .card:first-of-type {
//     border-bottom: 0;
//     border-bottom-right-radius: 0;
//     border-bottom-left-radius: 0;
//   }

//   .card:last-of-type {
//     border-top-left-radius: 0;
//     border-top-right-radius: 0;
//   }
// }
