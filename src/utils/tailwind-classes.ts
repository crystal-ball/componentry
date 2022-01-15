// --------------------------------------------------------
// Tailwind classes

export interface TailwindUtilityClasses {
  // LAYOUT
  display: 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid'
  position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky'
  visibility: 'visible' | 'invisible'

  // FLEXBOX+GRID
  alignContent:
    | 'content-center'
    | 'content-start'
    | 'content-end'
    | 'content-between'
    | 'content-around'
    | 'content-evenly'
  alignItems:
    | 'items-start'
    | 'items-end'
    | 'items-center'
    | 'items-baseline'
    | 'items-stretch'
  alignSelf:
    | 'self-auto'
    | 'self-start'
    | 'self-end'
    | 'self-center'
    | 'self-stretch'
    | 'self-baseline'
  flexDirection: 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse'
  flexWrap: 'flex-wrap' | 'flex-wrap-reverse' | 'flex-nowrap'
  // gap: gap-{...spacing?}
  justifyContent:
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly'

  // SPACING
  // margin: m-...
  // padding: p-...

  // TYPOGRAPHY
  fontFamily: 'font-body' | 'font-mono' | 'font-sans' | 'font-serif'
  fontSize: 'text-sm' | 'text-base' | 'text-lg'
  fontStyle: 'italic' | 'not-italic'
  fontWeight: 'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold'
  textAlign: 'text-left' | 'text-center' | 'text-right' | 'text-justify'
  textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
  // textColor: text-{...colors?}

  // BACKGROUNDS
  // backgroundColor: bg-{...colors?}

  // BORDERS
  borderWidth: 'border' | 'border-t' | 'border-r' | 'border-b' | 'border-l'
  // borderColor: border-{...colors?}
}
