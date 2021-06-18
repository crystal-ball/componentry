/* eslint-disable @typescript-eslint/no-empty-interface */
import { activeContainerBuilder } from '../utils/active-container-component-builder';
import { activeActionBuilder } from '../utils/active-action-component-builder';
import { activeContentBuilder } from '../utils/active-content-component-builder';
import { staticComponent } from '../utils/static-component-builder';

/**
 * [Popover component 📝](https://componentry.design/components/popover)
 * @experimental
 */
export var Popover = activeContainerBuilder('Popover', {
  direction: 'right',
  escEvents: true,
  mouseEvents: true
});
Popover.Action = activeActionBuilder('PopoverAction', {
  aria: {
    describedby: true
  }
});
Popover.Body = staticComponent('PopoverBody');
Popover.Content = activeContentBuilder('PopoverContent', {
  aria: {
    id: true,
    role: 'tooltip',
    hidden: true
  },
  positioned: true
});
Popover.Heading = staticComponent('PopoverHeading', {
  as: 'h3'
});