/* eslint-disable  react/prop-types */
import generateContainer from './toggleable/generate-container';
const Container = generateContainer('tooltip');

import { getTextWidth } from './utils/dom';

/**
 * The Tooltip component creates an expandable info container on hover.
 *
 * TODO:
 * - Check body overflow on render and adjust width if needed
 * @class Tooltip
 * @constructor
 * @extends React.Component
 */
export default class Tooltip extends Container {
  // Control arias used by subcomponents
  contentArias = { id: true, role: 'tooltip' }
  triggerArias = { describedby: true }

  /**
   * Internal cache for width of tooltip content. Set after calculating content
   * width and reused on subsequent renders if content text has not changed.
   */
  contentWidth = null;
  /**
   * Internal cache for tooltip content. Used to check if the content has changed
   * between showings of tooltip.
   */
  content = null;

  /**
   * Handle calling user hooks and toggling internal state if component is not
   * controlled.
   */
  toggleActive = e => {
    let { active } = this.props;
    // Handle uncontrolled tooltip with internal state
    if (active === undefined) { active = this.state.active; }

    if (!active) {
      // Tooltip is not active, so it is transitioning to shown
      this.props.onActivate(this, e);

      // Position absolute tooltip is constrained by the parent width. Set tooltip
      // width to content width to overflow parent bounds
      const contentElement = document.getElementById(this.guid);
      const content = contentElement.innerText;
      this.content = content;

      if (content === this.content && this.contentWidth) {
        // If width has already been calculated and content has not changed, use
        // cached width for performance
        contentElement.style.width = `${this.contentWidth}px`;
      } else {
        // Get all styles of content element, set width and cache
        const styles = window.getComputedStyle(contentElement);
        // Get padding, font size and font family of content
        const width = getTextWidth(content, `${styles.fontSize} ${styles.fontFamily}`)
          + parseFloat(styles.paddingLeft)
          + parseFloat(styles.paddingRight)
          + 1;

        contentElement.style.width = `${width}px`;
        this.contentWidth = width;
      }
    } else {
      // Tooltip is active, so it is transitioning to hidden
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
