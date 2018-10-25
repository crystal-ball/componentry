import * as React from 'react'
import { SpaceProps } from '../utils/componentry-props'

interface BlockProps {
  inline?: boolean
}

/** https://crystal-ball.github.io/componentry/components/block */
declare const Block: React.ComponentType<BlockProps & SpaceProps>

export default Block
