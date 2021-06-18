"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _activeContainerComponentBuilder = require("../utils/active-container-component-builder");

var _activeActionComponentBuilder = require("../utils/active-action-component-builder");

var _activeContentComponentBuilder = require("../utils/active-content-component-builder");

/**
 * [Dropdown component 📝](https://componentry.design/components/dropdown)
 * @experimental
 */
var Dropdown = (0, _activeContainerComponentBuilder.activeContainerBuilder)('Dropdown', {
  clickEvents: true,
  direction: 'bottom',
  escEvents: true
});
exports.Dropdown = Dropdown;
Dropdown.Action = (0, _activeActionComponentBuilder.activeActionBuilder)('DropdownAction', {
  aria: {
    expanded: true,
    haspopup: true,
    id: true
  }
});
Dropdown.Content = (0, _activeContentComponentBuilder.activeContentBuilder)('DropdownContent', {
  aria: {
    labelledby: true,
    hidden: true
  }
});
Dropdown.Item = (0, _activeActionComponentBuilder.activeActionBuilder)('DropdownItem');