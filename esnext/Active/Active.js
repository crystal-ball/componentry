import { activeContainerBuilder } from '../utils/active-container-component-builder';
import { activeActionBuilder } from '../utils/active-action-component-builder';
import { activeContentBuilder } from '../utils/active-content-component-builder';

/**
 * [Active component 📝](https://componentry.design/components/active)
 * @experimental
 */
export const Active = activeContainerBuilder('Active', {
  escEvents: true
});
Active.Action = activeActionBuilder('ActiveAction', {
  aria: {
    controls: true
  }
});
Active.Content = activeContentBuilder('ActiveContent', {
  aria: {
    id: true,
    hidden: true
  }
});