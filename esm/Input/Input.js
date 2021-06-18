import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { createContext, useContext, useRef } from 'react';
import { nanoid } from 'nanoid';
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';
import { staticComponent } from '../utils/static-component-builder';
var InputCtx = /*#__PURE__*/createContext(null);
/**
 * [Input component 📝](https://componentry.design/components/input)
 * @experimental
 */

export var Input = function Input(_ref) {
  var children = _ref.children;

  /**
   * Guid instance property will be uniquely assigned once for each input
   * instance, this unique id is then passed to all children through context
   * where it can be used to wire together aria attributes
   */
  var _useRef = useRef(nanoid()),
      guid = _useRef.current;

  return /*#__PURE__*/React.createElement(InputCtx.Provider, {
    value: {
      guid: guid
    }
  }, children);
};
Input.displayName = 'Input'; // --- Description subcomponent ---

Input.Description = staticComponent('InputDescription'); // --- Error subcomponent ---

Input.Error = staticComponent('InputError'); // --- Field subcomponent ---

Input.Field = function InputField(props) {
  var ctx = useContext(InputCtx);
  assertContext(ctx);
  return element('InputField', _objectSpread(_objectSpread({
    as: 'input',
    type: 'text',
    id: ctx.guid
  }, useTheme('InputField')), props));
};

Input.Field.displayName = 'InputField'; // --- Label subcomponent ---

Input.Label = function InputLabel(props) {
  var ctx = useContext(InputCtx);
  assertContext(ctx);
  return element('InputLabel', _objectSpread(_objectSpread({
    as: 'label',
    htmlFor: ctx.guid
  }, useTheme('InputLabel')), props));
};

Input.Label.displayName = 'InputLabel'; // --------------------------------------------------------
// Utils

/**
 * Utility asserts ctx presence for safe access
 */

function assertContext(ctx) {
  if (!ctx) throw new Error('Input context cannot be used outside of Input component');
}