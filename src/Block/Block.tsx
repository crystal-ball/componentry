import React from 'react'
import { useTheme } from '../Theme/Theme'
import { element } from '../factories/element'
import { UtilityProps } from '../utiility-types'

interface BlockProps extends UtilityProps {
  /** Switches between display between an inline and block element */
  inline?: boolean
}

/**
 * [Block component 📝](https://componentry.design/components/block)
 */
export const Block: React.FC<BlockProps> = (props) => {
  const { inline = false, ...rest } = { ...useTheme('Block'), ...props } as BlockProps

  return element({
    componentCx: {
      // ℹ️ Block is a helper component so it doesn't have a 🅲-block class
      'd-block': !inline,
      'd-inline-block': inline,
    },
    ...rest,
  })
}
Block.displayName = 'Block'
