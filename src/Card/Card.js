import simpleComponent from '../simple-component-factory'

/**
 * [Card component 📝](https://componentry.design/components/card)
 */
const Card = simpleComponent('Card', {
  elemClassName: 'card',
})
export default Card

/**
 * [Card body component 📝](https://componentry.design/components/card)
 */
Card.Body = simpleComponent('CardBody', {
  elemClassName: 'card-body',
})

/**
 * [Card footer component 📝](https://componentry.design/components/card)
 */
Card.Footer = simpleComponent('CardFooter', {
  elemClassName: 'card-footer',
})

/**
 * [Card header component 📝](https://componentry.design/components/card)
 */
Card.Header = simpleComponent('CardHeader', {
  elemClassName: 'card-header',
})

/**
 * [Card title component 📝](https://componentry.design/components/card)
 */
Card.Title = simpleComponent('CardTitle', {
  as: 'h4',
  elemClassName: 'card-title',
})
