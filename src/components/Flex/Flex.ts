/* eslint-disable react/no-unused-prop-types */
import { type FC, forwardRef } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { useThemeProps } from '../Provider/Provider'

export interface FlexPropsBase {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `flex-direction` flex style */
  direction?: 'column' | 'column-reverse' | 'row-reverse' | 'row'
  /** Sets a `justify-content` style */
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  /** Sets a `flex-wrap` flex style */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

export type FlexProps = FlexPropsBase & ComponentBaseProps<'div'>

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
export const Flex: FC<FlexProps> = (props) => {
  const { align, direction, justify, wrap, ...rest } = {
    ...useThemeProps('Flex'),
    ...props,
  }

  return element({
    display: 'flex',
    alignItems: align,
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    ...rest,
  })
}
Flex.displayName = 'Flex'

/**
 * **[📝 RefFlex docs](https://componentry.design/docs/components/flex)**
 *
 * `RefFlex` provides a ref-able `Flex` element.
 * @example
 * ```tsx
 * <RefFlex ref={ref} align="center" gap={2}>
 *   ...
 * </RefFlex>
 * ```
 */
export const RefFlex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
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
RefFlex.displayName = 'RefFlex'
