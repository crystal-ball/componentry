/**
 * @file
 * Resource for cleaning Componentry props and creating utility classes.
 * @remarks
 * This file is used for module augmentation of utility props, eg:
 *
 * `declare module 'componentry/types/utils/utility-classes' { }`
 */

import clsx from 'clsx'
import { MergeTypes } from '../utils/types'

/** Module augmentation interface for overriding default utility props' types */
export interface UtilityPropsOverrides {}

/** Default utility prop types, customizable with UtilityPropsOverrides */
export interface UtilityPropsBase {
  /** Sets active style */
  active?: boolean | string
  /** Sets align-content style */
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  /** Sets align-items style */
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets align-self style */
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets background color style */
  backgroundColor?: 'primary' | 'success' | 'warning' | 'critical'
  /** Sets a bold font weight style */
  bold?: boolean
  /** Sets a 1px border-width style */
  border?: boolean
  /** Sets a border-width size style */
  borderWidth?: string | number
  /** Sets a 1px border-bottom-width style */
  borderBottom?: boolean
  /** Sets border color style */
  borderColor?: 'primary'
  /** Sets a 1px border-left-width style */
  borderLeft?: boolean
  /** Sets a 1px border-right-width style */
  borderRight?: boolean
  /** Sets a 1px border-top-width style */
  borderTop?: boolean
  /** Sets a disabled style */
  disabled?: boolean
  /** Sets a display style */
  display?:
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'flex'
    | 'inline-flex'
    | 'flow-root'
    | 'grid'
    | 'inline-grid'
    | 'contents'
    | 'list-item'
    | 'hidden'
  /** Sets a text color style */
  color?: string
  /** Sets a `flex-direction` flex style */
  flexDirection?: 'column' | 'column-reverse' | 'row-reverse' | 'row'
  /** Sets a `flex-wrap` flex style */
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  /** Sets a font-family style */
  fontFamily?: 'body' | 'mono'
  /** Sets a font-size style */
  fontSize?: 'sm' | 'base' | 'lg'
  /** Text font-weight style */
  fontWeight?: 'light' | 'normal' | 'bold'
  /** Sets height style */
  height?: 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit' | string | number
  /** Sets a display: none style */
  invisible?: boolean
  /** Sets an italic style */
  italic?: boolean
  /** Sets justify-content style */
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /** Sets a `justify-items` style with a `justify-items-{value}` class */
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  /** Sets a `justify-self` style with a `justify-self-{value}` class */
  justifySelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch'
  /** Sets a letter-spacing style */
  letterSpacing?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
  /** Sets a line-height style */
  lineHeight?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | number
  /** Sets a max-width style */
  maxWidth?: 'none' | 'full' | 'min' | 'max' | 'fit' | 'prose' | 0 | string
  /** Sets a max-height style */
  maxHeight?: 'full' | 'screen' | 'min' | 'max' | 'fit' | number
  /** Sets a min-height style */
  minHeight?: 'full' | 'screen' | 'min' | 'max' | 'fit' | 0
  /** Sets a min-width style */
  minWidth?: 'full' | 'min' | 'max' | 'fit' | 0
  /** Sets position style */
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  /** Sets text-align style */
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  /** Sets text-transform style */
  textTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'normal-case'
  /** Sets visible style */
  visible?: boolean
  /** Sets width style */
  width?: 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit' | string | number

  // --- Spacing
  /** Sets a `gap` style */
  gap?: string | number
  /** Sets a column-gap style */
  'gap-x'?: string | number
  /** Sets a row-gap style */
  'gap-y'?: string | number
  /** margin */
  m?: string | number
  /** margin-top */
  mt?: string | number
  /** margin-right */
  mr?: string | number
  /** margin-bottom */
  mb?: string | number
  /** margin-left */
  ml?: string | number
  /** margin-left && margin-right */
  mx?: string | number
  /** margin-top && margin-bottom  */
  my?: string | number
  /** padding */
  p?: string | number
  /** padding-top */
  pt?: string | number
  /** padding-right */
  pr?: string | number
  /** padding-bottom */
  pb?: string | number
  /** padding-left */
  pl?: string | number
  /** padding-left && padding-right */
  px?: string | number
  /** padding-top && padding-bottom */
  py?: string | number
}

/** Componentry utility props for including utility styles. */
export type UtilityProps = MergeTypes<UtilityPropsBase, UtilityPropsOverrides>

// Map of utility props for quickly filtering out Componentry props from user props
export const utilityProps: { [Prop in keyof UtilityPropsBase]: 1 } = {
  active: 1,
  alignContent: 1,
  alignItems: 1,
  alignSelf: 1,
  backgroundColor: 1,
  bold: 1,
  border: 1,
  borderBottom: 1,
  borderColor: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  color: 1,
  disabled: 1,
  display: 1,
  flexDirection: 1,
  flexWrap: 1,
  fontFamily: 1,
  fontSize: 1,
  fontWeight: 1,
  gap: 1,
  'gap-x': 1,
  'gap-y': 1,
  height: 1,
  invisible: 1,
  italic: 1,
  justifyContent: 1,
  justifyItems: 1,
  justifySelf: 1,
  letterSpacing: 1,
  lineHeight: 1,
  m: 1,
  maxHeight: 1,
  maxWidth: 1,
  mb: 1,
  minHeight: 1,
  minWidth: 1,
  ml: 1,
  mr: 1,
  mt: 1,
  mx: 1,
  my: 1,
  p: 1,
  pb: 1,
  pl: 1,
  position: 1,
  pr: 1,
  pt: 1,
  px: 1,
  py: 1,
  textAlign: 1,
  textTransform: 1,
  visible: 1,
  width: 1,
}

const activeProps = {
  activate: 1,
  deactivate: 1,
  defaultActive: 1,
  guid: 1,
  onActivate: 1,
  onActivated: 1,
  onDeactivate: 1,
  onDeactivated: 1,
}

function generateClassNames<Props extends UtilityProps>(p: Props): string {
  // Tailwind expects a `flex-col` for direction which breaks the pattern of specifying
  // the style value
  const computedDir = p.flexDirection?.replace('column', 'col')
  // Support shorthand bold everywhere to match shorthand italic for easy text styles
  const computedFontWeight = p.bold ? 'bold' : p.fontWeight
  return clsx({
    // LAYOUT
    [p.position ?? 'position']: p.position,
    [p.display ?? 'display']: p.display,
    invisible: p.invisible,
    visible: p.visible,

    // FLEXBOX+GRID
    [`content-${p.alignContent}`]: p.alignContent,
    [`flex-${computedDir}`]: computedDir,
    [`flex-${p.flexWrap}`]: p.flexWrap,
    [`items-${p.alignItems}`]: p.alignItems,
    [`justify-${p.justifyContent}`]: p.justifyContent,
    [`justify-items-${p.justifyItems}`]: p.justifyItems,
    [`justify-${p.justifySelf}`]: p.justifySelf,
    [`self-${p.alignSelf}`]: p.alignSelf,

    // SPACING
    [`m-${p.m}`]: p.m,
    [`mt-${p.mt}`]: p.mt,
    [`mr-${p.mr}`]: p.mr,
    [`mb-${p.mb}`]: p.mb,
    [`ml-${p.ml}`]: p.ml,
    [`mx-${p.mx}`]: p.mx,
    [`my-${p.my}`]: p.my,
    [`p-${p.p}`]: p.p,
    [`pt-${p.pt}`]: p.pt,
    [`pr-${p.pr}`]: p.pr,
    [`pb-${p.pb}`]: p.pb,
    [`pl-${p.pl}`]: p.pl,
    [`px-${p.px}`]: p.px,
    [`py-${p.py}`]: p.py,
    [`gap-${p.gap}`]: p.gap,
    [`gap-x-${p['gap-x']}`]: p['gap-x'],
    [`gap-y-${p['gap-y']}`]: p['gap-y'],

    // SIZING
    [`h-${p.height}`]: p.height,
    [`min-h-${p.minHeight}`]: p.minHeight,
    [`max-h-${p.maxHeight}`]: p.maxHeight,
    [`w-${p.width}`]: p.width,
    [`min-w-${p.minWidth}`]: p.minWidth,
    [`max-w-${p.maxWidth}`]: p.maxWidth,

    // TYPOGRAPHY
    [p.textTransform ?? 'textTransform']: p.textTransform,
    [`font-${p.fontFamily}`]: p.fontFamily,
    [`font-${computedFontWeight}`]: computedFontWeight,
    [`leading-${p.lineHeight}`]: p.lineHeight,
    [`text-${p.color}`]: p.color,
    [`text-${p.fontSize}`]: p.fontSize,
    [`text-${p.textAlign}`]: p.textAlign,
    [`tracking-${p.letterSpacing}`]: p.letterSpacing,
    italic: p.italic,

    // BACKGROUNDS
    [`bg-${p.backgroundColor}`]: p.backgroundColor,

    // BORDERS
    border: p.border, // 1px borderWidth
    'border-b': p.borderBottom, // 1px borderWidth
    'border-l': p.borderLeft, // 1px borderWidth
    'border-r': p.borderRight, // 1px borderWidth
    'border-t': p.borderTop, // 1px borderWidth
    [`border-${p.borderWidth}`]: p.borderWidth,
    [`border-${p.borderColor}`]: p.borderColor,

    // STATES (eg https://mui.com/customization/how-to-customize/#state-classes)
    'C9Y-active': p.active,
    'C9Y-disabled': p.disabled,
  })
}

/**
 * `createUtilityClasses` filters and transforms Componentry utility props into
 * utility classes.
 * @example
 * ```tsx
 * const { filteredProps, utilityClasses } = createUtilityClasses(props)
 * return (
 *   <div className={clsx('some-custom-class', utilityClasses)} {...filteredProps}>
 *     {children}
 *   </div>
 * )
 * ```
 */
export function createUtilityClasses<Props extends { [prop: string]: any }>(
  props: Props,
) {
  const filteredProps: { [prop: string]: any } = {}

  // Pass through disabled to final element as it's a valid HTML attribute
  if (props.disabled) filteredProps.disabled = true

  Object.keys(props).forEach((prop) => {
    if (!(prop in utilityProps) && !(prop in activeProps)) {
      // The prop doesn't map to a library utility prop, pass it through
      filteredProps[prop] = props[prop]
    }
  })

  return {
    filteredProps,
    utilityClasses: generateClassNames(props),
  }
}

// --------------------------------------------------------
// PRECOMPILE

/** @internal */
export const precompileProps = {
  inline: 1,
  variant: 1,
  // --- Flex
  align: 1,
  direction: 1,
  justify: 1,
  wrap: 1,
  // --- Text
  bold: 1,
}
