import element from '../element'
import { useTheme } from '../Theme/Theme'

/**
 * [Block component 📝](https://componentry.design/components/block)
 */
export default function Block(props) {
  const { inline = false, ...rest } = { ...useTheme('Block'), ...props }

  return element({
    componentCx: {
      'd-block': !inline,
      'd-inline-block': inline,
    },
    ...rest,
  })
}
Block.displayName = 'Block'
