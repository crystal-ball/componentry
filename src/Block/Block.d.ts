import * as React from 'react'
import { FontProps, SpaceProps } from '../utils/componentry-props'

interface BlockProps {
  /** Converts component to inline level element */
  inline?: boolean
}

/** https://crystal-ball.github.io/componentry/components/block */
declare const Block: React.ComponentType<BlockProps & SpaceProps & FontProps>

export default Block
