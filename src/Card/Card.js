// @flow
import componentryElem from '../elem-factory'
import withTheme from '../withTheme'

/**
 * Card component is a simple wrapper for creating markup for card elements
 */
const CardBody = props => componentryElem({ classes: 'card-body', ...props })
const CardFooter = props => componentryElem({ classes: 'card-footer', ...props })
const CardHeader = props => componentryElem({ classes: 'card-header', ...props })
const CardTitle = props =>
  componentryElem({
    defaultAs: 'h4',
    classes: 'card-title',
    ...props,
  })

const Card = props => componentryElem({ classes: 'card', ...props })
Card.Body = withTheme('CardBody', CardBody)
Card.Footer = withTheme('CardFooter', CardFooter)
Card.Header = withTheme('CardHeader', CardHeader)
Card.Title = withTheme('CardTitle', CardTitle)

export default withTheme('Card', Card)
