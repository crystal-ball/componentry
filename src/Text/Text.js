import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * Text component
 * TODO: use `span` prop to render a span?
 */
export default function Text(props) {
  const merged = { as: 'p', ...useTheme('Text'), ...props }
  return elem({ componentClassNames: merged.as, ...merged })
}
