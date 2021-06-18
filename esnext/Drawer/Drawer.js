import { activeContainerBuilder } from '../utils/active-container-component-builder';
import { activeActionBuilder } from '../utils/active-action-component-builder';
import { activeContentBuilder } from '../utils/active-content-component-builder';

/**
 * [Drawer component 📝](https://componentry.design/components/drawer)
 * @experimental
 */
export const Drawer = activeContainerBuilder('Drawer');
Drawer.Action = activeActionBuilder('DrawerAction', {
  aria: {
    controls: true,
    expanded: true
  }
});
Drawer.Content = activeContentBuilder('DrawerContent', {
  aria: {
    id: true,
    hidden: true
  }
});