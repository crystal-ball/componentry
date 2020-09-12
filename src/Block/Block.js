import { useTheme } from '../Theme/Theme'
import { element } from '../factories/element'

/**
 * [Block component 📝](https://componentry.design/components/block)
 */
export function Block(props) {
  const { inline = false, ...rest } = { ...useTheme('Block'), ...props }

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
