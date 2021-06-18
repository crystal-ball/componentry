"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = void 0;

var _activeContainerComponentBuilder = require("../utils/active-container-component-builder");

var _activeActionComponentBuilder = require("../utils/active-action-component-builder");

var _activeContentComponentBuilder = require("../utils/active-content-component-builder");

var _staticComponentBuilder = require("../utils/static-component-builder");

/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * [Popover component 📝](https://componentry.design/components/popover)
 * @experimental
 */
var Popover = (0, _activeContainerComponentBuilder.activeContainerBuilder)('Popover', {
  direction: 'right',
  escEvents: true,
  mouseEvents: true
});
exports.Popover = Popover;
Popover.Action = (0, _activeActionComponentBuilder.activeActionBuilder)('PopoverAction', {
  aria: {
    describedby: true
  }
});
Popover.Body = (0, _staticComponentBuilder.staticComponent)('PopoverBody');
Popover.Content = (0, _activeContentComponentBuilder.activeContentBuilder)('PopoverContent', {
  aria: {
    id: true,
    role: 'tooltip',
    hidden: true
  },
  positioned: true
});
Popover.Heading = (0, _staticComponentBuilder.staticComponent)('PopoverHeading', {
  as: 'h3'
});