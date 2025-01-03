/**
 * @file
 * Resource for cleaning Componentry props and creating utility classes.
 * @remarks
 * This file is used for module augmentation of utility props, eg:
 *
 * `declare module 'componentry/types/utils/utility-props' { }`
 */

import React from 'react'
import { Theme } from '../theme/theme'
import { themeDefaults } from '../theme/theme-defaults'
import { MergeTypes, Resolve } from './types'

/** Module augmentation interface for overriding default utility props' types */
export interface UtilityPropsOverrides {}

export type SpacingBase = keyof Theme['spacing']
// Provide base height exports to simplify adding number or string type for
// arbitrary sizing values
export type HeightBase = 'full' | 'screen' | 'min' | 'max' | 'fit' | 'auto'
export type MinHeightBase = 'full' | 'screen' | 'min' | 'max' | 'fit'
export type MaxHeightBase = 'full' | 'screen' | 'min' | 'max' | 'fit'
export type WidthBase = 'full' | 'screen' | 'min' | 'max' | 'fit' | 'auto'
export type MinWidthBase = 'full' | 'min' | 'max' | 'fit'
export type MaxWidthBase = 'full' | 'min' | 'max' | 'fit' | 'prose' | 'none'

/** Default utility prop types, customizable with UtilityPropsOverrides */
export interface UtilityPropsBase {
  // ---LAYOUT
  /** Sets a `display` style */
  display?:
    | 'block'
    | 'contents'
    | 'flex'
    | 'flow-root'
    | 'grid'
    | 'hidden'
    | 'inline'
    | 'inline-block'
    | 'inline-flex'
    | 'inline-grid'
    | 'list-item'
  /** Sets a `visibility: hidden` style */
  invisible?: boolean
  /** Sets a `position` style */
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
  /** Sets a `visibility: visible` style */
  visible?: boolean
  /** Sets a `z-index` style */
  zIndex?: keyof Theme['zIndex']

  // --- FLEXBOX+GRID
  /** Sets an `align-content` style */
  alignContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** Sets an `align-items` style */
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets an `align-self` style */
  alignSelf?: 'start' | 'end' | 'center' | 'baseline' | 'stretch' | 'auto'
  /** Sets a `flex-basis` style */
  flexBasis?: 'auto' | 'px' | 'full'
  /** Sets a `flex-direction` style */
  flexDirection?: 'column' | 'column-reverse' | 'row-reverse' | 'row'
  /** Sets a `flex-grow` style */
  flexGrow?: ReplaceDefaultWithTrue<keyof Theme['flexGrow']>
  /** Sets a `flex-shrink` style */
  flexShrink?: ReplaceDefaultWithTrue<keyof Theme['flexShrink']>
  /** Sets a `flex-wrap` style */
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  /** Sets a `grid-template-columns` style */
  gridTemplateColumns?: string
  /** Sets a `grid-column` style */
  gridColumn?: string
  /** Sets a `grid-template-rows` style */
  gridTemplateRows?: string
  /** Sets a `grid-row` style */
  gridRow?: string
  /** Sets a `justify-content` style */
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** Sets a `justify-items` style */
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  /** Sets a `justify-self` style */
  justifySelf?: 'start' | 'end' | 'center' | 'stretch' | 'auto'
  /** Sets an `order` style */
  order?: 'first' | 'last' | 'none'

  // --- SPACING
  /** Sets a `gap` style */
  gap?: Exclude<SpacingBase, 'auto'>
  /** Sets a `column-gap` style */
  columnGap?: Exclude<SpacingBase, 'auto'>
  /** Sets a `row-gap` style */
  rowGap?: Exclude<SpacingBase, 'auto'>
  /** sets a 'margin' style */
  m?: SpacingBase
  /** Sets a `margin-top` style */
  mt?: SpacingBase
  /** Sets a `margin-right` style */
  mr?: SpacingBase
  /** Sets a `margin-bottom` style */
  mb?: SpacingBase
  /** Sets a `margin-left` style */
  ml?: SpacingBase
  /** Sets `margin-left` + `margin-right` styles */
  mx?: SpacingBase
  /** Sets `margin-top` + `margin-bottom` styles */
  my?: SpacingBase
  /** Sets a `padding` style */
  p?: SpacingBase
  /** Sets a `padding-top` style */
  pt?: SpacingBase
  /** Sets a `padding-right` style */
  pr?: SpacingBase
  /** Sets a `padding-bottom` style */
  pb?: SpacingBase
  /** Sets a `padding-left` style */
  pl?: SpacingBase
  /** Sets `padding-left` + `padding-right` styles */
  px?: SpacingBase
  /** Sets `padding-top` + `padding-bottom` styles */
  py?: SpacingBase

  // --- SIZING
  /** Sets a `height` style */
  height?: HeightBase
  /** Sets a `min-height` style */
  minHeight?: MinHeightBase
  /** Sets a `max-height` style */
  maxHeight?: MaxHeightBase
  /** Sets a `width` style */
  width?: WidthBase
  /** Sets a `min-width` style */
  minWidth?: MinWidthBase
  /** Sets a `max-width` style */
  maxWidth?: MaxWidthBase

  // --- TYPOGRAPHY
  /** Sets a bold font weight style */
  bold?: boolean
  /** Sets a `color` style */
  color?: string
  /** Sets a `font-family` style */
  fontFamily?: keyof Theme['fontFamily']
  /** Sets a `font-size` style */
  fontSize?: keyof Theme['fontSize']
  /** Sets a `font-weight` style */
  fontWeight?: keyof Theme['fontWeight']
  /** Sets an italic style */
  italic?: boolean
  /** Sets a `letter-spacing` style */
  letterSpacing?: keyof Theme['letterSpacing']
  /** Sets a `line-height` style */
  lineHeight?: keyof Theme['lineHeight']
  /** Sets a `text-align` style */
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  /** Sets a `text-transform` style */
  textTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'normal-case'

  // --- BACKGROUNDS
  /** Sets a `background-color` style */
  backgroundColor?: string

  // --- BORDERS
  /** Sets a `border` style */
  border?: ReplaceDefaultWithTrue<keyof Theme['border']>
  /** Sets a `border-bottom` style */
  borderBottom?: ReplaceDefaultWithTrue<keyof Theme['border']>
  /** Sets a `border-left` style */
  borderLeft?: ReplaceDefaultWithTrue<keyof Theme['border']>
  /** Sets `border-right` style */
  borderRight?: ReplaceDefaultWithTrue<keyof Theme['border']>
  /** Sets a `border-top` style */
  borderTop?: ReplaceDefaultWithTrue<keyof Theme['border']>
  /** Sets a `border-color` style */
  borderColor?: keyof Theme['borderColor']
  /** Sets a `border-style` style */
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double' | 'hidden' | 'none'
  /** Sets a `border-width` style */
  borderWidth?: keyof Theme['borderWidth']
  /** Sets a `border-radius` style */
  borderRadius?: ReplaceDefaultWithTrue<keyof Theme['borderRadius']>
  /** Sets a `border-radius` style */
  radius?: ReplaceDefaultWithTrue<keyof Theme['borderRadius']>

  // --- EFFECTS
  /** Sets a `box-shadow` style */
  boxShadow?: ReplaceDefaultWithTrue<keyof Theme['boxShadow']>

  // --- STATES
  /** @deprecated Use `pressed` */
  active?: boolean | string
  /** Sets a disabled style */
  disabled?: boolean
  /** Sets a focused style */
  focused?: boolean
  /** Sets a hovered style */
  hovered?: boolean
  /** Sets a pressed style */
  pressed?: boolean
  /** Sets a selected style */
  selected?: boolean
}

/** Componentry utility props for including utility styles. */
export type UtilityProps = Resolve<MergeTypes<UtilityPropsBase, UtilityPropsOverrides>>

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

const spacingCSSProperties = {
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
} as const

let theme = themeDefaults

/**
 * Setup function for defining the theme referenced by the utility props module.
 * @remarks
 * This setup is only required if you're not using the Theme provider.
 */
export function initializeUtilityPropsTheme<CustomTheme extends Theme>(
  customTheme: CustomTheme,
): void {
  theme = customTheme
}

/**
 * `createUtilityProps` filters and transforms any props into
 * Componentry utility classes and styles.
 * @example
 * ```tsx
 * const { filteredProps, utilityClassName, utilityStyle } = createUtilityProps(props)
 * return (
 *   <div
 *     className={clsx('some-custom-class', utilityClassName)}
 *     styles={utilityStyle}
 *     {...filteredProps}
 *   >
 *     {children}
 *   </div>
 * )
 * ```
 */
export function createUtilityProps<Props extends { [prop: string]: any }>(props: Props) {
  const classes: string[] = []
  const styles: React.CSSProperties = {}
  const filteredProps: { [prop: string]: any } = {}

  Object.keys(props).forEach((prop) => {
    const value = props[prop]

    // If a props has a key, but the prop value is undefined or false we can bail early
    if (value === undefined || value === false) return

    switch (prop) {
      // LAYOUT
      case 'position':
      case 'display':
        classes.push(value)
        break
      case 'invisible':
        classes.push('invisible')
        break
      case 'visible':
        classes.push('visible')
        break
      case 'zIndex':
        if (value in theme.zIndex) classes.push('z-' + value)
        else styles.zIndex = value
        break

      // FLEXBOX/GRID
      case 'alignContent':
        classes.push('content-' + value.replace('space-', ''))
        break
      case 'alignItems':
        classes.push('items-' + value)
        break
      case 'alignSelf':
        classes.push('self-' + value)
        break

      case 'flexBasis':
        if (value in theme.flexBasis) classes.push('basis-' + value)
        else styles.flexBasis = value
        break
      case 'flexDirection':
        classes.push('flex-' + value.replace('column', 'col'))
        break
      case 'flexGrow':
        if (value === true) classes.push('grow')
        if (value in theme.flexGrow) classes.push('grow-' + value)
        else styles.flexGrow = value
        break
      case 'flexShrink':
        if (value === true) classes.push('shrink')
        if (value in theme.flexShrink) classes.push('shrink-' + value)
        else styles.flexShrink = value
        break
      case 'flexWrap':
        classes.push('flex-' + value)
        break

      case 'gridColumn':
        if (value in theme.gridColumn) classes.push('col-' + value)
        else styles.gridColumn = value
        break
      case 'gridRow':
        if (value in theme.gridRow) classes.push('row-' + value)
        else styles.gridRow = value
        break
      case 'gridTemplateColumns':
        if (value in theme.gridTemplateColumns) classes.push('grid-cols-' + value)
        else styles.gridTemplateColumns = value
        break
      case 'gridTemplateRows':
        if (value in theme.gridTemplateRows) classes.push('grid-rows-' + value)
        else styles.gridTemplateRows = value
        break

      case 'justifyContent':
        classes.push('justify-' + value.replace('space-', ''))
        break
      case 'justifyItems':
        classes.push('justify-items-' + value)
        break
      case 'justifySelf':
        classes.push('justify-self-' + value)
        break

      case 'order':
        if (value in theme.order) classes.push('order-' + value)
        else styles.order = value
        break

      // SPACING
      case 'm':
      case 'mt':
      case 'mr':
      case 'mb':
      case 'ml':
      case 'p':
      case 'pt':
      case 'pr':
      case 'pb':
      case 'pl':
        if (value in theme.spacing) classes.push(`${prop}-${value}`)
        else if (theme.spacingRatio)
          styles[spacingCSSProperties[prop]] = theme.spacingRatio(value)
        else styles[spacingCSSProperties[prop]] = value
        break
      case 'mx':
        if (value in theme.spacing) classes.push('mx-' + value)
        else if (theme.spacingRatio) {
          styles.marginLeft = theme.spacingRatio(value)
          styles.marginRight = theme.spacingRatio(value)
        } else {
          styles.marginLeft = value
          styles.marginRight = value
        }
        break
      case 'my':
        if (value in theme.spacing) classes.push('my-' + value)
        else if (theme.spacingRatio) {
          styles.marginTop = theme.spacingRatio(value)
          styles.marginBottom = theme.spacingRatio(value)
        } else {
          styles.marginTop = value
          styles.marginBottom = value
        }
        break
      case 'px':
        if (value in theme.spacing) classes.push('px-' + value)
        else if (theme.spacingRatio) {
          styles.paddingLeft = theme.spacingRatio(value)
          styles.paddingRight = theme.spacingRatio(value)
        } else {
          styles.paddingLeft = value
          styles.paddingRight = value
        }
        break
      case 'py':
        if (value in theme.spacing) classes.push('py-' + value)
        else if (theme.spacingRatio) {
          styles.paddingTop = theme.spacingRatio(value)
          styles.paddingBottom = theme.spacingRatio(value)
        } else {
          styles.paddingTop = value
          styles.paddingBottom = value
        }
        break
      case 'gap':
        if (value in theme.spacing) classes.push('gap-' + value)
        else if (theme.spacingRatio) styles.gap = theme.spacingRatio(value)
        else styles.gap = value
        break
      case 'columnGap':
        if (value in theme.spacing) classes.push('gap-x-' + value)
        else if (theme.spacingRatio) styles.columnGap = theme.spacingRatio(value)
        else styles.columnGap = value
        break
      case 'rowGap':
        if (value in theme.spacing) classes.push('gap-y-' + value)
        else if (theme.spacingRatio) styles.rowGap = theme.spacingRatio(value)
        else styles.rowGap = value
        break

      // SIZING
      case 'height':
        if (value in theme.height) classes.push('h-' + value)
        else styles.height = value
        break
      case 'minHeight':
        if (value in theme.height) classes.push('min-h-' + value)
        else styles.minHeight = value
        break
      case 'maxHeight':
        if (value in theme.height) classes.push('max-h-' + value)
        else styles.maxHeight = value
        break
      case 'width':
        if (value in theme.width) classes.push('w-' + value)
        else styles.width = value
        break
      case 'minWidth':
        if (value in theme.width) classes.push('min-w-' + value)
        else styles.minWidth = value
        break
      case 'maxWidth':
        if (value in theme.width) classes.push('max-w-' + value)
        else styles.maxWidth = value
        break

      // TYPOGRAPHY
      case 'bold':
        classes.push('font-bold')
        break
      case 'italic':
        classes.push('italic')
        break
      case 'color':
        if (accessColor(theme.textColor ?? theme.colors, value)) {
          classes.push('text-' + value.replace('.', '-'))
        } else styles.color = value
        break
      case 'fontFamily':
        if (value in theme.fontFamily) classes.push('font-' + value)
        else styles.fontFamily = value
        break
      case 'fontSize':
        if (value in theme.fontSize) classes.push('text-' + value)
        else styles.fontSize = value
        break
      case 'fontWeight':
        if (value in theme.fontWeight) classes.push('font-' + value)
        else styles.fontWeight = value
        break
      case 'letterSpacing':
        if (value in theme.letterSpacing) classes.push('tracking-' + value)
        else styles.letterSpacing = value
        break
      case 'lineHeight':
        if (value in theme.lineHeight) classes.push('leading-' + value)
        else styles.lineHeight = value
        break
      case 'textAlign':
        classes.push('text-' + value)
        break
      case 'textTransform':
        classes.push(value)
        break

      // BACKGROUNDS
      case 'backgroundColor':
        if (accessColor(theme.backgroundColor ?? theme.colors, value)) {
          classes.push('bg-' + value.replace('.', '-'))
        } else styles.backgroundColor = value
        break

      // BORDERS
      case 'border':
        if (value === true) classes.push('border')
        else if (value in theme.border) classes.push('border-' + value)
        else styles.border = value
        break
      case 'borderBottom':
        if (value === true) classes.push('border-b')
        else if (value in theme.border) classes.push('border-b-' + value)
        else styles.borderBottom = value
        break
      case 'borderLeft':
        if (value === true) classes.push('border-l')
        else if (value in theme.border) classes.push('border-l-' + value)
        else styles.borderLeft = value
        break
      case 'borderRight':
        if (value === true) classes.push('border-r')
        else if (value in theme.border) classes.push('border-r-' + value)
        else styles.borderRight = value
        break
      case 'borderTop':
        if (value === true) classes.push('border-t')
        else if (value in theme.border) classes.push('border-t-' + value)
        else styles.borderTop = value
        break
      case 'borderWidth':
        if (value in theme.borderWidth) classes.push('border-' + value)
        else styles.borderWidth = value
        break
      case 'borderColor':
        if (accessColor(theme.borderColor ?? theme.colors, value)) {
          classes.push('border-' + value.replace('.', '-'))
        } else styles.borderColor = value
        break
      case 'borderRadius':
      case 'radius':
        if (value === true) classes.push('rounded')
        else if (value in theme.borderRadius) classes.push('rounded-' + value)
        else styles.borderRadius = value
        break

      // EFFECTS
      case 'boxShadow':
        if (value === true) classes.push('shadow')
        else if (value in theme.boxShadow) classes.push('shadow-' + value)
        else styles.boxShadow = value
        break

      // STATES (see styles/states.styles.ts)
      case 'active':
        classes.push('C9Y-active')
        break
      case 'disabled':
        classes.push('C9Y-disabled')
        filteredProps.disabled = true // Pass through selected to final element for HTML attributes
        break
      case 'focused':
        classes.push('C9Y-focused')
        break
      case 'hovered':
        classes.push('C9Y-hovered')
        break
      case 'pressed':
        classes.push('C9Y-pressed')
        break
      case 'selected':
        classes.push('C9Y-selected')
        filteredProps.selected = true // Pass through selected to final element for HTML attributes
        break

      default:
        if (!(prop in activeProps)) {
          // The prop doesn't map to a library utility prop, pass it through
          filteredProps[prop] = props[prop]
        }
    }
  })

  return {
    filteredProps,
    utilityClassName: classes.join(' '),
    utilityStyle: Object.keys(styles).length === 0 ? undefined : styles,
  }
}

function accessColor(base: any, path: string): string | undefined {
  const pathParts = path.split(/[.-]/)

  return pathParts.reduce((prev, curr) => {
    if (prev && prev[curr]) return prev[curr]
    return undefined
  }, base)
}

// --------------------------------------------------------
// UTILITY TYPES

/**
 * Utility type to replace 'DEFAULT' with true.
 * @remarks
 * Tailwind's pattern of declaring a default utility class value with `'DEFAULT'`
 * requires this type manipulation to provide the correct set of prop values in
 * JSX, eg for flexGrow:
 *
 * ```tsx
 * interface Theme {
 *   flexGrow: { DEFAULT: 1; 0: 0; }
 * }
 * ```
 * The correct utility prop type of `true | 0` can be extracted as:
 * ```tsx
 * type FlexGrowProp = ReplaceDefaultWithTrue<keyof Theme['flexGrow']>
 * ```
 */
type ReplaceDefaultWithTrue<T> = T extends 'DEFAULT' ? true : T

/**
 * Utility type for component "as" element props.
 * @remarks
 * The UtilityProps type has property declarations that shadow DOM element props
 * like color, or height. This is problematic because extending two types
 * requires their property declarations all have the same type, if they are
 * different the resulting type will be never or something similarly unusable.
 */
export type ElementTypeProps<Element extends React.ElementType = 'div'> = Omit<
  React.ComponentPropsWithRef<Element>,
  keyof UtilityProps
>
