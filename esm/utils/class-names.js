import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import clsx from 'clsx';
/** Parses a base className from a component display name */

export var parseBaseCx = function parseBaseCx(displayName) {
  return displayName.replace(/[A-Z]/g, function (match, offset) {
    return "".concat(offset ? '-' : '').concat(match.toLowerCase());
  });
};

/** Creates the classes for nav elements */
export var navClasses = function navClasses(variant, _ref) {
  var _clsx;

  var fill = _ref.fill,
      justify = _ref.justify,
      pills = _ref.pills,
      vertical = _ref.vertical;
  return clsx((_clsx = {}, _defineProperty(_clsx, "".concat(variant, "-fill"), fill), _defineProperty(_clsx, "".concat(variant, "-justified"), justify), _defineProperty(_clsx, "".concat(variant, "-pills"), pills), _defineProperty(_clsx, "".concat(variant, "-vertical"), vertical), _clsx));
};