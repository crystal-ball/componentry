import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * Text component
 * Add `size` prop for text-sm/text-lg
 */
export default function Text(props) {
  const { inline, lead, size, ...rest } = { as: 'p', ...useTheme('Text'), ...props }

  if (inline) rest.as = 'span'
  if (size) rest.fontSize = size

  return elem({ componentClassNames: [rest.as, { lead }], ...rest })
}
Text.displayName = 'Text'
