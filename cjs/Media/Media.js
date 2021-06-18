"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Media = Media;
exports.useMedia = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

/** Media Context */
var MediaCtx = /*#__PURE__*/(0, _react.createContext)(null); // Default breakpoint values

var sm = 0;
var md = 768;
var lg = 1250;
/**
 * Calculates the state for each breakpoint based on current window width
 * @param breakpoints Set of application breakpoint values
 */

function calcBreakpoints(breakpoints) {
  var _breakpoints$, _breakpoints$2, _breakpoints$3, _breakpoints$4;

  var w = window.innerWidth;
  return {
    sm: w < ((_breakpoints$ = breakpoints[1]) !== null && _breakpoints$ !== void 0 ? _breakpoints$ : md),
    md: w >= ((_breakpoints$2 = breakpoints[1]) !== null && _breakpoints$2 !== void 0 ? _breakpoints$2 : md) && w < ((_breakpoints$3 = breakpoints[2]) !== null && _breakpoints$3 !== void 0 ? _breakpoints$3 : lg),
    lg: w >= ((_breakpoints$4 = breakpoints[2]) !== null && _breakpoints$4 !== void 0 ? _breakpoints$4 : lg)
  };
}
/**
 * Uses `window.matchMedia` to listen for changes to window media queries and
 * updates breakpoint status on every change.
 * @param breakpoints Set of application breakpoints
 * @param updateBps Hook state update function updater
 */


function mountListeners(breakpoints, updateBps) {
  function setBreakpoints() {
    updateBps(calcBreakpoints(breakpoints));
  }

  breakpoints.forEach(function (bp) {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries#Receiving_query_notifications
    var mq = window.matchMedia("(min-width: ".concat(bp, "px)"));
    mq.addListener(setBreakpoints);
  });
}

/**
 * [Media component 📝](https://componentry.design/components/media)
 * @experimental
 */
function Media(_ref) {
  var children = _ref.children,
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? [sm, md, lg] : _ref$breakpoints;

  var _useState = (0, _react.useState)(calcBreakpoints(breakpoints)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      bps = _useState2[0],
      updateBps = _useState2[1]; // ℹ️ Call to mount media query listeners is wrapped in useEffect to prevent
  // mounting listeners multiple times. Currently we don't remove and remount
  // listeners if the breakpoints change, but that's a really edge case to
  // support...

  /* eslint-disable react-hooks/exhaustive-deps */


  (0, _react.useEffect)(function () {
    mountListeners(breakpoints, updateBps);
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/_react["default"].createElement(MediaCtx.Provider, {
    value: bps
  }, " ", children);
}

Media.displayName = 'Media';
/**
 * [Media hook 📝](https://componentry.design/components/media)
 */

var useMedia = function useMedia() {
  var media = (0, _react.useContext)(MediaCtx);
  if (!media) throw new Error('useMedia used outside of a <Media /> provider');
  return media;
};

exports.useMedia = useMedia;