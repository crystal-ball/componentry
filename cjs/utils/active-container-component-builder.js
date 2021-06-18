"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activeContainerBuilder = activeContainerBuilder;
exports.ActiveCtx = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _nanoid = require("nanoid");

var _Theme = require("../Theme/Theme");

var _classNames = require("./class-names");

var _dom = require("./dom");

var _elementCreator = require("./element-creator");

var _excluded = ["Action", "Content", "children", "direction", "size", "clickEvents", "escEvents", "mouseEvents", "active", "defaultActive", "activate", "deactivate", "onActivate", "onActivated", "onDeactivate", "onDeactivated"];

/** Active context */
var ActiveCtx = /*#__PURE__*/(0, _react.createContext)({
  active: false,
  guid: 'DEFAULT',
  activate: function activate() {},
  // eslint-disable-line @typescript-eslint/no-empty-function
  deactivate: function deactivate() {} // eslint-disable-line @typescript-eslint/no-empty-function

}); // --------------------------------------------------------
// Container builder

exports.ActiveCtx = ActiveCtx;

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
function activeContainerBuilder(displayName) {
  var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var baseCx = (0, _classNames.parseBaseCx)(displayName);

  function ActiveContainer(props) {
    var _componentCx;

    var _defaultProps$useThem = (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, defaultProps), (0, _Theme.useTheme)(displayName)), props),
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
        rest = (0, _objectWithoutProperties2["default"])(_defaultProps$useThem, _excluded);
    /**
     * Guid instance property will be uniquely assigned once for each component
     * instance, this unique id is then passed through context where it can be used
     * to bind together aria attributes. _(In testing use 'guid' for consistent
     * snapshots.)_
     */


    var _useRef = (0, _react.useRef)((0, _nanoid.nanoid)()),
        guid = _useRef.current;
    /**
     * Internally the container keeps a separate active state variable
     */


    var _useState = (0, _react.useState)(defaultActive),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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


    var handleDeactivate = (0, _react.useCallback)(function (evt) {
      if (deactivate) {
        deactivate(evt);
      } else {
        if (onDeactivate) onDeactivate(evt);
        updateActive(false);
        if (onDeactivated) onDeactivated(evt);
      }
    }, [deactivate, onDeactivate, onDeactivated]);
    /** Call deactivate if click event was not inside the element */

    var onClick = (0, _react.useCallback)(function (e) {
      if (!(0, _dom.closest)(e.target, guid)) handleDeactivate(e);
    }, [guid, handleDeactivate]);
    /** Call deactivate on keypress if `esc` (27) was pressed */

    var onKeydown = (0, _react.useCallback)(function (e) {
      if (e.which === 27 || e.code === 27) handleDeactivate(e);
    }, [handleDeactivate]);
    /** Handle adding/removing the component DOM event listeners */

    var updateEventListeners = (0, _react.useCallback)(function (updateType) {
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

    (0, _react.useEffect)(function () {
      if (active !== undefined) updateActive(active);
    }, [active]); // On every change of internal _active state, call updateEventListeners
    // with add/remove to reflect if the component is active

    (0, _react.useEffect)(function () {
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

    return /*#__PURE__*/_react["default"].createElement(ActiveCtx.Provider, {
      value: activeValues
    }, (0, _elementCreator.element)(displayName, (0, _objectSpread2["default"])({
      'data-id': guid,
      'componentCx': (_componentCx = {}, (0, _defineProperty2["default"])(_componentCx, "".concat(baseCx, "-").concat(size), size), (0, _defineProperty2["default"])(_componentCx, direction, direction), _componentCx),
      // For elements with mouse events we need to know when the mouse event
      // occurs on the parent element, not the action element
      'onMouseEnter': mouseEvents ? handleActivate : undefined,
      'onMouseLeave': mouseEvents ? handleDeactivate : undefined,
      // Handle render patterns
      'children': typeof children === 'function' ? children(activeValues) // Handle FaCC syntax
      :
      /*#__PURE__*/
      _react["default"].createElement(_react["default"].Fragment, null, Action && /*#__PURE__*/_react["default"].createElement(ActiveContainer.Action, null, Action), children, Content && /*#__PURE__*/_react["default"].createElement(ActiveContainer.Content, null, Content))
    }, rest)));
  }

  ActiveContainer.displayName = displayName;
  return ActiveContainer;
}