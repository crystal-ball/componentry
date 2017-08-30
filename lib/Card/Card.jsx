import elementFactory from '../utils/element-factory'

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 * - `Card.Title`
 */
const Card = elementFactory({ classes: 'card' })
Card.Body = elementFactory({ classes: 'card-body' })
Card.Footer = elementFactory({ classes: 'card-footer' })
Card.Header = elementFactory({ classes: 'card-header' })
Card.Title = elementFactory({ classes: 'card-title', tag: 'h4' })

export default Card
