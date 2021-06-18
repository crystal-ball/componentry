"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

var _activeContainerComponentBuilder = require("../utils/active-container-component-builder");

var _activeActionComponentBuilder = require("../utils/active-action-component-builder");

var _activeContentComponentBuilder = require("../utils/active-content-component-builder");

/**
 * [Tooltip component 📝](https://componentry.design/components/tooltip)
 * @experimental
 */
var Tooltip = (0, _activeContainerComponentBuilder.activeContainerBuilder)('Tooltip', {
  escEvents: true,
  mouseEvents: true
});
exports.Tooltip = Tooltip;
Tooltip.Action = (0, _activeActionComponentBuilder.activeActionBuilder)('TooltipAction', {
  aria: {
    describedby: true
  }
});
Tooltip.Content = (0, _activeContentComponentBuilder.activeContentBuilder)('TooltipContent', {
  aria: {
    id: true,
    role: 'tooltip',
    hidden: true
  },
  positioned: true
});