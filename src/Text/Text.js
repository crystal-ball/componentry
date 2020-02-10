import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * [Text component 📝](https://componentry.design/components/text)
 */
export default function Text(props) {
  const { color, inline, size, variant, ...rest } = {
    as: 'p',
    variant: 'body',
    ...useTheme('Text'),
    ...props,
  }

  if (inline) rest.as = 'span'
  if (color) rest.fontColor = color
  if (size) rest.fontSize = size

  return elem({ elemClassName: variant, ...rest })
}
Text.displayName = 'Text'
