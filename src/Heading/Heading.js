import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * Heading component
 * @param {Object} props
 */
export default function Heading(props) {
  const { as, display, ...rest } = { as: 'h1', ...useTheme('Heading'), ...props }
  return elem({
    as,
    componentClassNames: [as, { [`display-${display}`]: display }],
    ...rest,
  })
}
Heading.displayName = 'Heading'
