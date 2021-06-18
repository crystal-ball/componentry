import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["inline"];
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [Block component 📝](https://componentry.design/components/block)
 */
export var Block = function Block(props) {
  var _useTheme$props = _objectSpread(_objectSpread({}, useTheme('Block', props.__precompile)), props),
      inline = _useTheme$props.inline,
      rest = _objectWithoutProperties(_useTheme$props, _excluded);

  return element('Block', _objectSpread({
    componentCx: {
      'block': !inline,
      'inline-block': inline
    }
  }, rest));
};
Block.displayName = 'Block';