import Toggleable from './Toggleable';

/**
 * The Drawer component creates an expandable content drawer.
 *
 * TODO: Extend the drawer to accept multiple Target+Content groups to create an
 * accordion.
 *
 * @class Drawer
 * @constructor
 * @extends React.Component
 */
export default class Drawer extends Toggleable {
  elementType = 'drawer';
  contentArias = { id: true, hidden: true };
  triggerArias = { controls: true, expanded: true };
}
