import elementFactory from '../component-factories/element';
/**
 * Card component is a simple wrapper for creating markup for card elements
 */

var Card = elementFactory('Card', {
  className: 'card'
});
var CardBody = elementFactory('CardBody', {
  className: 'card-body'
}); // $FlowFixMe

Card.Body = CardBody;
var CardFooter = elementFactory('CardFooter', {
  className: 'card-footer'
}); // $FlowFixMe

Card.Footer = CardFooter;
var CardHeader = elementFactory('CardHeader', {
  className: 'card-header'
}); // $FlowFixMe

Card.Header = CardHeader;
var CardTitle = elementFactory('CardTitle', {
  className: 'card-title',
  tag: 'h4'
}); // $FlowFixMe

Card.Title = CardTitle;
export default Card;