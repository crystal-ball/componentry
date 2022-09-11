import React, { forwardRef } from 'react'
import { TextElementMap } from '../../theme/theme-defaults'
import { element } from '../../utils/element-creator'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

// --------------------------------------------------------
// TEXT ELEMENTS MAP

/** Default element map */
const defaulTextElementMap: TextElementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'div',
  code: 'code',
  small: 'small',
}

// --------------------------------------------------------
// TEXT COMPONENT

/** Module augmentation interface for overriding component props' types */
export interface TextPropsOverrides {}

export interface TextPropsDefaults {
  /** Mapping of Text variants to rendered elements */
  textElementMap?: TextElementMap
  /** Truncates overflowing text with an ellipses */
  truncate?: boolean
  /** Display variant */
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'code' | 'small'
}

export type TextPropsBase<Elem extends React.ElementType = 'div'> = UtilityProps &
  MergeTypes<TextPropsDefaults, TextPropsOverrides> & { as?: Elem }

export type TextProps<Elem extends React.ElementType = 'div'> = TextPropsBase<Elem> &
  DistributiveOmit<React.ComponentPropsWithRef<Elem>, keyof TextPropsBase<Elem>>

/**
 * Text provides consistently themed typography elements.
 * @example
 * ```tsx
 * <Text variant="h1">
 *   Build something delightful!
 * </Text>
 * ```
 * @see [📝 Text docs](https://componentry.design/docs/components/text)
 */
export interface Text {
  <Elem extends React.ElementType = 'div'>(props: TextProps<Elem>): React.ReactElement
  displayName?: string
}

export const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  const {
    textElementMap = defaulTextElementMap,
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
}) as Text
Text.displayName = 'Text'
