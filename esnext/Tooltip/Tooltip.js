import { activeContainerBuilder } from '../utils/active-container-component-builder';
import { activeActionBuilder } from '../utils/active-action-component-builder';
import { activeContentBuilder } from '../utils/active-content-component-builder';

/**
 * [Tooltip component 📝](https://componentry.design/components/tooltip)
 * @experimental
 */
export const Tooltip = activeContainerBuilder('Tooltip', {
  escEvents: true,
  mouseEvents: true
});
Tooltip.Action = activeActionBuilder('TooltipAction', {
  aria: {
    describedby: true
  }
});
Tooltip.Content = activeContentBuilder('TooltipContent', {
  aria: {
    id: true,
    role: 'tooltip',
    hidden: true
  },
  positioned: true
});