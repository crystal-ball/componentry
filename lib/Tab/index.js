// @flow
import withState from '../HOCs/withState'
import withActive from '../HOCs/withActive'
import stateContainer from '../component-factories/state-container'
import stateContent from '../component-factories/state-content'
import stateTrigger from '../component-factories/state-trigger'
import elementFactory from '../component-factories/element-factory'

import { navFactory } from '../Nav'

/**
 * TODO:
 * - guid and id have to be passed for each trigger and content
 * - add className active when guid matches passed id somehow
 * - easier to override button props instead of passing color: link???
 * - Activate needs to check for role-tab and set id as active
 * - Use tabId for guid and id!!!
 */

const Tab = withState(stateContainer({}))

// $FlowFixMe
Tab.Nav = navFactory({ classes: 'nav-tabs', misc: { role: 'tablist' } })
// $FlowFixMe
Tab.ContentContainer = elementFactory({
  classes: 'tab-content',
  displayName: 'ContentContainer'
})

Tab.Content = withActive(
  stateContent({
    componentArias: { hidden: true, role: 'tabpanel' },
    classes: 'tab-pane'
  })
)

Tab.Trigger = withActive(
  stateTrigger({
    componentArias: { selected: true, role: 'tab' },
    classes: 'nav-link nav-item',
    misc: { color: 'link' }
  })
)

export default Tab