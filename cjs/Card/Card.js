"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _staticComponentBuilder = require("../utils/static-component-builder");

/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * [Card component 📝](https://componentry.design/components/card)
 * @experimental
 */
var Card = (0, _staticComponentBuilder.staticComponent)('Card');
exports.Card = Card;
Card.Body = (0, _staticComponentBuilder.staticComponent)('CardBody');
Card.Footer = (0, _staticComponentBuilder.staticComponent)('CardFooter');
Card.Header = (0, _staticComponentBuilder.staticComponent)('CardHeader');
Card.Title = (0, _staticComponentBuilder.staticComponent)('CardTitle', {
  as: 'h4'
});