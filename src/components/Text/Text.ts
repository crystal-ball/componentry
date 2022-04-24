import { type ComponentType, forwardRef } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { type MergePropTypes } from '../../utils/types'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface TextPropsOverrides {}

export interface TextPropsDefaults {
  /** Display variant */
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'code' | 'small'
}

export type TextProps = MergePropTypes<TextPropsDefaults, TextPropsOverrides> &
  ComponentBaseProps<'div'>

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
  [Variant: string]: keyof JSX.IntrinsicElements | ComponentType<unknown>
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
 * **[📝 Text docs](https://componentry.design/docs/components/text)**
 *
 * `Text` provides consistently themed typography elements.
 * @example
 * ```tsx
 * <Text variant="h1">
 *   Componentry
 * </Text>
 * ```
 */
export const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const { variant = 'body', ...rest } = {
    ...useThemeProps('Text'),
    ...props,
  }

  return element({
    ref,
    as: textElementMap[variant],
    componentCx: `C9Y-Text-base C9Y-Text-${variant}`,
    ...rest,
  })
})
Text.displayName = 'Text'

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
