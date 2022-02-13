import React from 'react'
import { useTheme } from '../Theme/Theme'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'

export interface FlexProps extends ComponentBaseProps<'div'> {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `flex-direction` flex style */
  direction?: 'column' | 'column-reverse' | 'row-reverse' | 'row'
  /** Sets a `justify-content` style */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /** Sets a `flex-wrap` flex style */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

/**
 * [Flex component 📝](https://componentry.design/components/flex)
 */
export const Flex: React.FC<FlexProps> = (props) => {
  const { align, direction, justify, wrap, ...rest } = {
    ...useTheme<FlexProps>('Flex'),
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
