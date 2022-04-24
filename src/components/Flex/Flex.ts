/* eslint-disable react/no-unused-prop-types */
import { forwardRef } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { useThemeProps } from '../Provider/Provider'

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

export type FlexProps = FlexPropsDefaults & ComponentBaseProps<'div'>

/**
 * **[📝 Flex docs](https://componentry.design/docs/components/flex)**
 *
 * `Flex` provides consistent flexbox layouts using a flex container with
 * utility props.
 * @example
 * ```tsx
 * <Flex align="center" gap={2}>
 *   ...
 * </Flex>
 * ```
 */
export const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
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
