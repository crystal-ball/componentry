/* eslint-disable react/prop-types */
import { Component } from 'react';

import toggleable from './HOCs/toggleableHOC';
import ToggleContent from './ToggleContent';
import ToggleTrigger from './ToggleTrigger';

/**
 * The Drawer component creates an expandable content drawer.
 *
 * @class Drawer
 * @constructor
 * @extends React.Component
 */
@toggleable({
  contentArias: { id: true, hidden: true },
  element: 'drawer',
  triggerArias: { controls: true, expanded: true },
})
export default class Drawer extends Component {
  static Content = ToggleContent
  static Trigger = ToggleTrigger

  toggleActive = e => {
    let { active, onActivate, onActivated, onDeactivate, onDeactivated } = this.props;
    // Handle uncontrolled drawer
    if (active === undefined) { active = this.state.active; }

    if (!active) {
      onActivate(this, e);
    } else {
      onDeactivate(this, e);
    }

    if (this.props.active === undefined) {
      // Drawer is uncontrolled, update internal state
      // TODO: use callback version of setState for activated/deactivated
      this.setState({ active: !active });
    }

    if (!active) {
      onActivated(this, e);
    } else {
      onDeactivated(this, e);
    }
  }
}
