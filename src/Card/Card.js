import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * [Card component 📝](https://componentry.design/components/card)
 */
export default function Card(props) {
  return elem({ elemClassName: 'card', ...useTheme('Card'), ...props })
}
Card.displayName = 'Card'

/**
 * [Card body component 📝](https://componentry.design/components/card)
 */
Card.Body = function CardBody(props) {
  return elem({ elemClassName: 'card-body', ...useTheme('CardBody'), ...props })
}
Card.Body.displayName = 'CardBody'

/**
 * [Card footer component 📝](https://componentry.design/components/card)
 */
Card.Footer = function CardFooter(props) {
  return elem({ elemClassName: 'card-footer', ...useTheme('CardFooter'), ...props })
}
Card.Footer.displayName = 'CardFooter'

/**
 * [Card header component 📝](https://componentry.design/components/card)
 */
Card.Header = function CardHeader(props) {
  return elem({ elemClassName: 'card-header', ...useTheme('CardHeader'), ...props })
}
Card.Header.displayName = 'CardHeader'

/**
 * [Card title component 📝](https://componentry.design/components/card)
 */
Card.Title = function CardTitle(props) {
  return elem({
    as: 'h4',
    elemClassName: 'card-title',
    ...useTheme('CardTitle'),
    ...props,
  })
}
Card.Title.displayName = 'CardTitle'
