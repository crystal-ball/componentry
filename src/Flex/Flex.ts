import React from 'react'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../utils/types'
import { element } from '../utils/element-creator'

export interface FlexProps extends ComponentBaseProps<'div'> {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `flex-direction` flex style */
  direction?: 'col' | 'col-reverse' | 'row-reverse' | 'row'
  /** Switches between display between an inline and block element */
  inline?: boolean
  /** Sets a `justify-content` style */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
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
      'flex': !inline,
      'inline-flex': inline,
      [`flex-${direction}`]: direction,
      [`flex-${wrap}`]: wrap,
    },
    alignItems: align,
    justifyContent: justify,
    ...rest,
  })
}
Flex.displayName = 'Flex'
