"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _Theme = require("../Theme/Theme");

var _activeContainerComponentBuilder = require("../utils/active-container-component-builder");

var _activeActionComponentBuilder = require("../utils/active-action-component-builder");

var _activeContentComponentBuilder = require("../utils/active-content-component-builder");

var _classNames = require("../utils/class-names");

var _elementCreator = require("../utils/element-creator");

var _staticComponentBuilder = require("../utils/static-component-builder");

/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * [Tabs component 📝](https://componentry.design/components/tabs)
 * @experimental
 */
var Tabs = (0, _activeContainerComponentBuilder.activeContainerBuilder)('Tabs');
exports.Tabs = Tabs;

var ActionsContainer = function ActionsContainer(props) {
  return (0, _elementCreator.element)('TabsActionsContainer', (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
    role: 'tablist',
    componentCx: (0, _classNames.navClasses)('tabs-actions-container', props)
  }, (0, _Theme.useTheme)('TabsActionsContainer')), props));
};

ActionsContainer.displayName = 'TabsActionsContainer';
Tabs.ActionsContainer = ActionsContainer;
Tabs.Action = (0, _activeActionComponentBuilder.activeActionBuilder)('TabsAction', {
  aria: {
    selected: true,
    role: 'tab'
  },
  // Tabs can only activate, they never deactivate when clicked
  action: 'activate'
});
Tabs.ContentContainer = (0, _staticComponentBuilder.staticComponent)('TabsContentContainer');
Tabs.Content = (0, _activeContentComponentBuilder.activeContentBuilder)('TabsContent', {
  aria: {
    hidden: true,
    role: 'tabpanel'
  }
});