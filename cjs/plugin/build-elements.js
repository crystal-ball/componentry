"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildClosingElement = buildClosingElement;
exports.buildOpeningElement = buildOpeningElement;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _template = _interopRequireDefault(require("@babel/template"));

function buildClosingElement(identifier, t) {
  return t.jSXClosingElement(t.jsxIdentifier(identifier));
}

function buildOpeningElement(_ref, selfClosing, t) {
  var props = _ref.props,
      type = _ref.type;
  return t.jSXOpeningElement(t.jsxIdentifier(type), // @ts-ignore DEBT
  Object.keys(props).map(function (propName) {
    var propValue = props[propName]; // Filter out empty objects (Componentry will return an empty style object for every element)

    if (isEmptyObject(propValue)) return null;
    return t.jsxAttribute(t.jSXIdentifier(propName), typeof propValue === 'string' ? t.stringLiteral(propValue) : // template.expression provides a convenient way to create an AST for
    // numbers, booleans, objects, and arrays
    t.jsxExpressionContainer(_template["default"].expression(JSON.stringify(propValue))()));
  }).filter(Boolean), selfClosing);
}

function isEmptyObject(maybe) {
  return (0, _typeof2["default"])(maybe) === 'object' && maybe !== null && Object.keys(maybe).length === 0;
}