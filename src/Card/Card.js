import { staticComponent } from '../factories/static-component'

/**
 * [Card component 📝](https://componentry.design/components/card)
 */
export const Card = staticComponent('Card', {
  componentCx: 'card',
})

/**
 * [Card body component 📝](https://componentry.design/components/card)
 */
Card.Body = staticComponent('CardBody', {
  componentCx: 'card-body',
})

/**
 * [Card footer component 📝](https://componentry.design/components/card)
 */
Card.Footer = staticComponent('CardFooter', {
  componentCx: 'card-footer',
})

/**
 * [Card header component 📝](https://componentry.design/components/card)
 */
Card.Header = staticComponent('CardHeader', {
  componentCx: 'card-header',
})

/**
 * [Card title component 📝](https://componentry.design/components/card)
 */
Card.Title = staticComponent('CardTitle', {
  as: 'h4',
  componentCx: 'card-title',
})
