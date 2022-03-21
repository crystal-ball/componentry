/* eslint-disable prefer-template */
/**
 * @file
 * Resource for cleaning Componentry props and creating utility classes.
 * @remarks
 * This file is used for module augmentation of utility props, eg:
 *
 * `declare module 'componentry/types/utils/utility-classes' { }`
 */

import { type CSSProperties } from 'react'
import { theme as themeDefaults } from '../theme-defaults'
import { merge } from './merge'
import { MergePropTypes } from './types'

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
  backgroundColor?: string
  /** Sets a bold font weight style */
  bold?: boolean
  /** Sets a 1px border-width style */
  border?: boolean
  /** Sets a `border-radius` style */
  borderRadius?: boolean | 'none' | 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  /** Sets a border-width size style */
  borderWidth?: boolean | 0 | 2 | 4 | 8
  /** Sets a 1px border-bottom-width style */
  borderBottom?: boolean
  /** Sets border color style */
  borderColor?: string
  /** Sets a 1px border-left-width style */
  borderLeft?: boolean
  /** Sets a 1px border-right-width style */
  borderRight?: boolean
  /** Sets a 1px border-top-width style */
  borderTop?: boolean
  /** Sets a `box-shadow` style */
  boxShadow?: boolean | 'none' | 'inner' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
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
  /** Sets a `flex-grow` flex style */
  flexGrow?: boolean | 0
  /** Sets a `flex-shrink` flex style */
  flexShrink?: boolean | 0
  /** Sets a `flex-wrap` flex style */
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  /** Sets a font-family style */
  fontFamily?: 'body' | 'mono'
  /** Sets a font-size style */
  fontSize?: 'sm' | 'base' | 'lg'
  /** Text font-weight style */
  fontWeight?: 'light' | 'normal' | 'bold'
  /** Sets height style */
  height?: 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit'
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
  lineHeight?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
  /** Sets a max-width style */
  maxWidth?: 'none' | 'full' | 'min' | 'max' | 'fit' | 'prose' | 0
  /** Sets a max-height style */
  maxHeight?: 'full' | 'screen' | 'min' | 'max' | 'fit'
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
  width?: 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit'

  // --- Spacing
  /**
   * Sets a `gap` style
   * @arbitrarySupport
   */
  gap?: Spacing
  /**
   * Sets a `column-gap` style
   * @arbitrarySupport
   */
  columnGap?: Spacing
  /**
   * Sets a `row-gap` style
   * @arbitrarySupport
   */
  rowGap?: Spacing
  /**
   * margin
   * @arbitrarySupport
   */
  m?: Spacing
  /**
   * margin-top
   * @arbitrarySupport
   */
  mt?: Spacing
  /**
   * margin-right
   * @arbitrarySupport
   */
  mr?: Spacing
  /**
   * margin-bottom
   * @arbitrarySupport
   */
  mb?: Spacing
  /**
   * margin-left
   * @arbitrarySupport
   */
  ml?: Spacing
  /**
   * margin-left && margin-right
   * @arbitrarySupport
   */
  mx?: Spacing
  /**
   * margin-top && margin-bottom
   * @arbitrarySupport
   */
  my?: Spacing
  /**
   * padding
   * @arbitrarySupport
   */
  p?: Spacing
  /**
   * padding-top
   * @arbitrarySupport
   */
  pt?: Spacing
  /**
   * padding-right
   * @arbitrarySupport
   */
  pr?: Spacing
  /**
   * padding-bottom
   * @arbitrarySupport
   */
  pb?: Spacing
  /**
   * padding-left
   * @arbitrarySupport
   */
  pl?: Spacing
  /**
   * padding-left && padding-right
   * @arbitrarySupport
   */
  px?: Spacing
  /**
   * padding-top && padding-bottom
   * @arbitrarySupport
   */
  py?: Spacing
  /** Sets a z-index style */
  zIndex?: 'auto' | 0 | 10 | 20 | 30 | 40 | 50
}

/** Componentry utility props for including utility styles. */
export type UtilityProps = MergePropTypes<UtilityPropsBase, UtilityPropsOverrides>

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
 * Setup function for initializing the utility classes with a custom theme.
 * @remarks
 * This setup is only required if you're not using the Theme provider.
 */
export function initializeUtilityClassesTheme(themeOverrides: any) {
  theme = merge(themeDefaults, themeOverrides)
}

/**
 * `createUtilityClasses` filters and transforms Componentry utility props into
 * utility classes.
 * @example
 * ```tsx
 * const { filteredProps, utilityClasses, utilityStyles } = createUtilityClasses(props)
 * return (
 *   <div
 *     className={clsx('some-custom-class', utilityClasses)}
 *     styles={utilityStyles}
 *     {...filteredProps}
 *   >
 *     {children}
 *   </div>
 * )
 * ```
 */
export function createUtilityClasses<Props extends { [prop: string]: any }>(
  props: Props,
) {
  const classes: string[] = []
  const styles: CSSProperties = {}
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
        classes.push('z-' + value)
        break

      // FLEXBOX/GRID
      case 'alignContent':
        classes.push('content-' + value)
        break
      case 'flexDirection':
        classes.push('flex-' + value.replace('column', 'col'))
        break
      case 'flexGrow':
        classes.push(value === true ? 'grow' : 'grow-' + value)
        break
      case 'flexShrink':
        classes.push(value === true ? 'shrink' : 'shrink-' + value)
        break
      case 'flexWrap':
        classes.push('flex-' + value)
        break
      case 'alignItems':
        classes.push('items-' + value)
        break
      case 'justifyContent':
        classes.push('justify-' + value)
        break
      case 'justifyItems':
        classes.push('justify-items-' + value)
        break
      case 'justifySelf':
        classes.push('justify-self-' + value)
        break
      case 'alignSelf':
        classes.push('self-' + value)
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
        if (value in theme.spacing || value in theme.height) classes.push('h-' + value)
        else styles.height = value
        break
      case 'minHeight':
        classes.push('min-h-' + value)
        break
      case 'maxHeight':
        classes.push('max-h-' + value)
        break
      case 'width':
        if (value in theme.spacing || value in theme.height) classes.push('w-' + value)
        else styles.width = value
        break
      case 'minWidth':
        classes.push('min-w-' + value)
        break
      case 'maxWidth':
        classes.push('max-w-' + value)
        break

      // TYPOGRAPHY
      case 'bold':
        classes.push('font-bold')
        break
      case 'italic':
        classes.push('italic')
        break
      case 'fontFamily':
        classes.push('font-' + value)
        break
      case 'fontWeight':
        classes.push('font-' + value)
        break
      case 'lineHeight':
        classes.push('leading-' + value)
        break
      case 'color':
        classes.push('text-' + value)
        break
      case 'fontSize':
        classes.push('text-' + value)
        break
      case 'textAlign':
        classes.push('text-' + value)
        break
      case 'letterSpacing':
        classes.push('tracking-' + value)
        break
      case 'textTransform':
        classes.push(value)
        break

      // BACKGROUNDS
      case 'backgroundColor':
        classes.push('bg-' + value)
        break
      case 'boxShadow':
        classes.push(value === true ? 'shadow' : 'shadow-' + value)
        break

      // BORDERS
      case 'border':
        classes.push('border') // 1px borderWidth
        break
      case 'borderBottom':
        classes.push('border-b') // 1px borderWidth
        break
      case 'borderLeft':
        classes.push('border-l') // 1px borderWidth
        break
      case 'borderRight':
        classes.push('border-r') // 1px borderWidth
        break
      case 'borderTop':
        classes.push('border-t') // 1px borderWidth
        break
      case 'borderWidth':
        classes.push('border-' + value)
        break
      case 'borderColor':
        classes.push('border-' + value)
        break
      case 'borderRadius':
        if (value === true) classes.push('rounded')
        else if (value in theme.borderRadius) classes.push('rounded-' + value)
        else styles.borderRadius = value
        break

      // STATES (eg https://mui.com/customization/how-to-customize/#state-classes)
      case 'active':
        classes.push('C9Y-active')
        break
      case 'disabled':
        classes.push('C9Y-disabled')
        // Pass through disabled to final element as it's a valid HTML attribute
        filteredProps.disabled = true
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
    utilityClasses: classes.join(' '),
    utilityStyles: Object.keys(styles).length === 0 ? undefined : styles,
  }
}

/** Theme-supported spacing values */
export type Spacing =
  | 'px'
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
