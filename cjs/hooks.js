"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVisible = exports.useNoScroll = exports.useActiveSrollReset = exports.useActive = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _activeContainerComponentBuilder = require("./utils/active-container-component-builder");

/**
 * Library hooks
 * @module
 */
// --------------------------------------------------------
// useActive hook
var useActive = function useActive() {
  return (0, _react.useContext)(_activeContainerComponentBuilder.ActiveCtx);
}; // --------------------------------------------------------
// useActiveScrollReset hook

/**
 * Set the scrolltop of passed reference node to 0 when active changes to
 * truthy. Used for resetting scroll position of components on activation.
 */


exports.useActive = useActive;

var useActiveSrollReset = function useActiveSrollReset(active, ref) {
  (0, _react.useLayoutEffect)(function () {
    if (active && ref.current) {
      // eslint-disable-next-line no-param-reassign
      ref.current.scrollTop = 0;
    }
  }, [active, ref]);
}; // --------------------------------------------------------
// useNoScroll hook

/**
 * Prevent document body scroll when active. Used for freezing app content when
 * overlay elements are activated
 */


exports.useActiveSrollReset = useActiveSrollReset;

var useNoScroll = function useNoScroll(active) {
  (0, _react.useEffect)(function () {
    var classList = window.document.body.classList;
    if (active) classList.add('no-scroll');else classList.remove('no-scroll'); // On unmount always remove scroll in case of events like routing away from
    // open modals

    return function cleanup() {
      classList.remove('no-scroll');
    };
  }, [active]);
}; // --------------------------------------------------------
// useVisible hook


exports.useNoScroll = useNoScroll;

/**
 * Hook handles transitioning display and opacity using active and visible
 * state using the following rules:
 *
 * - Show: Set active true to display element, then set visible true to
 *   transition element opacity using css transitions
 * - Hide: Set visible false to start element opacity using css transitions,
 *   then after transition duration set active false to set display none
 */
var useVisible = function useVisible(active) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var mounted = (0, _react.useRef)(true); // Track when the component is unmounted so that we can prevent setting state
  // after the timeouts if the component was unmounted

  (0, _react.useEffect)(function () {
    return function () {
      mounted.current = false;
    };
  }, []); // Visible state splits active and visible to allow css animations

  var _useState = (0, _react.useState)({
    active: active,
    visible: active
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      updateState = _useState2[1];

  (0, _react.useEffect)(function () {
    // ℹ️ Although the timeout used is very short, it's possible that a
    // component could be unmounted before it's run so we keep a reference to
    // the timeout that we can cleanup
    var timer;

    if (active) {
      // When activated immediately set active and transition to visible, this
      // will ensure the DOM element is rendered, and then add visible classes for
      // transitions on the next possible paint cycle
      updateState({
        active: true,
        visible: false
      });
      requestAnimationFrame(function () {
        if (mounted.current) updateState({
          active: true,
          visible: true
        });
      });
    } else {
      // When deactivated immediately set visible to false and transition active
      // after the transition duration, this allows the deactivation animations
      // to complete before toggling aria-hidden to true
      updateState({
        active: true,
        visible: false
      });
      timer = setTimeout(function () {
        timer = null;
        if (mounted.current) updateState({
          active: false,
          visible: false
        });
      }, duration);
    }

    return function cleanup() {
      if (timer) clearTimeout(timer);
    };
  }, [active, duration]);
  return state;
};

exports.useVisible = useVisible;