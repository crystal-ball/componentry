import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * [Text component 📝](https://componentry.design/components/text)
 */
export default function Text(props) {
  const { variant = 'body', color, inline, size, ...rest } = {
    ...useTheme('Text'),
    ...props,
  }

  if (inline) rest.as = 'span'
  if (color) rest.fontColor = color
  if (size) rest.fontSize = size

  return elem({ as: 'p', elemClassName: variant, ...rest })
}
Text.displayName = 'Text'
