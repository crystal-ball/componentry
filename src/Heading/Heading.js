import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * Heading element
 * @param {Object} props
 * @param {string} props.variant Library variants: heading, subheading
 */
export default function Heading(props) {
  const { as, display, variant, ...rest } = {
    as: 'h1',
    variant: 'heading',
    ...useTheme('Heading'),
    ...props,
  }
  return elem({
    as,
    elemClassName: [`${variant}-${as.slice(1)}`, { [`display-${display}`]: display }],
    ...rest,
  })
}
Heading.displayName = 'Heading'
