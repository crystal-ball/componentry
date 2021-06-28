import withActive from '../withActive/withActive';
import activeContainer from '../component-factories/active-container';
import activeContent from '../component-factories/active-content';
import activeTrigger from '../component-factories/active-trigger';
var Content = activeContent({
  componentArias: {
    id: true,
    hidden: true
  },
  name: 'ActiveContent'
});
var withActiveContent = withActive()(Content);
var Trigger = activeTrigger({
  componentArias: {
    controls: true
  },
  name: 'ActiveTrigger'
});
var withActiveTrigger = withActive()(Trigger);
var Active = activeContainer({
  name: 'Active',
  escHandler: true,
  Content: withActiveContent,
  Trigger: withActiveTrigger
});
Active.Content = withActiveContent;
Active.Trigger = withActiveTrigger;
export default Active;