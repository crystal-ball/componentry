import React, { forwardRef } from 'react'
import { TextElementMap } from '../../theme/theme-defaults'
import { createElement } from '../../utils/create-element'
import { MergeTypes, Resolve } from '../../utils/types'
import { ElementTypeProps, UtilityProps } from '../../utils/utility-props'
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
  /** Display variant */
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'code' | 'small'
  /** Truncates overflowing text with an ellipses */
  truncate?: boolean
  /** Mapping of Text variants to rendered elements */
  textElementMap?: TextElementMap
}

export type TextProps<As extends React.ElementType = 'div'> = Resolve<
  MergeTypes<TextPropsDefaults, TextPropsOverrides> & { as?: As } & UtilityProps
> &
  ElementTypeProps<As>

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
  <As extends React.ElementType = 'div'>(props: TextProps<As>): React.ReactElement
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

  return createElement({
    ref,
    as: textElementMap[variant],
    componentClassName: [`C9Y-Text-base C9Y-Text-${variant}`, { truncate }],
    ...rest,
  })
}) as Text
Text.displayName = 'Text'
