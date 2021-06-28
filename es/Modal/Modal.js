import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, Fragment } from 'react';
import { func, object, shape, string } from 'prop-types';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import withActive from '../withActive/withActive';
import elementFactory from '../component-factories/element';

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getChildContext", function () {
      return {
        ModalTitle: {
          guid: _this.guid
        },
        ModalHeader: {
          deactivate: _this.props.deactivate
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "guid", nanoid());

    _defineProperty(_assertThisInitialized(_this), "handleModalClick", function (evt) {
      var target = evt.target;

      if (target.classList && target.classList.contains('modal')) {
        _this.props.deactivate(evt);
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidUpdate",
    // Hooks
    // ---------------------------------------------------------------------------

    /**
     * Disable scrolling on the body when the modal is open to allow long modals to
     * scroll within the `.modal` container.
     */
    value: function componentDidUpdate(prevProps) {
      var active = this.props.active;
      var body = window.document.body;
      if (active && !prevProps.active) body.classList.add('no-scroll');
      if (!active && prevProps.active) body.classList.remove('no-scroll');
    }
    /**
     * Remove body scroll disabler in case modal is unmounted without closing
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.document.body.classList.remove('no-scroll');
    } // Methods
    // ---------------------------------------------------------------------------

    /**
     * The `.modal` container has a higher z-index than the `.modal-backdrop`, and
     * receives any clicks targeted at the backdrop. In order to close the modal on
     * any click of the backdrop, this handler checks if any click within the modal is
     * on the `.modal`, if the click is inside of the modal *CONTENT*, then the target
     * will be that content. If the target is outside of the modal content, the target
     * will be the `.modal` container and we know the user is clicking outside the
     * modal to close it.
     */

  }, {
    key: "render",
    // Render
    // ---------------------------------------------------------------------------
    value: function render() {
      var THEME = this.context.THEME || {};
      var componentCtx = THEME.Modal || {};

      var _componentCtx$this$pr = _objectSpread(_objectSpread({}, componentCtx), this.props),
          active = _componentCtx$this$pr.active,
          children = _componentCtx$this$pr.children,
          size = _componentCtx$this$pr.size,
          visible = _componentCtx$this$pr.visible;

      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
        "aria-hidden": active ? 'false' : 'true',
        "aria-labelledby": "".concat(this.guid),
        className: classNames('modal', 'fade', {
          show: visible
        }),
        role: "dialog",
        tabIndex: "-1",
        onClick: this.handleModalClick
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames('modal-dialog', {
          'modal-sm': size === 'small',
          'modal-lg': size === 'large'
        }),
        role: "document"
      }, /*#__PURE__*/React.createElement("div", {
        className: "modal-content"
      }, children))), /*#__PURE__*/React.createElement("div", {
        "aria-hidden": active ? 'false' : 'true',
        className: classNames('modal-backdrop', 'fade', {
          show: visible
        }),
        role: "presentation"
      }));
    }
  }]);

  return Modal;
}(Component);

_defineProperty(Modal, "Body", elementFactory('ModalBody', {
  className: 'modal-body'
}));

_defineProperty(Modal, "Footer", elementFactory('ModalFooter', {
  className: 'modal-footer'
}));

_defineProperty(Modal, "Header", elementFactory('ModalHeader', function (_ref, ctx) {
  var children = _ref.children,
      Close = _ref.Close,
      props = _objectWithoutProperties(_ref, ["children", "Close"]);

  return _objectSpread({
    className: 'modal-header',
    children: /*#__PURE__*/React.createElement(Fragment, null, children, Close && /*#__PURE__*/React.createElement(Close, {
      onClick: ctx.ModalHeader.deactivate
    }))
  }, props);
}));

_defineProperty(Modal, "Title", elementFactory('ModalTitle', function (props, ctx) {
  return _objectSpread({
    tag: 'h4',
    id: ctx.ModalTitle.guid,
    className: 'modal-title'
  }, props);
}));

_defineProperty(Modal, "displayName", 'Modal');

_defineProperty(Modal, "contextTypes", {
  THEME: shape({
    Modal: object
  })
});

_defineProperty(Modal, "childContextTypes", {
  ModalTitle: shape({
    guid: string
  }),
  ModalHeader: shape({
    deactivate: func
  })
});

export default withActive({
  transitionState: true
})(Modal);