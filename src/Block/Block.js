import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * @typedef {Object} Props
 * @property {boolean} Props.inline
 */

/**
 * [Block component 📝](https://componentry.design/components/block)
 */
export default function Block(props) {
  /** @type {props} */
  const { inline, ...rest } = { ...useTheme('Block'), ...props }

  return elem({
    elemClassName: {
      'd-block': !inline,
      'd-inline-block': inline,
    },
    ...rest,
  })
}
Block.displayName = 'Block'
