// @flow
import elementFactory from '../component-factories/element-factory'

/**
 * Card component is a simple wrapper for creating markup for card elements
 */
const Card = elementFactory({ classes: 'card', name: 'Card' })
// $FlowFixMe
Card.Body = elementFactory({ classes: 'card-body', name: 'CardBody' })
// $FlowFixMe
Card.Footer = elementFactory({ classes: 'card-footer', name: 'CardFooter' })
// $FlowFixMe
Card.Header = elementFactory({ classes: 'card-header', name: 'CardHeader' })
// $FlowFixMe
Card.Title = elementFactory({ classes: 'card-title', tag: 'h4', name: 'CardTitle' })

export default Card
