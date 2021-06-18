/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { createContext, useContext, useRef } from 'react';
import { nanoid } from 'nanoid';
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';
import { staticComponent } from '../utils/static-component-builder';
const InputCtx = /*#__PURE__*/createContext(null);
/**
 * [Input component 📝](https://componentry.design/components/input)
 * @experimental
 */

export const Input = ({
  children
}) => {
  /**
   * Guid instance property will be uniquely assigned once for each input
   * instance, this unique id is then passed to all children through context
   * where it can be used to wire together aria attributes
   */
  const {
    current: guid
  } = useRef(nanoid());
  return /*#__PURE__*/React.createElement(InputCtx.Provider, {
    value: {
      guid
    }
  }, children);
};
Input.displayName = 'Input'; // --- Description subcomponent ---

Input.Description = staticComponent('InputDescription'); // --- Error subcomponent ---

Input.Error = staticComponent('InputError'); // --- Field subcomponent ---

Input.Field = function InputField(props) {
  const ctx = useContext(InputCtx);
  assertContext(ctx);
  return element('InputField', {
    as: 'input',
    type: 'text',
    id: ctx.guid,
    // aria -> htmlFor
    ...useTheme('InputField'),
    ...props
  });
};

Input.Field.displayName = 'InputField'; // --- Label subcomponent ---

Input.Label = function InputLabel(props) {
  const ctx = useContext(InputCtx);
  assertContext(ctx);
  return element('InputLabel', {
    as: 'label',
    htmlFor: ctx.guid,
    // aria -> id
    ...useTheme('InputLabel'),
    ...props
  });
};

Input.Label.displayName = 'InputLabel'; // --------------------------------------------------------
// Utils

/**
 * Utility asserts ctx presence for safe access
 */

function assertContext(ctx) {
  if (!ctx) throw new Error('Input context cannot be used outside of Input component');
}