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

const ThemedCard = withTheme('Card', Card)
ThemedCard.Body = withTheme('CardBody', CardBody)
ThemedCard.Footer = withTheme('CardFooter', CardFooter)
ThemedCard.Header = withTheme('CardHeader', CardHeader)
ThemedCard.Title = withTheme('CardTitle', CardTitle)

export default ThemedCard
