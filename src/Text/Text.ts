import React from 'react'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../utils/types'
import { element } from '../utils/element-creator'

/** Element used for each variant */
type ElementsMap = Record<string, keyof JSX.IntrinsicElements>

const defaultElementsMap: ElementsMap = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'body': 'p',
  'code': 'code',
  'small': 'small',
}

interface TextProps extends ComponentBaseProps<'div'> {
  /** Shorthand to set font-weight bold */
  bold?: boolean
  /** Switches between display between an inline (span) and block (div) element */
  inline?: boolean
  /** Shorthand to set font-style italic */
  italic?: boolean
  /** Display variant */
  variant?: 'heading-1' | 'heading-2' | 'heading-3' | 'body' | 'code' | 'small'
}

/**
 * [Text component 📝](https://componentry.design/components/text)
 */
export const Text: React.FC<TextProps> = (props) => {
  const { variant = 'body', bold, inline, elementsMap = {}, ...rest } = {
    ...useTheme<TextProps & { elementsMap?: ElementsMap }>('Text'),
    ...props,
  }

  return element('Text', {
    as: inline ? 'span' : elementsMap[variant] || defaultElementsMap[variant] || 'p',
    fontWeight: bold ? 'bold' : null,
    componentCx: {
      [`text-${variant}`]: !inline,
    },
    ...rest,
  })
}
Text.displayName = 'Text'
