/* eslint-disable react/prop-types */
import { Component } from 'react';

import toggleable from './HOCs/toggleableHOC';
import ToggleContent from './ToggleContent';
import ToggleTrigger from './ToggleTrigger';

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
class Drawer extends Component {
  constructor(props) {
    super(props);
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(e) {
    const { onActivate, onActivated, onDeactivate, onDeactivated } = this.props;
    let { active } = this.props;
    // Handle uncontrolled drawer
    if (active === undefined) {
      active = this.state.active;
    }

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

Drawer.Content = ToggleContent;
Drawer.Trigger = ToggleTrigger;

const toggleableDrawer = toggleable({
  contentArias: { id: true, hidden: true },
  elementType: 'drawer',
  triggerArias: { controls: true, expanded: true }
})(Drawer);

export default toggleableDrawer;
