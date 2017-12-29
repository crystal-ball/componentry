// @flow
import elementFactory from '../component-factories/element-factory'

/**
 * Card component is a simple wrapper for creating markup for card elements
 */
const Card = elementFactory({ classes: 'card', name: 'Card' })

const CardBody = elementFactory({ classes: 'card-body', name: 'CardBody' })
// $FlowFixMe
Card.Body = CardBody

const CardFooter = elementFactory({ classes: 'card-footer', name: 'CardFooter' })
// $FlowFixMe
Card.Footer = CardFooter

const CardHeader = elementFactory({ classes: 'card-header', name: 'CardHeader' })
// $FlowFixMe
Card.Header = CardHeader

const CardTitle = elementFactory({
  classes: 'card-title',
  tag: 'h4',
  name: 'CardTitle',
})
// $FlowFixMe
Card.Title = CardTitle

export default Card
