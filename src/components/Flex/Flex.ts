import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
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

export type FlexPropsBase<Elem extends React.ElementType = 'div'> = UtilityProps &
  MergeTypes<FlexPropsDefaults, FlexPropsOverrides> & { as?: Elem }

export type FlexProps<Elem extends React.ElementType = 'div'> = FlexPropsBase<Elem> &
  DistributiveOmit<React.ComponentPropsWithRef<Elem>, keyof FlexPropsBase<Elem>>

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
  <Elem extends React.ElementType = 'div'>(props: FlexProps<Elem>): React.ReactElement
  displayName?: string
}

export const Flex = forwardRef<HTMLElement, FlexProps>((props, ref) => {
  const { align, direction, justify, wrap, ...rest } = {
    ...useThemeProps('Flex'),
    ...props,
  }

  return element({
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
