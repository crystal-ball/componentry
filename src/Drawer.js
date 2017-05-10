/* eslint-disable  react/prop-types */
import generateContainer from './toggleable/generate-container';
const Container = generateContainer('drawer');

/**
 * The `<Drawer>` component creates an expandable content drawer.
 *
 * @class Drawer
 * @constructor
 * @extends React.Component
 */
export default class Drawer extends Container {
  // Control arias used by subcomponents
  contentArias = { id: true }
  triggerArias = { controls: true, expanded: true }

  toggleActive = e => {
    let { active } = this.props;
    if (active === undefined) {
      active = this.state.active;
    }

    if (!active) {
      this.props.onActivate(this, e);
    } else {
      this.props.onDeactivate(this, e);
    }

    if (this.props.active === undefined) {
      // State is not controlled, update internal state
      this.setState({ active: !active });
    }

    if (!active) {
      this.props.onActivated(this, e);
    } else {
      this.props.onDeactivated(this, e);
    }
  }
}
