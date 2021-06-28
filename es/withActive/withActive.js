import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import { func, number, shape, string } from 'prop-types';

/**
 * HOC passes active state props along with computed aria attributes. Component is
 * responsible for passing ACTIVE context as props and handling state transitions
 * when appropriate.
 */
export default (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$defaultActive = _ref.defaultActive,
      defaultActive = _ref$defaultActive === void 0 ? false : _ref$defaultActive,
      _ref$transitionState = _ref.transitionState,
      transitionState = _ref$transitionState === void 0 ? false : _ref$transitionState;

  return function (Wrapped) {
    var _class, _temp;

    return _temp = _class = /*#__PURE__*/function (_Component) {
      _inherits(WithActive, _Component);

      var _super = _createSuper(WithActive);

      _createClass(WithActive, null, [{
        key: "getDerivedStateFromProps",
        // $FlowFixMe
        // $FlowFixMe
        // $FlowFixMe
        // $FlowFixMe

        /**
         * If this HOC is used outside the scope of a `withState` HOC, the ACTIVE
         * context will not exist. This prop makes it easy to skip context operations in
         * that case.
         */

        /**
         * If active is passed this is a controlled component and we always use that
         * value
         */
        value: function getDerivedStateFromProps(props) {
          if (props.active === undefined) return null;

          if (transitionState) {
            if (props.active) {
              return {
                active: props.active
              };
            }

            return {
              visible: props.active
            };
          }

          return {
            active: props.active
          };
        }
        /**
         * Set references to context and `transitionDuration` for simpler checks
         * throughout component lifecycle
         */

      }]);

      function WithActive(props, context) {
        var _this;

        _classCallCheck(this, WithActive);

        _this = _super.call(this, props); // Update bail out flag when context is not present

        _defineProperty(_assertThisInitialized(_this), "invalidContext", false);

        _defineProperty(_assertThisInitialized(_this), "handleStateUpdate", function (active) {
          /**
           * Handle: transitionState and order of transitions:
           *
           * When transition state is true, the visible and active state is
           * transitioned for opacity transitions:
           *
           * 1. When activating, set active true immediately for `display`, then
           *    wait 15ms before starting visibility transition otherwise browsers
           *    see the `display` and visibility transitions as the same event and
           *    the CSS transitions don't happen
           * 2. When deactivating, set visibility false to begin transition, after
           *    the visibility transition completes set active false for `display`
           *    changes
           */
          if (transitionState) {
            if (active) {
              _this.setState({
                active: active
              }, function () {
                setTimeout(function () {
                  _this.setState({
                    visible: active
                  });
                }, 15);
              });
            } else {
              _this.setState({
                visible: active
              }, function () {
                setTimeout(function () {
                  _this.setState({
                    active: active
                  });
                }, _this.transitionDuration);
              });
            }
          } else {
            _this.setState({
              active: active
            });
          }
        });

        if (!context.ACTIVE) _this.invalidContext = true;

        var _ref2 = context.THEME || {},
            _ref2$transitionDurat = _ref2.transitionDuration,
            transitionDuration = _ref2$transitionDurat === void 0 ? 300 : _ref2$transitionDurat; // props has precedence to allow for single instance overrides, context
        // can be used for app wide configs, fall back to defaults


        _this.transitionDuration = _this.props.transitionDuration || transitionDuration;
        var initialActive = props.active !== undefined ? props.active : context.ACTIVE ? context.ACTIVE.getActive() : defaultActive;
        _this.state = {
          active: initialActive,
          visible: initialActive
        };
        return _this;
      } // Hooks
      // ---------------------------------------------------------------------------

      /**
       * Ensure that state matches context before first render.
       *
       *  ‼️ This is now handled in the constructor. If props or context has an
       * active value it's used, otherwise we fallback to defaultActive
       */
      // componentWillMount() {
      //   if (this.props.active === undefined && this.invalidContext) return
      //   const active =
      //     this.props.active !== undefined
      //       ? this.props.active
      //       : this.context.ACTIVE.getActive()
      //   if (this.state.active !== active) this.setState({ active, visible: active })
      // }

      /**
       * Subscribe to active state updates on mount, trigger renders with setState
       * when state changes. Typically this won't be needed b/c parent component will
       * rerender on active state change. We still subscribe in case
       * `shouldComponentUpdate` on an intermediate component returns false.
       */


      _createClass(WithActive, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          if (this.invalidContext) return;
          this.unsubscribe = this.context.ACTIVE.subscribe(function (active) {
            if (active !== _this2.state.active) _this2.handleStateUpdate(active);
          });
        }
        /**
         * Handle directly passed active prop
         */
        // componentWillReceiveProps({ active }: Props) {
        //   // If active is not explicitly passed, it will always be undefined, we only
        //   // want to update state when a value is passed. See note on props, this is
        //   // not preferred, pass active to State container component
        //   if (active === undefined) return
        //   if (this.state.active !== active) this.handleStateUpdate(active)
        // }

      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          var _this3 = this;

          // If component changed from active to inactive
          if (prevState.visible && !this.state.visible) {
            setTimeout(function () {
              _this3.setState({
                active: false
              });
            }, this.transitionDuration);
          } // If component changed from inactive to active


          if (!prevState.active && this.state.active) {
            if (transitionState) {
              setTimeout(function () {
                _this3.setState({
                  visible: true
                });
              }, 15);
            }
          }
        }
        /**
         * Remove subscription on unmount!
         */

      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.unsubscribe) this.unsubscribe();
        } // Methods
        // ---------------------------------------------------------------------------

        /**
         * State updates are handled differently when transitionState is true, this
         * method handles appropriately updating based on options config.
         */

      }, {
        key: "render",
        // Render
        // ---------------------------------------------------------------------------
        value: function render() {
          var _this$state = this.state,
              active = _this$state.active,
              visible = _this$state.visible;
          var passedState = transitionState ? {
            active: active,
            visible: visible
          } : {
            active: active
          }; // ⚠️ NO CONTEXT RETURN
          // If context doesn't exist return wrapped with passed props and state only

          if (this.invalidContext) return /*#__PURE__*/React.createElement(Wrapped, _extends({}, this.props, passedState));
          var _this$context$ACTIVE = this.context.ACTIVE,
              activate = _this$context$ACTIVE.activate,
              deactivate = _this$context$ACTIVE.deactivate,
              guid = _this$context$ACTIVE.guid;
          return (
            /*#__PURE__*/
            // Only pass visible state if the consuming component has state transitions
            React.createElement(Wrapped, _extends({
              guid: guid,
              activate: activate,
              deactivate: deactivate
            }, passedState, this.props))
          );
        }
      }]);

      return WithActive;
    }(Component), _defineProperty(_class, "Header", Wrapped.Header), _defineProperty(_class, "Body", Wrapped.Body), _defineProperty(_class, "Footer", Wrapped.Footer), _defineProperty(_class, "Title", Wrapped.Title), _defineProperty(_class, "displayName", "withActive".concat(Wrapped.displayName || Wrapped.name)), _defineProperty(_class, "contextTypes", {
      ACTIVE: shape({
        activate: func,
        deactivate: func,
        getActive: func,
        guid: string,
        subscribe: func
      }),
      THEME: shape({
        transitionDuration: number
      })
    }), _temp;
  };
});