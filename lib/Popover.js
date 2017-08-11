import Toggleable from './Toggleable';

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
export default class Popover extends Toggleable {
  elementType = 'popover';
  contentArias = { id: true, role: 'tooltip', hidden: true };
  triggerArias = { describedby: true };
}
