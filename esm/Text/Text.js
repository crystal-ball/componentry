import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["variant", "align", "bold", "color", "inline", "elementsMap"];

/* eslint-disable @typescript-eslint/no-empty-interface */
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';
/** Element used for each variant */

var defaultElementsMap = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'body': 'p',
  'code': 'code',
  'small': 'small'
}; // Module augmentation interface for overriding component props' types

/**
 * [Text component 📝](https://componentry.design/components/text)
 */
export var Text = function Text(props) {
  var _useTheme$props = _objectSpread(_objectSpread({}, useTheme('Text', props.__precompile)), props),
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'body' : _useTheme$props$varia,
      align = _useTheme$props.align,
      bold = _useTheme$props.bold,
      color = _useTheme$props.color,
      inline = _useTheme$props.inline,
      _useTheme$props$eleme = _useTheme$props.elementsMap,
      elementsMap = _useTheme$props$eleme === void 0 ? {} : _useTheme$props$eleme,
      rest = _objectWithoutProperties(_useTheme$props, _excluded);

  return element('Text', _objectSpread({
    as: inline ? 'span' : elementsMap[variant] || defaultElementsMap[variant] || 'p',
    componentCx: _defineProperty({}, "".concat(variant, "-variant"), !inline),
    fontColor: color,
    fontWeight: bold ? 'bold' : null,
    textAlign: align
  }, rest));
};
Text.displayName = 'Text';