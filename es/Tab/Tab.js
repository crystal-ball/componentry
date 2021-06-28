import withActive from '../withActive/withActive';
import activeContainer from '../component-factories/active-container';
import activeContent from '../component-factories/active-content';
import activeTrigger from '../component-factories/active-trigger';
import elementFactory from '../component-factories/element';
import { TabNav } from '../Nav/Nav';
var Content = activeContent({
  componentArias: {
    hidden: true,
    role: 'tabpanel'
  },
  classes: 'tab-pane',
  name: 'Tabcontent'
});
var withActiveContent = withActive()(Content);
var Trigger = activeTrigger({
  componentArias: {
    selected: true,
    role: 'tab'
  },
  classes: 'nav-link nav-item',
  name: 'TabTrigger',
  // Tabs can only activate, they never deactivate when clicked
  triggerType: 'activate',
  // Misc configs
  // Componentry uses <Button /> components for the tab triggers instead of
  // anchors like Bootstrap. Default the button to have the link theme style to
  // look like an anchor
  color: 'link'
});
var withActiveTrigger = withActive()(Trigger);
var ContentContainer = elementFactory('TabContentContainer', {
  className: 'tab-content'
});
var Tab = activeContainer({
  name: 'Tab',
  Content: withActiveContent,
  Trigger: withActiveTrigger
});
Tab.Content = withActiveContent;
Tab.Trigger = withActiveTrigger;
Tab.Nav = TabNav;
Tab.ContentContainer = ContentContainer;
export default Tab;