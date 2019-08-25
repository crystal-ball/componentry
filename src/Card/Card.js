import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * Card component is a simple wrapper for creating markup for card elements
 */
export default function Card(props) {
  return elem({ componentClassNames: 'card', ...useTheme('Card'), ...props })
}
Card.Body = function CardBody(props) {
  return elem({ componentClassNames: 'card-body', ...useTheme('CardBody'), ...props })
}
Card.Footer = function CardFooter(props) {
  return elem({ componentClassNames: 'card-footer', ...useTheme('CardFooter'), ...props })
}
Card.Header = function CardHeader(props) {
  return elem({ componentClassNames: 'card-header', ...useTheme('CardHeader'), ...props })
}
Card.Title = function CardTitle(props) {
  return elem({
    as: 'h4',
    componentClassNames: 'card-title',
    ...useTheme('CardTitle'),
    ...props,
  })
}
