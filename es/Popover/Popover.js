import withActive from '../withActive/withActive';
import activeContainer from '../component-factories/active-container';
import activeContent from '../component-factories/active-content';
import activeTrigger from '../component-factories/active-trigger';
import elementFactory from '../component-factories/element';
var Content = activeContent({
  componentArias: {
    id: true,
    role: 'tooltip',
    hidden: true
  },
  element: 'popover',
  name: 'PopoverContent',
  popper: true
});
var withActiveContent = withActive()(Content);
var Trigger = activeTrigger({
  element: 'popover',
  componentArias: {
    describedby: true,
    subscribe: false
  },
  name: 'PopoverTrigger'
});
var withActiveTrigger = withActive()(Trigger);
var PopoverBody = elementFactory('PopoverBody', {
  className: 'popover-body'
});
var PopoverHeader = elementFactory('PopoverHeader', {
  className: 'popover-header',
  tag: 'h3'
});
var Popover = activeContainer({
  Content: withActiveContent,
  Trigger: withActiveTrigger,
  defaultDirection: 'right',
  element: 'popover',
  escHandler: true,
  mouseEvents: true,
  name: 'Popover'
});
Popover.Content = withActiveContent;
Popover.Trigger = withActiveTrigger;
Popover.Body = PopoverBody;
Popover.Header = PopoverHeader;
/**
 * The Tooltip component creates an expandable info container on hover.
 *
 * TODO:
 * - Check body overflow on render and adjust width if needed
 * - Dedupe Popover and Tooltip src files
 * - Ability to default configure link and button color for consuming app
 * - Match tooltip and popover tip styles and markup
 * @class Popover
 * @constructor
 * @extends React.Component
 */

export default Popover;