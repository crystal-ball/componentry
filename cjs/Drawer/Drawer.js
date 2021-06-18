"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = void 0;

var _activeContainerComponentBuilder = require("../utils/active-container-component-builder");

var _activeActionComponentBuilder = require("../utils/active-action-component-builder");

var _activeContentComponentBuilder = require("../utils/active-content-component-builder");

/**
 * [Drawer component 📝](https://componentry.design/components/drawer)
 * @experimental
 */
var Drawer = (0, _activeContainerComponentBuilder.activeContainerBuilder)('Drawer');
exports.Drawer = Drawer;
Drawer.Action = (0, _activeActionComponentBuilder.activeActionBuilder)('DrawerAction', {
  aria: {
    controls: true,
    expanded: true
  }
});
Drawer.Content = (0, _activeContentComponentBuilder.activeContentBuilder)('DrawerContent', {
  aria: {
    id: true,
    hidden: true
  }
});