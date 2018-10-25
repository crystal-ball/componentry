import ActiveScreen from 'components/ComponentsScreen/Screens/Active.md'
import AlertsScreen from 'components/ComponentsScreen/Screens/Alerts.md'
import ButtonsScreen from 'components/ComponentsScreen/Screens/Buttons.md'
import BlockScreen from 'components/ComponentsScreen/Screens/Block.md'
import CardsScreen from 'components/ComponentsScreen/Screens/Cards.md'
import CloseScreen from 'components/ComponentsScreen/Screens/Close.md'
import DrawersScreen from 'components/ComponentsScreen/Screens/Drawers.md'
import DropdownsScreen from 'components/ComponentsScreen/Screens/Dropdowns.md'
import FlexScreen from 'components/ComponentsScreen/Screens/Flex.md'
import IconsScreen from 'components/ComponentsScreen/Screens/Icons.md'
import ListsScreen from 'components/ComponentsScreen/Screens/Lists.md'
import ModalsScreen from 'components/ComponentsScreen/Screens/Modals.md'
import NavsScreen from 'components/ComponentsScreen/Screens/Navs.md'
import PopoversScreen from 'components/ComponentsScreen/Screens/Popovers.md'
import TabsScreen from 'components/ComponentsScreen/Screens/Tabs.md'
import TooltipsScreen from 'components/ComponentsScreen/Screens/Tooltips.md'
import TypeScreen from 'components/ComponentsScreen/Screens/Type.md'
import FormsScreen from 'components/ComponentsScreen/Screens/Forms.md'

import ArchitectureScreen from 'GUIDES/Architecture.md'
import AccessibilityScreen from 'GUIDES/Accessibility.md'
import ComponentsScreen from 'GUIDES/Components.md'
import ThemingScreen from 'GUIDES/Theming.md'

const routesMap = {
  setup: { name: 'Setup', pathname: '/setup' },
  components: {
    name: 'Components',
    pathname: '/components',
    subRoutes: {
      active: { pathname: '/components/active', state: { name: 'Active' } },
      alerts: { pathname: '/components/alerts', state: { name: 'Alerts' } },
      block: { pathname: '/components/block', state: { name: 'Block' } },
      buttons: { pathname: '/components/buttons', state: { name: 'Buttons' } },
      cards: { pathname: '/components/cards', state: { name: 'Cards' } },
      close: { pathname: '/components/close', state: { name: 'Close' } },
      drawers: { pathname: '/components/drawers', state: { name: 'Drawers' } },
      dropdowns: {
        pathname: '/components/dropdowns',
        state: { name: 'Dropdowns' },
      },
      flex: { pathname: '/components/flex', state: { name: 'Flex' } },
      icons: { pathname: '/components/icons', state: { name: 'Icons' } },
      lists: { pathname: '/components/lists', state: { name: 'List Groups' } },
      modals: { pathname: '/components/modals', state: { name: 'Modals' } },
      navs: { pathname: '/components/navs', state: { name: 'Navs' } },
      popovers: { pathname: '/components/popovers', state: { name: 'Popovers' } },
      tabs: { pathname: '/components/tabs', state: { name: 'Tabs' } },
      tooltips: { pathname: '/components/tooltips', state: { name: 'Tooltips' } },
      type: { pathname: '/components/type', state: { name: 'Type' } },
      forms: { pathname: '/components/forms', state: { name: 'Forms' } },
    },
    screens: {
      active: ActiveScreen,
      alerts: AlertsScreen,
      block: BlockScreen,
      buttons: ButtonsScreen,
      cards: CardsScreen,
      close: CloseScreen,
      drawers: DrawersScreen,
      dropdowns: DropdownsScreen,
      flex: FlexScreen,
      icons: IconsScreen,
      lists: ListsScreen,
      modals: ModalsScreen,
      navs: NavsScreen,
      popovers: PopoversScreen,
      tabs: TabsScreen,
      tooltips: TooltipsScreen,
      type: TypeScreen,
      forms: FormsScreen,
    },
  },
  concepts: {
    name: 'Concepts',
    pathname: '/concepts',
    subRoutes: {
      accessibility: {
        pathname: '/concepts/accessibility',
        state: { name: 'A++ accessibility' },
      },
      theming: {
        pathname: '/concepts/theming',
        state: { name: 'Theme customization' },
      },
      components: {
        pathname: '/concepts/component-apis',
        state: { name: 'Component APIs' },
      },
      architecture: {
        pathname: '/concepts/architecture',
        state: { name: 'Componentry architecture' },
      },
    },
    screens: {
      accessibility: AccessibilityScreen,
      theming: ThemingScreen,
      components: ComponentsScreen,
      architecture: ArchitectureScreen,
    },
  },
}

const routesMapToArray = routeMap => {
  const routesArray = []
  Object.keys(routeMap).forEach(route => {
    routesArray.push({ ...routeMap[route], id: route })
  })

  return routesArray
}

export type Route = {
  id: string,
  pathname: string,
  state: {
    name: string,
  },
}

export const componentRoutes = routesMapToArray(routesMap.components.subRoutes)
export const conceptRoutes = routesMapToArray(routesMap.concepts.subRoutes)
export default routesMap
