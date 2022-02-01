import postcss, { ChildNode, PluginCreator } from 'postcss'
import postcssNested from 'postcss-nested'
import postcssJs from 'postcss-js'
import merge from 'deepmerge'

import { foundationStyles } from '../utils/foundation.styles'
import { Alert } from '../components/Alert/Alert.styles'
import { Badge } from '../components/Badge/Badge.styles'
import { Button } from '../components/Button/Button.styles'
import { Card } from '../components/Card/Card.styles'
import { Close } from '../components/Close/Close.styles'
import { Icon } from '../components/Icon/Icon.styles'
import { FormGroup } from '../components/FormGroup/FormGroup.styles'
import { inputStyles } from '../components/Input/Input.styles'
import { Link } from '../components/Link/Link.styles'
import { modalStyles } from '../components/Modal/Modal.styles'
import { popoverStyles } from '../components/Popover/Popover.styles'
import { tableStyles } from '../components/Table/Table.styles'
import { Text } from '../components/Text/Text.styles'
import { tooltipStyles } from '../components/Tooltip/Tooltip.styles'
import { getMergedConfig } from './configs'

const { components, foundation } = getMergedConfig()

const componentStyles: Record<string, Record<string, unknown>> = {
  foundation: merge(foundationStyles, foundation ?? {}),
  Alert: merge(Alert, components.Alert ?? {}),
  Badge: merge(Badge, components.Badge ?? {}),
  Button: merge(Button, components.Button ?? {}),
  Card: merge(Card, components.Card ?? {}),
  Close: merge(Close, components.Close ?? {}),
  Icon: merge(Icon, components.Icon ?? {}),
  Input: merge(inputStyles, components.Input ?? {}),
  FormGroup: merge(FormGroup, components.FormGroup ?? {}),
  Link: merge(Link, components.Link ?? {}),
  Modal: merge(modalStyles, components.Modal ?? {}),
  Popover: merge(popoverStyles, components.Popover ?? {}),
  Table: merge(tableStyles, components.Table ?? {}),
  Text: merge(Text, components.Text ?? {}),
  Tooltip: merge(tooltipStyles, components.Tooltip ?? {}),
}

const processor = postcss([postcssNested()])

/**
 * Componentry PostCSS plugin manages:
 *
 * 1. Merging the library default theme and component styles with user defined
 *    theme and component styles
 * 2. Replacing `@componentry` directives with parsed component styles
 */
export const plugin: PluginCreator<Record<string, never>> = () => {
  return {
    postcssPlugin: 'componentry',
    AtRule: {
      // Transforms at-rules like `@componentry button;` into component styles
      componentry: (atRule) => {
        const component = atRule.params // params will be the component name, eg "button" in "@componentry button;"

        if (component in componentStyles) {
          // Adapted from tailwindcss/src/util/parseObjectStyles.js
          const ast = processor.process(componentStyles[component], {
            parser: postcssJs,
          })

          // The component styles should be found, and we replace the @componentry node with
          // the final set of parsed styles
          atRule.replaceWith(...ast.root.nodes)
        } else if (component === 'components') {
          // Convenience rule for including all component styles, iterate through
          // style object to assemble all nodes
          let nodes: ChildNode[] = []

          Object.entries(componentStyles).forEach(([key, styles]) => {
            if (key === 'foundation') return
            // Adapted from tailwindcss/src/util/parseObjectStyles.js
            const ast = processor.process(styles, {
              parser: postcssJs,
            })

            nodes = nodes.concat(ast.root.nodes)
          })

          atRule.replaceWith(...nodes)
        } else {
          // Fail fast for bad directives, eg "@componentry ohno;"
          throw new Error(`Unknown @componentry param: ${atRule.params}`)
        }
      },
    },
  }
}
plugin.postcss = true
