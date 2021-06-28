import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, createElement } from 'react';
import { func, object, shape, string } from 'prop-types';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { closest } from '../utils/dom';

/**
 * Class handles managing an `active` state and exposes a subscribe callback for
 * listening for changes to `active`. It is used as an instance property for each
 * active container component to create a scoped `active`.
 *
 * Design heavily borrowed from https://github.com/ReactTraining/react-broadcast
 */
var ActiveState =
/**
 * The active state can be a string or a boolean. Booleans are used for elements
 * with a singular show/hide, strings for elements that coordinate multiple
 * show/hide elements.
 */

/**
 * Each element tracks any subscribers that are notified when the active state
 * changes.
 */

/**
 * Constructor accepts an optional `defaultActive` for creating components with
 * specified initial state.
 */
function ActiveState(defaultActive) {
  var _this = this;

  _classCallCheck(this, ActiveState);

  _defineProperty(this, "active", false);

  _defineProperty(this, "subscriptions", []);

  _defineProperty(this, "getActive", function () {
    return _this.active;
  });

  _defineProperty(this, "setActive", function (active) {
    // Don't update if there isn't a change
    if (_this.active !== active) {
      _this.active = active;

      _this.subscriptions.forEach(function (subscription) {
        return subscription(active);
      });
    }
  });

  _defineProperty(this, "subscribe", function (subscription) {
    var subscriptions = _this.subscriptions;
    subscriptions.push(subscription); // Method will remove the subscription from the active list when called

    return function () {
      _this.subscriptions = subscriptions.filter(function (item) {
        return item !== subscription;
      });
    };
  });

  if (defaultActive !== undefined) this.active = defaultActive;
}
/**
 * Returns the current active value. _(It's important to access this method
 * through context instead of setting the active value on context b/c state is a
 * primitive and assigning it in `getContext` will only copy the initial value,
 * and subsequent access will be stale.)_
 */
;

/**
 * Factory returns custom `<Active />` components defined by the options. Active
 * components are responsible for:
 *
 * 1. Creating a scoped `active` value (type boolean for single set of
 *    trigger+content, string for set of triggers+content)
 * 2. Exposing internal `activate` and`deactivate` methods for changing `active`
 *    state
 * 3. On `active` change add or remove configured event listeners
 *
 * NOTE: The `handleActivate` and `handleDeactivate` methods are passed through
 * context as the `activate` and `deactivate` handlers for subcomponents to _always_
 * use. This ensures that we can always hook into the change events for internal
 * needs like setting or removing special event listeners.
 */
export default (function (_ref) {
  var _class, _temp;

  var Content = _ref.Content,
      Trigger = _ref.Trigger,
      defaultDirection = _ref.defaultDirection,
      element = _ref.element,
      escHandler = _ref.escHandler,
      externalClickHandler = _ref.externalClickHandler,
      mouseEvents = _ref.mouseEvents,
      name = _ref.name;
  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(StateContainer, _Component);

    var _super = _createSuper(StateContainer);

    function StateContainer() {
      var _this2;

      _classCallCheck(this, StateContainer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this2 = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this2), "activeState", new ActiveState(_this2.props.defaultActive));

      _defineProperty(_assertThisInitialized(_this2), "guid", process.env.NODE_ENV === 'test' ? 'guid' : nanoid());

      _defineProperty(_assertThisInitialized(_this2), "getChildContext", function () {
        return {
          ACTIVE: {
            activate: _this2.handleActivate,
            deactivate: _this2.handleDeactivate,
            getActive: _this2.activeState.getActive,
            guid: _this2.guid,
            subscribe: _this2.activeState.subscribe
          }
        };
      });

      _defineProperty(_assertThisInitialized(_this2), "clickHandler", function (e) {
        if (!closest(e.target, _this2.guid)) _this2.handleDeactivate(e);
      });

      _defineProperty(_assertThisInitialized(_this2), "keyHandler", function (e) {
        if (e.which === 27) _this2.handleDeactivate(e);
      });

      _defineProperty(_assertThisInitialized(_this2), "removeEventListeners", function () {
        if (escHandler) {
          document.removeEventListener('keydown', _this2.keyHandler);
        }

        if (externalClickHandler) {
          document.removeEventListener('mouseup', _this2.clickHandler);
          document.removeEventListener('touchend', _this2.clickHandler);
        }
      });

      _defineProperty(_assertThisInitialized(_this2), "handleActivate", function (e) {
        var _this2$props = _this2.props,
            onActivate = _this2$props.onActivate,
            activate = _this2$props.activate,
            onActivated = _this2$props.onActivated;
        if (onActivate) onActivate(e, _assertThisInitialized(_this2));

        if (activate) {
          activate(e, _assertThisInitialized(_this2));
        } else {
          // Elements that track an active string id set the id as the target value,
          // if it's present use it otherwise use boolean.
          // $FlowFixMe
          _this2.activeState.setActive(e.target.value || true);
        }

        if (onActivated) onActivated(e, _assertThisInitialized(_this2));
      });

      _defineProperty(_assertThisInitialized(_this2), "handleDeactivate", function (e) {
        var _this2$props2 = _this2.props,
            onDeactivate = _this2$props2.onDeactivate,
            deactivate = _this2$props2.deactivate,
            onDeactivated = _this2$props2.onDeactivated;
        if (onDeactivate) onDeactivate(e, _assertThisInitialized(_this2));

        if (deactivate) {
          deactivate(e, _assertThisInitialized(_this2));
        } else {
          _this2.activeState.setActive(false);
        }

        if (onDeactivated) onDeactivated(e, _assertThisInitialized(_this2));
      });

      return _this2;
    }

    _createClass(StateContainer, [{
      key: "componentDidMount",

      /**
       * Subscribe to active changes on mount. When active changes setup or remove any
       * configured special listeners for events like pressing `esc` or clicking
       * outside the component. For FaCC usage, force a render to ensure exposed
       * `active` value updates.
       */
      value: function componentDidMount() {
        var _this3 = this;

        // NOTE: the subscribe callback will only be called when active ∆, so we don't
        // need to safety check for that here
        this.unsubscribe = this.activeState.subscribe(function (active) {
          if (active) {
            // Activation: Handle attaching activation listeners for special close
            // events
            if (escHandler) {
              // Add a keydown listener to handle pressing `esc`
              document.addEventListener('keydown', _this3.keyHandler);
            }

            if (externalClickHandler) {
              // Add click+touch listener to handle clicking outside component
              document.addEventListener('mouseup', _this3.clickHandler);
              document.addEventListener('touchend', _this3.clickHandler);
            }
          } else {
            // Deactivation: Handle removing listeners added in activation
            _this3.removeEventListeners();
          } // When component is used with FaCC, force a rerender so that exposed
          // 'active' value updates


          if (typeof _this3.props.children === 'function') _this3.forceUpdate();
        });
      }
      /**
       * When `active` is passed as a prop component is the 'controlled' type and we
       * update the internal active class anytime it changes.
       */

    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(_ref2) {
        var active = _ref2.active;
        if (active !== undefined) this.activeState.setActive(active);
      }
      /**
       * Remove subscription on unmount!
       */

    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unsubscribe();
        this.removeEventListeners();
      } // Methods
      // ---------------------------------------------------------------------------

      /**
       * Call deactivate if click event was not inside the element
       */

    }, {
      key: "render",
      // Render
      // ---------------------------------------------------------------------------
      value: function render() {
        var THEME = this.context.THEME || {};
        var componentCtx = THEME[name] || {};

        var _componentCtx$this$pr = _objectSpread(_objectSpread({}, componentCtx), this.props),
            ContentProp = _componentCtx$this$pr.Content,
            TriggerProp = _componentCtx$this$pr.Trigger,
            as = _componentCtx$this$pr.as,
            children = _componentCtx$this$pr.children,
            className = _componentCtx$this$pr.className,
            direction = _componentCtx$this$pr.direction,
            active = _componentCtx$this$pr.active,
            activate = _componentCtx$this$pr.activate,
            deactivate = _componentCtx$this$pr.deactivate,
            defaultActive = _componentCtx$this$pr.defaultActive,
            onActivate = _componentCtx$this$pr.onActivate,
            onActivated = _componentCtx$this$pr.onActivated,
            onDeactivate = _componentCtx$this$pr.onDeactivate,
            onDeactivated = _componentCtx$this$pr.onDeactivated,
            rest = _objectWithoutProperties(_componentCtx$this$pr, ["Content", "Trigger", "as", "children", "className", "direction", "active", "activate", "deactivate", "defaultActive", "onActivate", "onActivated", "onDeactivate", "onDeactivated"]); // When `State` is used with FaCC pattern, call func with state and change
        // methods


        if (typeof children === 'function') return children({
          active: this.activeState.getActive(),
          activate: this.handleActivate,
          deactivate: this.handleDeactivate,
          guid: this.guid
        }); // In component usage component will only render during initial mount, changes
        // to the active state are communicated by subscribing!

        return createElement(as || 'div', _objectSpread({
          'data-test': element ? "".concat(element, "-container") : undefined,
          'data-id': this.guid,
          className: classNames(element, componentCtx.className, className, direction || defaultDirection) || undefined,
          // For elements with mouse events we need to know when the mouse event
          // occurs on the parent element, not the trigger element
          onMouseEnter: mouseEvents ? this.handleActivate : undefined,
          onMouseLeave: mouseEvents ? this.handleDeactivate : undefined
        }, rest), // If shorthand values for Trigger/Content were passed in props, render
        // subcomponents with prop as children
        TriggerProp && /*#__PURE__*/React.createElement(Trigger, null, TriggerProp), children || null, ContentProp && /*#__PURE__*/React.createElement(Content, null, ContentProp));
      }
    }]);

    return StateContainer;
  }(Component), _defineProperty(_class, "displayName", name), _defineProperty(_class, "contextTypes", {
    THEME: shape(_defineProperty({}, name, object))
  }), _defineProperty(_class, "childContextTypes", {
    // Context cannot change! Passed context is a wrapper that should not change.
    // Object is a 'constant', only the internal values can change.
    ACTIVE: shape({
      activate: func,
      deactivate: func,
      getActive: func,
      guid: string,
      subscribe: func
    })
  }), _temp;
});