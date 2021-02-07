import React from 'react'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../utils/types'
import { element } from '../utils/element-creator'

interface FlexProps extends ComponentBaseProps<'div'> {
  /** Sets an `align-items` flex style */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  /** sets a `flex-direction` flex style */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  /** Switches between display between an inline and block element */
  inline?: boolean
  /** Sets a `justify-content` flex style */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  /** Sets a `flex-wrap` flex style */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

/**
 * [Flex component 📝](https://componentry.design/components/flex)
 */
export const Flex: React.FC<FlexProps> = (props) => {
  const { align, direction, inline, justify, wrap, ...rest } = {
    ...useTheme<FlexProps>('Flex'),
    ...props,
  }

  return element('Flex', {
    componentCx: {
      'd-flex': !inline,
      'd-inline-flex': inline,
      [`flex-${direction}`]: direction,
      [`flex-${wrap}`]: wrap,
      [`align-items-${align}`]: align,
      [`justify-content-${justify}`]: justify,
    },
    ...rest,
  })
}
Flex.displayName = 'Flex'
