import withActive from '../withActive/withActive';
import activeContainer from '../component-factories/active-container';
import activeContent from '../component-factories/active-content';
import activeTrigger from '../component-factories/active-trigger';
var Content = activeContent({
  componentArias: {
    id: true,
    role: 'tooltip',
    hidden: true
  },
  element: 'tooltip',
  name: 'TooltipContent',
  popper: true
});
var withActiveContent = withActive()(Content);
var Trigger = activeTrigger({
  element: 'tooltip',
  componentArias: {
    describedby: true,
    subscribe: false
  },
  name: 'TooltipTrigger'
});
var withActiveTrigger = withActive()(Trigger);
var Tooltip = activeContainer({
  element: 'tooltip',
  mouseEvents: true,
  name: 'Tooltip',
  escHandler: true,
  Content: withActiveContent,
  Trigger: withActiveTrigger
});
Tooltip.Content = withActiveContent;
Tooltip.Trigger = withActiveTrigger;
/**
 * The Tooltip component creates an expandable info container on hover.
 *
 * TODO:
 * - Check body overflow on render and adjust width if needed
 * @class Tooltip
 * @constructor
 * @extends React.Component
 */

export default Tooltip;