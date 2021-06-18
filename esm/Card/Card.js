/* eslint-disable @typescript-eslint/no-empty-interface */
import { staticComponent } from '../utils/static-component-builder';

/**
 * [Card component 📝](https://componentry.design/components/card)
 * @experimental
 */
export var Card = staticComponent('Card');
Card.Body = staticComponent('CardBody');
Card.Footer = staticComponent('CardFooter');
Card.Header = staticComponent('CardHeader');
Card.Title = staticComponent('CardTitle', {
  as: 'h4'
});