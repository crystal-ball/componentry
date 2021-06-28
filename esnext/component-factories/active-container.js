import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
class ActiveState {
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
  constructor(defaultActive) {
    _defineProperty(this, "active", false);

    _defineProperty(this, "subscriptions", []);

    _defineProperty(this, "getActive", () => this.active);

    _defineProperty(this, "setActive", active => {
      // Don't update if there isn't a change
      if (this.active !== active) {
        this.active = active;
        this.subscriptions.forEach(subscription => subscription(active));
      }
    });

    _defineProperty(this, "subscribe", subscription => {
      const {
        subscriptions
      } = this;
      subscriptions.push(subscription); // Method will remove the subscription from the active list when called

      return () => {
        this.subscriptions = subscriptions.filter(item => item !== subscription);
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


}

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
export default (({
  Content,
  Trigger,
  defaultDirection,
  element,
  escHandler,
  externalClickHandler,
  mouseEvents,
  name
}) => {
  var _class, _temp;

  return _temp = _class = class StateContainer extends Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "activeState", new ActiveState(this.props.defaultActive));

      _defineProperty(this, "guid", process.env.NODE_ENV === 'test' ? 'guid' : nanoid());

      _defineProperty(this, "getChildContext", () => ({
        ACTIVE: {
          activate: this.handleActivate,
          deactivate: this.handleDeactivate,
          getActive: this.activeState.getActive,
          guid: this.guid,
          subscribe: this.activeState.subscribe
        }
      }));

      _defineProperty(this, "clickHandler", e => {
        if (!closest(e.target, this.guid)) this.handleDeactivate(e);
      });

      _defineProperty(this, "keyHandler", e => {
        if (e.which === 27) this.handleDeactivate(e);
      });

      _defineProperty(this, "removeEventListeners", () => {
        if (escHandler) {
          document.removeEventListener('keydown', this.keyHandler);
        }

        if (externalClickHandler) {
          document.removeEventListener('mouseup', this.clickHandler);
          document.removeEventListener('touchend', this.clickHandler);
        }
      });

      _defineProperty(this, "handleActivate", e => {
        const {
          onActivate,
          activate,
          onActivated
        } = this.props;
        if (onActivate) onActivate(e, this);

        if (activate) {
          activate(e, this);
        } else {
          // Elements that track an active string id set the id as the target value,
          // if it's present use it otherwise use boolean.
          // $FlowFixMe
          this.activeState.setActive(e.target.value || true);
        }

        if (onActivated) onActivated(e, this);
      });

      _defineProperty(this, "handleDeactivate", e => {
        const {
          onDeactivate,
          deactivate,
          onDeactivated
        } = this.props;
        if (onDeactivate) onDeactivate(e, this);

        if (deactivate) {
          deactivate(e, this);
        } else {
          this.activeState.setActive(false);
        }

        if (onDeactivated) onDeactivated(e, this);
      });
    }

    /**
     * Subscribe to active changes on mount. When active changes setup or remove any
     * configured special listeners for events like pressing `esc` or clicking
     * outside the component. For FaCC usage, force a render to ensure exposed
     * `active` value updates.
     */
    componentDidMount() {
      // NOTE: the subscribe callback will only be called when active ∆, so we don't
      // need to safety check for that here
      this.unsubscribe = this.activeState.subscribe(active => {
        if (active) {
          // Activation: Handle attaching activation listeners for special close
          // events
          if (escHandler) {
            // Add a keydown listener to handle pressing `esc`
            document.addEventListener('keydown', this.keyHandler);
          }

          if (externalClickHandler) {
            // Add click+touch listener to handle clicking outside component
            document.addEventListener('mouseup', this.clickHandler);
            document.addEventListener('touchend', this.clickHandler);
          }
        } else {
          // Deactivation: Handle removing listeners added in activation
          this.removeEventListeners();
        } // When component is used with FaCC, force a rerender so that exposed
        // 'active' value updates


        if (typeof this.props.children === 'function') this.forceUpdate();
      });
    }
    /**
     * When `active` is passed as a prop component is the 'controlled' type and we
     * update the internal active class anytime it changes.
     */


    componentDidUpdate({
      active
    }) {
      if (active !== undefined) this.activeState.setActive(active);
    }
    /**
     * Remove subscription on unmount!
     */


    componentWillUnmount() {
      this.unsubscribe();
      this.removeEventListeners();
    } // Methods
    // ---------------------------------------------------------------------------

    /**
     * Call deactivate if click event was not inside the element
     */


    // Render
    // ---------------------------------------------------------------------------
    render() {
      const THEME = this.context.THEME || {};
      const componentCtx = THEME[name] || {};
      const {
        Content: ContentProp,
        Trigger: TriggerProp,
        // $FlowFixMe
        as,
        children,
        className,
        direction,
        // YOU SHALL NOT PASS 🙅
        active,
        activate,
        deactivate,
        defaultActive,
        onActivate,
        onActivated,
        onDeactivate,
        onDeactivated,
        ...rest
      } = { ...componentCtx,
        ...this.props
      }; // When `State` is used with FaCC pattern, call func with state and change
      // methods

      if (typeof children === 'function') return children({
        active: this.activeState.getActive(),
        activate: this.handleActivate,
        deactivate: this.handleDeactivate,
        guid: this.guid
      }); // In component usage component will only render during initial mount, changes
      // to the active state are communicated by subscribing!

      return createElement(as || 'div', {
        'data-test': element ? `${element}-container` : undefined,
        'data-id': this.guid,
        className: classNames(element, componentCtx.className, className, direction || defaultDirection) || undefined,
        // For elements with mouse events we need to know when the mouse event
        // occurs on the parent element, not the trigger element
        onMouseEnter: mouseEvents ? this.handleActivate : undefined,
        onMouseLeave: mouseEvents ? this.handleDeactivate : undefined,
        ...rest
      }, // If shorthand values for Trigger/Content were passed in props, render
      // subcomponents with prop as children
      TriggerProp && /*#__PURE__*/React.createElement(Trigger, null, TriggerProp), children || null, ContentProp && /*#__PURE__*/React.createElement(Content, null, ContentProp));
    }

  }, _defineProperty(_class, "displayName", name), _defineProperty(_class, "contextTypes", {
    THEME: shape({
      [name]: object
    })
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