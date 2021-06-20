"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentry = componentry;
exports.utilityProps = exports.precompileProps = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _excluded = ["__precompile", "block", "color", "outline", "fill", "inline", "justify", "pills", "variant", "vertical", "activate", "deactivate", "defaultActive", "guid", "onActivate", "onActivated", "onDeactivate", "onDeactivated"];
var classNamesProps = {
  active: 1,
  alignContent: 1,
  alignItems: 1,
  alignSelf: 1,
  backgroundColor: 1,
  border: 1,
  borderBottom: 1,
  borderColor: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  borderWidth: 1,
  disabled: 1,
  fontColor: 1,
  fontFamily: 1,
  fontSize: 1,
  fontWeight: 1,
  italic: 1,
  justifyContent: 1,
  position: 1,
  textAlign: 1,
  textTransform: 1,
  visible: 1
};
var stylesProps = {
  fontSize: 1,
  letterSpacing: 1,
  lineHeight: 1,
  width: 1,
  maxWidth: 1,
  minWidth: 1,
  height: 1,
  maxHeight: 1,
  minHeight: 1
}; // Generate set of margin (m*), and padding (p*) spacing props

var spacingProps = {
  m: 1,
  mt: 1,
  mr: 1,
  mb: 1,
  ml: 1,
  mx: 1,
  my: 1,
  p: 1,
  pt: 1,
  pr: 1,
  pb: 1,
  pl: 1,
  px: 1,
  py: 1
};
var spacingBase = {
  m: 'margin',
  p: 'padding'
};
var spacingModifier = {
  t: 'Top',
  l: 'Left',
  r: 'Right',
  b: 'Bottom',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
var spacingRegex = new RegExp(/([bmp])([trblxy])?/);

function generateClassNames(p) {
  var _ref;

  return _ref = {
    'active': p.active,
    // Componentry
    'disabled': p.disabled,
    // Componentry
    'border': p.border,
    'border-b': p.borderBottom,
    'border-l': p.borderLeft,
    'border-r': p.borderRight,
    'border-t': p.borderTop,
    'italic': p.italic,
    'visible': p.visible
  }, (0, _defineProperty2["default"])(_ref, String(p.position), p.position), (0, _defineProperty2["default"])(_ref, String(p.textTransform), p.textTransform), (0, _defineProperty2["default"])(_ref, "bg-".concat(p.backgroundColor), p.backgroundColor), (0, _defineProperty2["default"])(_ref, "border-".concat(p.borderColor), p.borderColor), (0, _defineProperty2["default"])(_ref, "border-".concat(p.borderWidth), p.borderWidth), (0, _defineProperty2["default"])(_ref, "content-".concat(p.alignContent), p.alignContent), (0, _defineProperty2["default"])(_ref, "font-".concat(p.fontFamily), p.fontFamily), (0, _defineProperty2["default"])(_ref, "font-".concat(p.fontWeight), p.fontWeight), (0, _defineProperty2["default"])(_ref, "items-".concat(p.alignItems), p.alignItems), (0, _defineProperty2["default"])(_ref, "justify-".concat(p.justifyContent), p.justifyContent), (0, _defineProperty2["default"])(_ref, "self-".concat(p.alignSelf), p.alignSelf), (0, _defineProperty2["default"])(_ref, "text-".concat(p.fontColor), p.fontColor), (0, _defineProperty2["default"])(_ref, "text-".concat(p.fontSize), p.fontSize), (0, _defineProperty2["default"])(_ref, "text-".concat(p.textAlign), p.textAlign), _ref;
}

/**
 * Library utility that handles:
 * 1. filtering out library props
 * 2. Mapping library props to style and className values
 *
 * NB: values are passed through without additional mapping, eg the number 1
 * isn't mapped to 1px or 1rem.
 */
function componentry(_ref2) {
  var __precompile = _ref2.__precompile,
      block = _ref2.block,
      color = _ref2.color,
      outline = _ref2.outline,
      fill = _ref2.fill,
      inline = _ref2.inline,
      justify = _ref2.justify,
      pills = _ref2.pills,
      variant = _ref2.variant,
      vertical = _ref2.vertical,
      activate = _ref2.activate,
      deactivate = _ref2.deactivate,
      defaultActive = _ref2.defaultActive,
      guid = _ref2.guid,
      onActivate = _ref2.onActivate,
      onActivated = _ref2.onActivated,
      onDeactivate = _ref2.onDeactivate,
      onDeactivated = _ref2.onDeactivated,
      filteredProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  var classNames = {};
  var spacingCx = [];
  var styles = {};
  var props = {}; // We want disabled to reach final element as an HTML attr value

  if (filteredProps.disabled) props.disabled = true; // For each prop passed to any component, bucket it into a library className
  // or style set or pass through in rest

  Object.keys(filteredProps).forEach(function (prop) {
    if (prop in stylesProps && // If a style prop has a library size, fall through to classNames check
    // @ts-ignore-next-line
    !['xs', 'sm', 'md', 'lg', 'xl'].includes(filteredProps[prop])) {
      // 1. The prop maps to a utility style
      // @ts-ignore DEBT not sure how to type
      styles[prop] = filteredProps[prop];
    } else if (prop in classNamesProps) {
      // 2. The prop maps to a utility className
      // @ts-ignore DEBT: not sure how to type
      classNames[prop] = filteredProps[prop];
    } else if (prop in spacingProps) {
      // 3. The prop maps to a shorthand utility style/className
      // @ts-ignore DEBT: not sure how to type
      if (['xs', 'sm', 'md', 'lg', 'xl'].includes(filteredProps[prop])) {
        // 3a. The prop value maps to a computed className, eg (pt: 'xs') -> `pt-xs`
        spacingCx.push("".concat(prop, "-").concat(filteredProps[prop]));
      } else {
        // 3b. The prop value is a raw value that should be set as a style
        // attribute, eg (pt: 7) -> `paddingTop: 7`
        var spacingMatch = spacingRegex.exec(prop);
        if (!spacingMatch) return;

        var _spacingMatch = (0, _slicedToArray2["default"])(spacingMatch, 3),
            b = _spacingMatch[1],
            m = _spacingMatch[2];

        if (m === 'x' || m === 'y') {
          // x and y values have to be broken out into the individual direction values
          // @ts-ignore DEBT: not sure how to type
          styles[spacingBase[b] + spacingModifier[m][0]] = filteredProps[prop]; // @ts-ignore DEBT: not sure how to type

          styles[spacingBase[b] + spacingModifier[m][1]] = filteredProps[prop];
        } else {
          // @ts-ignore DEBT: not sure how to type
          styles[spacingBase[b] + (spacingModifier[m] || '')] = filteredProps[prop];
        }
      }
    } else {
      // 4. The prop doesn't map to a library utility prop, pass it through
      props[prop] = filteredProps[prop];
    }
  });
  return {
    props: props,
    styles: styles,
    utilityCx: [generateClassNames(classNames), spacingCx]
  };
}

var precompileProps = {
  inline: 1,
  variant: 1,
  // --- Flex
  align: 1,
  direction: 1,
  justify: 1,
  wrap: 1,
  // --- Text
  bold: 1,
  color: 1,
  italic: 1
};
exports.precompileProps = precompileProps;
var utilityProps = (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, classNamesProps), stylesProps), spacingProps);
exports.utilityProps = utilityProps;