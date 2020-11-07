import React from 'react'
import { useTheme } from '../Theme/Theme'
import { BaseProps } from '../utils/base-types'
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

interface TextProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
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
  const { variant = 'body', bold, italic, inline, elementsMap = {}, ...rest } = {
    ...useTheme<TextProps & { elementsMap?: ElementsMap }>('Text'),
    ...props,
  }

  return element({
    as: inline ? 'span' : elementsMap[variant] || defaultElementsMap[variant] || 'p',
    fontStyle: italic ? 'italic' : null,
    fontWeight: bold ? 'bold' : null,
    componentCx: {
      '🅲-text': true,
      [`text-${variant}`]: !inline,
    },
    ...rest,
  })
}
Text.displayName = 'Text'
