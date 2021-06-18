import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/* eslint-disable @typescript-eslint/no-empty-interface */
import { useTheme } from '../Theme/Theme';
import { activeContainerBuilder } from '../utils/active-container-component-builder';
import { activeActionBuilder } from '../utils/active-action-component-builder';
import { activeContentBuilder } from '../utils/active-content-component-builder';
import { navClasses } from '../utils/class-names';
import { element } from '../utils/element-creator';
import { staticComponent } from '../utils/static-component-builder';

/**
 * [Tabs component 📝](https://componentry.design/components/tabs)
 * @experimental
 */
export var Tabs = activeContainerBuilder('Tabs');

var ActionsContainer = function ActionsContainer(props) {
  return element('TabsActionsContainer', _objectSpread(_objectSpread({
    role: 'tablist',
    componentCx: navClasses('tabs-actions-container', props)
  }, useTheme('TabsActionsContainer')), props));
};

ActionsContainer.displayName = 'TabsActionsContainer';
Tabs.ActionsContainer = ActionsContainer;
Tabs.Action = activeActionBuilder('TabsAction', {
  aria: {
    selected: true,
    role: 'tab'
  },
  // Tabs can only activate, they never deactivate when clicked
  action: 'activate'
});
Tabs.ContentContainer = staticComponent('TabsContentContainer');
Tabs.Content = activeContentBuilder('TabsContent', {
  aria: {
    hidden: true,
    role: 'tabpanel'
  }
});