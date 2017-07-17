/* eslint-disable react/prop-types */
import { Component } from 'react';

import toggleable from './HOCs/toggleableHOC';
import ToggleContent from './ToggleContent';
import ToggleTrigger from './ToggleTrigger';
import { getTextWidth } from './utils/dom';

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
class Popover extends Component {

  constructor(props) {
    super(props);
    /**
     * Internal cache for width of tooltip content. Set after calculating content
     * width and reused on subsequent renders if content text has not changed.
     */
    this.contentWidth = null;
    /**
     * Internal cache for tooltip content. Used to check if the content has changed
     * between showings of tooltip.
     */
    this.content = null;

    this.toggleActive = this.toggleActive.bind(this);
  }

  /**
   * Handle calling user hooks and toggling internal state if component is not
   * controlled.
   */
  toggleActive(e) {
    let { active, onActivate, onActivated, onDeactivate, onDeactivated } = this.props;
    // Handle uncontrolled tooltip with internal state
    if (active === undefined) { active = this.state.active; }

    if (!active) {
      // Tooltip is not active, so it is transitioning to shown
      onActivate(this, e);

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
      onDeactivate(this, e);
    }

    if (this.props.active === undefined) {
      // State is not controlled, update internal state
      this.setState({ active: !active });
    }

    if (!active) {
      onActivated(this, e);
    } else {
      onDeactivated(this, e);
    }
  }
}

Popover.Content = ToggleContent;
Popover.Trigger = ToggleTrigger;

Popover = toggleable({
  contentArias: { id: true, role: 'tooltip', hidden: true },
  element: 'popover',
  triggerArias: { describedby: true },
})(Popover);

export default Popover;
