import withActive from '../withActive/withActive';
import activeContainer from '../component-factories/active-container';
import activeContent from '../component-factories/active-content';
import activeTrigger from '../component-factories/active-trigger';

var makeDrawer = function makeDrawer(name) {
  var elem = name.slice(0, 1).toLocaleLowerCase() + name.slice(1);
  var Content = activeContent({
    element: elem,
    componentArias: {
      id: true,
      hidden: true
    },
    name: "".concat(name, "Content")
  });
  var withActiveContent = withActive()(Content);
  var Trigger = activeTrigger({
    element: elem,
    componentArias: {
      controls: true,
      expanded: true
    },
    name: "".concat(name, "Trigger")
  });
  var withActiveTrigger = withActive()(Trigger);
  var Drawer = activeContainer({
    element: elem,
    name: name,
    Content: withActiveContent,
    Trigger: withActiveTrigger
  });
  Drawer.Content = withActiveContent;
  Drawer.Trigger = withActiveTrigger;
  return Drawer;
};

var Drawer = makeDrawer('Drawer');
var Accordion = makeDrawer('Accordion');
export { Accordion };
export default Drawer;