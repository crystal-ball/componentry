// @flow
import elem from '../elem-factory'
import withTheme from '../withTheme'

/**
 * Card component is a simple wrapper for creating markup for card elements
 */
const Card = withTheme('Card', props => elem({ classes: 'card', ...props }))

const Body = withTheme('CardBody', props => elem({ classes: 'card-body', ...props }))
Card.Body = Body

const Footer = withTheme('CardFooter', props =>
  elem({ classes: 'card-footer', ...props }),
)
Card.Footer = Footer

const Header = withTheme('CardHeader', props =>
  elem({ classes: 'card-header', ...props }),
)
Card.Header = Header

const Title = withTheme('CardTitle', props =>
  elem({ defaultAs: 'h4', classes: 'card-title', ...props }),
)
Card.Title = Title

export default Card
