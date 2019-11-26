import * as React from 'react'
import { FontProps, SpaceProps } from '../utils/componentry-props'

interface FlexProps {
  /** Sets the `direction` flex property */
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  /** Converts component to inline level element */
  inline?: boolean
  /** Sets the `align-items` flex property to control flex items' layout */
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  /** Sets the `justify-content` flex property to control flex items' layou */
  justify?: 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly'
  /** Sets the `wrap` flex property to control flex items' wrap behavior */
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap'
}

/** https://crystal-ball.github.io/componentry/components/buttons */
declare const Flex: React.ComponentType<FlexProps & FontProps & SpaceProps>

export default Flex
