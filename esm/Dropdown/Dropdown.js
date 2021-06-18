import { activeContainerBuilder } from '../utils/active-container-component-builder';
import { activeActionBuilder } from '../utils/active-action-component-builder';
import { activeContentBuilder } from '../utils/active-content-component-builder';

/**
 * [Dropdown component 📝](https://componentry.design/components/dropdown)
 * @experimental
 */
export var Dropdown = activeContainerBuilder('Dropdown', {
  clickEvents: true,
  direction: 'bottom',
  escEvents: true
});
Dropdown.Action = activeActionBuilder('DropdownAction', {
  aria: {
    expanded: true,
    haspopup: true,
    id: true
  }
});
Dropdown.Content = activeContentBuilder('DropdownContent', {
  aria: {
    labelledby: true,
    hidden: true
  }
});
Dropdown.Item = activeActionBuilder('DropdownItem');