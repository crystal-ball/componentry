import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * Card component is a simple wrapper for creating markup for card elements
 */
export default function Card(props) {
  return elem({ classes: 'card', ...useTheme('Card'), ...props })
}
Card.Body = function CardBody(props) {
  return elem({ classes: 'card-body', ...useTheme('CardBody'), ...props })
}
Card.Footer = function CardFooter(props) {
  return elem({ classes: 'card-footer', ...useTheme('CardFooter'), ...props })
}
Card.Header = function CardHeader(props) {
  return elem({ classes: 'card-header', ...useTheme('CardHeader'), ...props })
}
Card.Title = function CardTitle(props) {
  return elem({
    defaultAs: 'h4',
    classes: 'card-title',
    ...useTheme('CardTitle'),
    ...props,
  })
}
