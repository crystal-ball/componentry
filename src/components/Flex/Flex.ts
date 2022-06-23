import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'

import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
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

export type FlexProps = Resolve<MergeTypes<FlexPropsDefaults, FlexPropsOverrides>> &
  UtilityProps &
  React.ComponentPropsWithRef<'div'>

// ✨ Nice display type for IntelliSense
export interface Flex {
  (props: FlexProps): React.ReactElement | null
  displayName?: string
}

/**
 * #### [📝 Flex](https://componentry.design/docs/components/flex)
 *
 * Flex provides consistent flexbox layouts using a flex container with
 * utility props.
 * @example
 * ```tsx
 * <Flex align="center" gap={2}>
 *   ...
 * </Flex>
 * ```
 */
export const Flex: Flex = forwardRef((props, ref) => {
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
})
Flex.displayName = 'Flex'
