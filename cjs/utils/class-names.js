"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navClasses = exports.parseBaseCx = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _clsx2 = _interopRequireDefault(require("clsx"));

/** Parses a base className from a component display name */
var parseBaseCx = function parseBaseCx(displayName) {
  return displayName.replace(/[A-Z]/g, function (match, offset) {
    return "".concat(offset ? '-' : '').concat(match.toLowerCase());
  });
};

exports.parseBaseCx = parseBaseCx;

/** Creates the classes for nav elements */
var navClasses = function navClasses(variant, _ref) {
  var _clsx;

  var fill = _ref.fill,
      justify = _ref.justify,
      pills = _ref.pills,
      vertical = _ref.vertical;
  return (0, _clsx2["default"])((_clsx = {}, (0, _defineProperty2["default"])(_clsx, "".concat(variant, "-fill"), fill), (0, _defineProperty2["default"])(_clsx, "".concat(variant, "-justified"), justify), (0, _defineProperty2["default"])(_clsx, "".concat(variant, "-pills"), pills), (0, _defineProperty2["default"])(_clsx, "".concat(variant, "-vertical"), vertical), _clsx));
};

exports.navClasses = navClasses;