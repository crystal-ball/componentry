import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * Text element
 * @param {Object} props
 * @param {string} props.variant Library variants: body, caption, lead
 * @param {string} props.size Library sizes: xs, sm, base, lg, xl
 */
export default function Text(props) {
  const { inline, size, variant, ...rest } = {
    as: 'p',
    variant: 'body',
    ...useTheme('Text'),
    ...props,
  }

  if (inline) rest.as = 'span'
  if (size) rest.fontSize = size

  return elem({ elemClassName: variant, ...rest })
}
Text.displayName = 'Text'
