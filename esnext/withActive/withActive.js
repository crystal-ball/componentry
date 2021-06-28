import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import { func, number, shape, string } from 'prop-types';

/**
 * HOC passes active state props along with computed aria attributes. Component is
 * responsible for passing ACTIVE context as props and handling state transitions
 * when appropriate.
 */
export default (({
  defaultActive = false,
  transitionState = false
} = {}) => Wrapped => {
  var _class, _temp;

  return _temp = _class = class WithActive extends Component {
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
    static getDerivedStateFromProps(props) {
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


    constructor(props, context) {
      super(props); // Update bail out flag when context is not present

      _defineProperty(this, "invalidContext", false);

      _defineProperty(this, "handleStateUpdate", active => {
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
            this.setState({
              active
            }, () => {
              setTimeout(() => {
                this.setState({
                  visible: active
                });
              }, 15);
            });
          } else {
            this.setState({
              visible: active
            }, () => {
              setTimeout(() => {
                this.setState({
                  active
                });
              }, this.transitionDuration);
            });
          }
        } else {
          this.setState({
            active
          });
        }
      });

      if (!context.ACTIVE) this.invalidContext = true;
      const {
        transitionDuration = 300
      } = context.THEME || {}; // props has precedence to allow for single instance overrides, context
      // can be used for app wide configs, fall back to defaults

      this.transitionDuration = this.props.transitionDuration || transitionDuration;
      const initialActive = props.active !== undefined ? props.active : context.ACTIVE ? context.ACTIVE.getActive() : defaultActive;
      this.state = {
        active: initialActive,
        visible: initialActive
      };
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


    componentDidMount() {
      if (this.invalidContext) return;
      this.unsubscribe = this.context.ACTIVE.subscribe(active => {
        if (active !== this.state.active) this.handleStateUpdate(active);
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


    componentDidUpdate(prevProps, prevState) {
      // If component changed from active to inactive
      if (prevState.visible && !this.state.visible) {
        setTimeout(() => {
          this.setState({
            active: false
          });
        }, this.transitionDuration);
      } // If component changed from inactive to active


      if (!prevState.active && this.state.active) {
        if (transitionState) {
          setTimeout(() => {
            this.setState({
              visible: true
            });
          }, 15);
        }
      }
    }
    /**
     * Remove subscription on unmount!
     */


    componentWillUnmount() {
      if (this.unsubscribe) this.unsubscribe();
    } // Methods
    // ---------------------------------------------------------------------------

    /**
     * State updates are handled differently when transitionState is true, this
     * method handles appropriately updating based on options config.
     */


    // Render
    // ---------------------------------------------------------------------------
    render() {
      const {
        active,
        visible
      } = this.state;
      const passedState = transitionState ? {
        active,
        visible
      } : {
        active
      }; // ⚠️ NO CONTEXT RETURN
      // If context doesn't exist return wrapped with passed props and state only

      if (this.invalidContext) return /*#__PURE__*/React.createElement(Wrapped, _extends({}, this.props, passedState));
      const {
        activate,
        deactivate,
        guid
      } = this.context.ACTIVE;
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

  }, _defineProperty(_class, "Header", Wrapped.Header), _defineProperty(_class, "Body", Wrapped.Body), _defineProperty(_class, "Footer", Wrapped.Footer), _defineProperty(_class, "Title", Wrapped.Title), _defineProperty(_class, "displayName", `withActive${Wrapped.displayName || Wrapped.name}`), _defineProperty(_class, "contextTypes", {
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
});