"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Active = void 0;

var _activeContainerComponentBuilder = require("../utils/active-container-component-builder");

var _activeActionComponentBuilder = require("../utils/active-action-component-builder");

var _activeContentComponentBuilder = require("../utils/active-content-component-builder");

/**
 * [Active component 📝](https://componentry.design/components/active)
 * @experimental
 */
var Active = (0, _activeContainerComponentBuilder.activeContainerBuilder)('Active', {
  escEvents: true
});
exports.Active = Active;
Active.Action = (0, _activeActionComponentBuilder.activeActionBuilder)('ActiveAction', {
  aria: {
    controls: true
  }
});
Active.Content = (0, _activeContentComponentBuilder.activeContentBuilder)('ActiveContent', {
  aria: {
    id: true,
    hidden: true
  }
});