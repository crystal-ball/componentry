"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activeActionBuilder = activeActionBuilder;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Theme = require("../Theme/Theme");

var _activeContainerComponentBuilder = require("./active-container-component-builder");

var _aria = require("./aria");

var _classNames = require("./class-names");

var _elementCreator = require("./element-creator");

var _excluded = ["guid"],
    _excluded2 = ["activeId", "as", "type", "variant", "children", "decoration", "active", "activate", "deactivate"];

/**
 * Factory returns custom `<Action />` components defined by the fn options.
 * Componentry sets up actions to be buttons styled as links by default, this
 * can be overridden by passing an as and type props for an anchor.
 */
function activeActionBuilder(displayName) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      action = _ref.action,
      _ref$aria = _ref.aria,
      aria = _ref$aria === void 0 ? {} : _ref$aria;

  var baseCx = (0, _classNames.parseBaseCx)(displayName);

  function ActiveAction(props) {
    var _useContext = (0, _react.useContext)(_activeContainerComponentBuilder.ActiveCtx),
        guid = _useContext.guid,
        activeCtx = (0, _objectWithoutProperties2["default"])(_useContext, _excluded);

    var _useTheme$activeCtx$p = (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)(displayName)), activeCtx), props),
        activeId = _useTheme$activeCtx$p.activeId,
        _useTheme$activeCtx$p2 = _useTheme$activeCtx$p.as,
        as = _useTheme$activeCtx$p2 === void 0 ? 'button' : _useTheme$activeCtx$p2,
        _useTheme$activeCtx$p3 = _useTheme$activeCtx$p.type,
        type = _useTheme$activeCtx$p3 === void 0 ? 'button' : _useTheme$activeCtx$p3,
        _useTheme$activeCtx$p4 = _useTheme$activeCtx$p.variant,
        variant = _useTheme$activeCtx$p4 === void 0 ? 'primary' : _useTheme$activeCtx$p4,
        children = _useTheme$activeCtx$p.children,
        decoration = _useTheme$activeCtx$p.decoration,
        active = _useTheme$activeCtx$p.active,
        activate = _useTheme$activeCtx$p.activate,
        deactivate = _useTheme$activeCtx$p.deactivate,
        rest = (0, _objectWithoutProperties2["default"])(_useTheme$activeCtx$p, _excluded2); // Handle determining whether to call activate or deactivate on click
    // 1. If an action type was passed, call that action handler always
    // 2. else if in a compound-active context check if this activeId is active
    // 3. else use opposite of active status


    var onClick;
    if (action) onClick = action === 'activate' ? activate : deactivate;else if (activeId) onClick = activeId === active ? deactivate : activate;else onClick = active ? deactivate : activate;
    return (0, _elementCreator.element)(displayName, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
      as: as,
      type: type
    }, (0, _aria.computeARIA)({
      active: active,
      activeId: activeId,
      guid: guid,
      type: 'action',
      aria: aria
    })), {}, {
      'componentCx': ["".concat(baseCx, "-").concat(variant), {
        // For compound-active contexts add an active class if activeIds match
        // (eg in tabs show which tab is selected)
        active: activeId && active === activeId
      }],
      onClick: onClick,
      // For compound-active contexts, the value attr is to expose the activeId
      'data-active-id': activeId,

      /* inputs cannot have children */
      'children': as === 'input' ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children, decoration)
    }, rest));
  }

  ActiveAction.displayName = displayName;
  return ActiveAction;
}