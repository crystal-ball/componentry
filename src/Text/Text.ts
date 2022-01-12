import React from 'react'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps, MergePropTypes } from '../utils/types'
import { element } from '../utils/element-creator'

/** Element used for each variant */
type ElementsMap = Record<string, keyof JSX.IntrinsicElements>

const defaultElementsMap: ElementsMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  code: 'code', // TODO: make a component?
  small: 'small',
}

// Module augmentation interface for overriding component props' types
export interface TextProps {}

interface DefaultTextProps {
  /** Display variant */
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'code' | 'small'
}

type Props = MergePropTypes<DefaultTextProps, TextProps> & ComponentBaseProps<'div'>

/**
 * [Text component 📝](https://componentry.design/components/text)
 */
export const Text: React.FC<Props> = (props) => {
  const {
    variant = 'body',
    elementsMap = defaultElementsMap,
    ...rest
  } = {
    ...useTheme<Props & { elementsMap?: ElementsMap }>('Text', props.__precompile),
    ...props,
  }

  return element('Text', {
    as: elementsMap[variant],
    componentCx: `🅲Text-base 🅲Text-${variant}`,
    ...rest,
  })
}
Text.displayName = 'Text'
