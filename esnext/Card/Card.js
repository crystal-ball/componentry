import elementFactory from '../component-factories/element';
/**
 * Card component is a simple wrapper for creating markup for card elements
 */

const Card = elementFactory('Card', {
  className: 'card'
});
const CardBody = elementFactory('CardBody', {
  className: 'card-body'
}); // $FlowFixMe

Card.Body = CardBody;
const CardFooter = elementFactory('CardFooter', {
  className: 'card-footer'
}); // $FlowFixMe

Card.Footer = CardFooter;
const CardHeader = elementFactory('CardHeader', {
  className: 'card-header'
}); // $FlowFixMe

Card.Header = CardHeader;
const CardTitle = elementFactory('CardTitle', {
  className: 'card-title',
  tag: 'h4'
}); // $FlowFixMe

Card.Title = CardTitle;
export default Card;