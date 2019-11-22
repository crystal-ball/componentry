import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * Card component is a simple wrapper for creating markup for card elements
 */
export default function Card(props) {
  return elem({ componentClassNames: 'card', ...useTheme('Card'), ...props })
}
Card.displayName = 'Card'

/**
 * Card Body
 */
Card.Body = function CardBody(props) {
  return elem({ componentClassNames: 'card-body', ...useTheme('CardBody'), ...props })
}
Card.Body.displayName = 'CardBody'

/**
 * Card Footer
 */
Card.Footer = function CardFooter(props) {
  return elem({ componentClassNames: 'card-footer', ...useTheme('CardFooter'), ...props })
}
Card.Footer.displayName = 'CardFooter'

/**
 * Card Header
 */
Card.Header = function CardHeader(props) {
  return elem({ componentClassNames: 'card-header', ...useTheme('CardHeader'), ...props })
}
Card.Header.displayName = 'CardHeader'

/**
 * Card Title
 */
Card.Title = function CardTitle(props) {
  return elem({
    as: 'h4',
    componentClassNames: 'card-title',
    ...useTheme('CardTitle'),
    ...props,
  })
}
Card.Title.displayName = 'CardTitle'
