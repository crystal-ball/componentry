import elementFactory from '../utils/element-factory'

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 * - `Card.Title`
 */
const Card = elementFactory({ classes: 'card', name: 'Card' })
Card.Body = elementFactory({ classes: 'card-body', name: 'CardBody' })
Card.Footer = elementFactory({ classes: 'card-footer', name: 'CardFooter' })
Card.Header = elementFactory({ classes: 'card-header', name: 'CardHeader' })
Card.Title = elementFactory({ classes: 'card-title', tag: 'h4', name: 'CardTitle' })

export default Card
