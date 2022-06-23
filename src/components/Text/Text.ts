import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

// --------------------------------------------------------
// TEXT ELEMENTS MAP

/**
 * Mapping of Text variants to rendered elements
 * @example
 * ```ts
 * const textElementsMap: TextElementsMap = {
 *   h1: 'h1',
 *   body: 'p',
 * }
 * ```
 */
export type TextElementsMap = {
  [Variant: string]: keyof JSX.IntrinsicElements | React.ComponentType<unknown>
}
/**
 * Internal map used for final rendering
 * @see {@link configureTextElementsMap}
 */
let textElementMap: TextElementsMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  code: 'code', // TODO: make a component?
  small: 'small',
}

/**
 * Configuration method for defining the elements to render for each text
 * variant.
 * @remarks
 * Configured elements are merged with the library default values.
 * @example
 * ```ts
 * // Add a title variant that renders an h1, and render a div instead of a p
 * // for body variants.
 * configureTextElementsMap({
 *   title: 'h1',
 *   body: 'div',
 * })
 * ```
 */
export function configureTextElementsMap(elementsMap: TextElementsMap): void {
  textElementMap = { ...textElementMap, ...elementsMap }
}

// --------------------------------------------------------
// TEXT COMPONENT

/** Module augmentation interface for overriding component props' types */
export interface TextPropsOverrides {}

export interface TextPropsDefaults {
  htmlFor?: string // DEBT: This should be computed from the "as='label'"
  /** Display variant */
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'code' | 'small'
  /** Truncates overflowing text with an ellipses */
  truncate?: boolean
}

export type TextProps = Resolve<MergeTypes<TextPropsDefaults, TextPropsOverrides>> &
  UtilityProps &
  React.ComponentPropsWithRef<'div'>

// ✨ Nice display type for IntelliSense
export interface Text {
  (props: TextProps): React.ReactElement | null
  displayName?: string
}

/**
 * #### [📝 Text docs](https://componentry.design/docs/components/text)
 *
 * Text provides consistently themed typography elements.
 * @example
 * ```tsx
 * <Text variant="h1">
 *   Componentry
 * </Text>
 * ```
 */
export const Text: Text = forwardRef((props, ref) => {
  const {
    truncate = false,
    variant = 'body',
    ...rest
  } = {
    ...useThemeProps('Text'),
    ...props,
  }

  return element({
    ref,
    as: textElementMap[variant],
    componentCx: [`C9Y-Text-base C9Y-Text-${variant}`, { truncate }],
    ...rest,
  })
})
Text.displayName = 'Text'
