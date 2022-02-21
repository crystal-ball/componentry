import { type ComponentType, type FC } from 'react'
import { useTheme } from '../Theme/Theme'
import { type ComponentBaseProps } from '../../utils/base-types'
import { type MergePropTypes } from '../../utils/types'
import { element } from '../../utils/element-creator'

/** Module augmentation interface for overriding component props' types */
export interface TextPropsOverrides {}

export interface TextPropsBase {
  /** Display variant */
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'code' | 'small'
}

export type TextProps = MergePropTypes<TextPropsBase, TextPropsOverrides> &
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
  [Variant: string]: keyof JSX.IntrinsicElements | ComponentType<any>
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
export const Text: FC<TextProps> = (props) => {
  const { variant = 'body', ...rest } = {
    ...useTheme<TextProps>('Text'),
    ...props,
  }

  return element({
    as: textElementMap[variant],
    componentCx: `C9Y-Text-base C9Y-Text-${variant}`,
    ...rest,
  })
}
Text.displayName = 'Text'

/**
 * Configuration method for defining the elements to render for each text
 * variant.
 * @remarks
 * When used the initial elements are overridden, so be sure to define a
 * complete mapping.
 * @example
 * ```ts
 * configureTextElementsMap({
 *   h1: 'h1',
 *   h2: 'h2',
 *   h3: 'h3',
 *   subtitle: 'h4',
 *   body: 'div',
 * })
 * ```
 */
export function configureTextElementsMap(elementsMap: TextElementsMap) {
  textElementMap = elementsMap
}
