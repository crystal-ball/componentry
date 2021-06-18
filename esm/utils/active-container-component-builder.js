import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["Action", "Content", "children", "direction", "size", "clickEvents", "escEvents", "mouseEvents", "active", "defaultActive", "activate", "deactivate", "onActivate", "onActivated", "onDeactivate", "onDeactivated"];
import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { useTheme } from '../Theme/Theme';
import { parseBaseCx } from './class-names';
import { closest } from './dom';
import { element } from './element-creator'; // --------------------------------------------------------
// Container context

/** Active context */
export var ActiveCtx = /*#__PURE__*/createContext({
  active: false,
  guid: 'DEFAULT',
  activate: function activate() {},
  // eslint-disable-line @typescript-eslint/no-empty-function
  deactivate: function deactivate() {} // eslint-disable-line @typescript-eslint/no-empty-function

}); // --------------------------------------------------------
// Container builder

/**
 * Factory returns custom `<Active />` components defined by the options. Active
 * components are responsible for:
 *
 * 1. Creating a scoped `active` value (type boolean for single set of
 *    action+content, string for set of actions+content).
 * 2. Exposing internal `activate` and`deactivate` methods for changing `active`
 *    state.
 * 3. On `active` change add or remove configured event listeners and fire
 *    change listeners.
 *
 * NOTE: The `handleActivate` and `handleDeactivate` methods are passed through
 * context as the `activate` and `deactivate` handlers for subcomponents to _always_
 * use. This ensures that we can always hook into the change events for internal
 * needs like setting or removing special event listeners.
 */
export function activeContainerBuilder(displayName) {
  var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var baseCx = parseBaseCx(displayName);

  function ActiveContainer(props) {
    var _componentCx;

    var _defaultProps$useThem = _objectSpread(_objectSpread(_objectSpread({}, defaultProps), useTheme(displayName)), props),
        Action = _defaultProps$useThem.Action,
        Content = _defaultProps$useThem.Content,
        children = _defaultProps$useThem.children,
        _defaultProps$useThem2 = _defaultProps$useThem.direction,
        direction = _defaultProps$useThem2 === void 0 ? '' : _defaultProps$useThem2,
        size = _defaultProps$useThem.size,
        _defaultProps$useThem3 = _defaultProps$useThem.clickEvents,
        clickEvents = _defaultProps$useThem3 === void 0 ? false : _defaultProps$useThem3,
        _defaultProps$useThem4 = _defaultProps$useThem.escEvents,
        escEvents = _defaultProps$useThem4 === void 0 ? false : _defaultProps$useThem4,
        _defaultProps$useThem5 = _defaultProps$useThem.mouseEvents,
        mouseEvents = _defaultProps$useThem5 === void 0 ? false : _defaultProps$useThem5,
        active = _defaultProps$useThem.active,
        _defaultProps$useThem6 = _defaultProps$useThem.defaultActive,
        defaultActive = _defaultProps$useThem6 === void 0 ? false : _defaultProps$useThem6,
        activate = _defaultProps$useThem.activate,
        deactivate = _defaultProps$useThem.deactivate,
        onActivate = _defaultProps$useThem.onActivate,
        onActivated = _defaultProps$useThem.onActivated,
        onDeactivate = _defaultProps$useThem.onDeactivate,
        onDeactivated = _defaultProps$useThem.onDeactivated,
        rest = _objectWithoutProperties(_defaultProps$useThem, _excluded);
    /**
     * Guid instance property will be uniquely assigned once for each component
     * instance, this unique id is then passed through context where it can be used
     * to bind together aria attributes. _(In testing use 'guid' for consistent
     * snapshots.)_
     */


    var _useRef = useRef(nanoid()),
        guid = _useRef.current;
    /**
     * Internally the container keeps a separate active state variable
     */


    var _useState = useState(defaultActive),
        _useState2 = _slicedToArray(_useState, 2),
        _active = _useState2[0],
        updateActive = _useState2[1]; // --------------------------------------------------------
    // Handlers

    /**
     * Internal activation handler (manages active state and fires change
     * listeners)
     */


    var handleActivate = activate || function _activate(e) {
      if (onActivate) onActivate(e); // Compound active elements pass along the active id with a data attr
      // fallback to boolean value if not present
      // @ts-ignore not sure how to type this yet

      updateActive(e.target.dataset.activeId || true);
      if (onActivated) onActivated(e);
    };
    /**
     * Internal deactivation handler (manages active state and fires change
     * listeners)
     */


    var handleDeactivate = useCallback(function (evt) {
      if (deactivate) {
        deactivate(evt);
      } else {
        if (onDeactivate) onDeactivate(evt);
        updateActive(false);
        if (onDeactivated) onDeactivated(evt);
      }
    }, [deactivate, onDeactivate, onDeactivated]);
    /** Call deactivate if click event was not inside the element */

    var onClick = useCallback(function (e) {
      if (!closest(e.target, guid)) handleDeactivate(e);
    }, [guid, handleDeactivate]);
    /** Call deactivate on keypress if `esc` (27) was pressed */

    var onKeydown = useCallback(function (e) {
      if (e.which === 27 || e.code === 27) handleDeactivate(e);
    }, [handleDeactivate]);
    /** Handle adding/removing the component DOM event listeners */

    var updateEventListeners = useCallback(function (updateType) {
      // TODO: how to type updateListener about without a type assertion
      var updateListener = "".concat(updateType, "EventListener");
      if (escEvents) document[updateListener]('keydown', onKeydown);

      if (clickEvents) {
        // TODO: are these the best events to listen to??
        document[updateListener]('mouseup', onClick);
        document[updateListener]('touchend', onClick);
      }
    }, [clickEvents, escEvents, onClick, onKeydown]); // --------------------------------------------------------
    // Effects
    // When active is passed as a prop, it should always be used as active state

    useEffect(function () {
      if (active !== undefined) updateActive(active);
    }, [active]); // On every change of internal _active state, call updateEventListeners
    // with add/remove to reflect if the component is active

    useEffect(function () {
      updateEventListeners(_active ? 'add' : 'remove');
      return function cleanup() {
        updateEventListeners('remove');
      };
    }, [_active, updateEventListeners]); // --------------------------------------------------------
    // Render

    var activeValues = {
      active: _active,
      activate: handleActivate,
      deactivate: handleDeactivate,
      guid: guid
    }; // TODO: only wrap elements with a `div` when the element needs it

    return /*#__PURE__*/React.createElement(ActiveCtx.Provider, {
      value: activeValues
    }, element(displayName, _objectSpread({
      'data-id': guid,
      'componentCx': (_componentCx = {}, _defineProperty(_componentCx, "".concat(baseCx, "-").concat(size), size), _defineProperty(_componentCx, direction, direction), _componentCx),
      // For elements with mouse events we need to know when the mouse event
      // occurs on the parent element, not the action element
      'onMouseEnter': mouseEvents ? handleActivate : undefined,
      'onMouseLeave': mouseEvents ? handleDeactivate : undefined,
      // Handle render patterns
      'children': typeof children === 'function' ? children(activeValues) // Handle FaCC syntax
      :
      /*#__PURE__*/
      React.createElement(React.Fragment, null, Action && /*#__PURE__*/React.createElement(ActiveContainer.Action, null, Action), children, Content && /*#__PURE__*/React.createElement(ActiveContainer.Content, null, Content))
    }, rest)));
  }

  ActiveContainer.displayName = displayName;
  return ActiveContainer;
}