/**
 * Pre-configured Tailwind safelist configs for including all Componentry
 * classes.
 */
export const tailwindSafelist = [
  // SCREEN READERS
  'sr-only',

  // LAYOUT
  // display
  'block',
  'contents',
  'flex',
  'flow-root',
  'grid',
  'hidden',
  'inline',
  'inline-block',
  'inline-flex',
  'inline-grid',
  'list-item',
  // position
  'absolute',
  'fixed',
  'relative',
  'static',
  'sticky',
  // visibility
  'invisible',
  'visible',

  // FLEXBOX+GRID
  { pattern: /^content.*/ }, // alignContent
  { pattern: /^items.*/ }, // alignItems
  { pattern: /^self.*/ }, // alignSelf
  { pattern: /^flex.*/ }, // flex
  { pattern: /^grow.*/ }, // flex-grow
  { pattern: /^shrink.*/ }, // flex-shrink
  { pattern: /^justify.*/ }, // justify:

  // SPACING
  { pattern: /^gap-.*/ },
  { pattern: /^m[trblxy]?-.*/ },
  { pattern: /^p[trblxy]?-.*/ },

  // SIZING
  { pattern: /^h-.*/ }, // height
  { pattern: /^max-h-.*/ }, // maxHeight
  { pattern: /^min-h-.*/ }, // minHeight
  { pattern: /^w-.*/ }, // width
  { pattern: /^max-w-.*/ }, // maxWidth
  { pattern: /^min-w-.*/ }, // minWidth

  // TYPOGRAPHY
  { pattern: /^text.*/ }, // color / fontSize / textAlign

  { pattern: /^font.*/ }, // fontFamily / fontWeight:
  { pattern: /^tracking.*/ }, // letterSpacing
  { pattern: /^leading.*/ }, // lineHeight
  // fontStyle
  'italic',
  'not-italic',
  // textTransform
  'uppercase',
  'lowercase',
  'capitalize',
  'normal-case',

  // BACKGROUNDS
  { pattern: /^bg.*/ }, // backgroundColor

  // BORDERS

  { pattern: /^border.*/ }, // border / borderColor / borderStyle / borderWidth
  { pattern: /^rounded.*/ }, // borderRadius

  // EFFECTS
  { pattern: /^shadow.*/ }, // boxShadow
]
