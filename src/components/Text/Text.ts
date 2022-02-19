import React from 'react'
import { useTheme } from '../Theme/Theme'
import { type ComponentBaseProps } from '../../utils/base-types'
import { type MergePropTypes } from '../../utils/types'
import { element } from '../../utils/element-creator'

// Module augmentation interface for overriding component props' types
export interface TextPropsOverrides {}

interface TextPropsDefaults {
  /** Display variant */
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'code' | 'small'
}

type TextProps = MergePropTypes<TextPropsDefaults, TextPropsOverrides> &
  ComponentBaseProps<'div'>

type ElementsMap = {
  [Variant: string]: keyof JSX.IntrinsicElements | (() => JSX.Element)
}
let textElementMap: ElementsMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  code: 'code', // TODO: make a component?
  small: 'small',
}

/**
 * [Text component 📝](https://componentry.design/components/text)
 */
export const Text: React.FC<TextProps> = (props) => {
  const { variant = 'body', ...rest } = {
    ...useTheme<TextProps>('Text'),
    ...props,
  }

  return element({
    as: textElementMap[variant],
    componentCx: `🅲Text-base 🅲Text-${variant}`,
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
 * configureTextElementsMap({
 *   h1: 'h1',
 *   h2: 'h2',
 *   h3: 'h3',
 *   subtitle: 'h4',
 *   body: 'div',
 * })
 */
export function configureTextElementsMap(elementsMap: ElementsMap) {
  textElementMap = elementsMap
}
