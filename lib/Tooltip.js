import Toggleable from './Toggleable';

/**
 * The Tooltip component creates an expandable info container on hover.
 *
 * TODO:
 * - Check body overflow on render and adjust width if needed
 * @class Tooltip
 * @constructor
 * @extends React.Component
 */
export default class Tooltip extends Toggleable {
  elementType = 'tooltip';
  contentArias = { id: true, role: 'tooltip', hidden: true };
  triggerArias = { describedby: true };
}
