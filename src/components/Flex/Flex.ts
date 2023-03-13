import React, { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { MergeTypes, Resolve } from '../../utils/types'
import { ElementTypeProps, UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface FlexPropsOverrides {}

export interface FlexPropsDefaults {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `flex-direction` flex style */
  direction?: 'column' | 'column-reverse' | 'row-reverse' | 'row'
  /** Sets a `justify-content` style */
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  /** Sets a `flex-wrap` flex style */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

export type FlexProps<As extends React.ElementType = 'div'> = Resolve<
  MergeTypes<FlexPropsDefaults, FlexPropsOverrides> & { as?: As } & UtilityProps
> &
  ElementTypeProps<As>

/**
 * Flex provides flexbox layout elements.
 * @example
 * ```tsx
 * <Flex align="center" gap={2}>
 *   ...
 * </Flex>
 * ```
 * @see [📝 Flex](https://componentry.design/docs/components/flex)
 */
export interface Flex {
  <As extends React.ElementType = 'div'>(props: FlexProps<As>): React.ReactElement
  displayName?: string
}

export const Flex = forwardRef<HTMLElement, FlexProps>((props, ref) => {
  const { align, direction, justify, wrap, ...rest } = {
    ...useThemeProps('Flex'),
    ...props,
  }

  return createElement({
    ref,
    display: 'flex',
    alignItems: align,
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    ...rest,
  })
}) as Flex
Flex.displayName = 'Flex'
