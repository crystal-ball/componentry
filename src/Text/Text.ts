/* eslint-disable @typescript-eslint/no-empty-interface */

import React from 'react'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps, MergePropTypes } from '../utils/types'
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

// Module augmentation interface for overriding component props' types
export interface TextProps {}

interface DefaultTextProps {
  /** Shorthand to set text-align */
  align?: 'left' | 'center' | 'right' | 'justify'
  /** Shorthand to set font-weight bold */
  bold?: boolean
  /** Shorthand to set font color */
  color?: 'anchor' | 'body' | 'heading' | 'primary'
  /** Switches display between an inline (span) and block (div) element */
  inline?: boolean
  /** Shorthand to set font-style italic */
  italic?: boolean
  /** Display variant */
  variant?: 'heading-1' | 'heading-2' | 'heading-3' | 'body' | 'code' | 'small'
}

type Props = MergePropTypes<DefaultTextProps, TextProps> & ComponentBaseProps<'div'>

/**
 * [Text component 📝](https://componentry.design/components/text)
 */
export const Text: React.FC<Props> = (props) => {
  const {
    variant = 'body',
    align,
    bold,
    color,
    inline,
    elementsMap = defaultElementsMap,
    ...rest
  } = {
    ...useTheme<Props & { elementsMap?: ElementsMap }>('Text', props.__precompile),
    ...props,
  }

  return element('Text', {
    as: inline ? 'span' : elementsMap[variant],
    componentCx: {
      [`${variant}-variant`]: !inline,
    },
    fontColor: color,
    fontWeight: bold ? 'bold' : null,
    textAlign: align,
    ...rest,
  })
}
Text.displayName = 'Text'
