import withActive from '../withActive/withActive';
import activeContainer from '../component-factories/active-container';
import activeContent from '../component-factories/active-content';
import activeTrigger from '../component-factories/active-trigger';
const Content = activeContent({
  componentArias: {
    labelledby: true,
    hidden: true
  },
  element: 'dropdown',
  name: 'DropdownContent'
});
const withActiveContent = withActive()(Content);
const Trigger = activeTrigger({
  element: 'dropdown',
  componentArias: {
    expanded: true,
    haspopup: true,
    id: true
  },
  name: 'DropdownTrigger'
});
const withActiveTrigger = withActive()(Trigger);
const Item = activeTrigger({
  // Suppress the default btn classes, the .dropdown-item classes have all styles
  // needed for button items
  baseButton: true,
  classes: 'dropdown-item',
  componentArias: {},
  name: 'DropdownItem'
});
const DropdownItem = withActive()(Item);
const Dropdown = activeContainer({
  Content: withActiveContent,
  Trigger: withActiveTrigger,
  defaultDirection: 'bottom',
  element: 'dropdown',
  escHandler: true,
  externalClickHandler: true,
  name: 'Dropdown'
});
Dropdown.Content = withActiveContent;
Dropdown.Trigger = withActiveTrigger;
Dropdown.Item = DropdownItem;
/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */

export default Dropdown;