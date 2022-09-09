import postcss, { ChildNode, PluginCreator } from 'postcss'
import postcssJs from 'postcss-js'
import postcssNested from 'postcss-nested'

import { loadConfig } from '../config/load-config'

const config = loadConfig()

const { foundation, states, ...components } = config.styles
const utilities = { states }

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
        const directiveTarget = atRule.params // params will be the component name, eg "button" in "@componentry button;"
        let nodes: ChildNode[] = []

        if (directiveTarget === 'foundation') {
          const ast = processor.process(foundation!, {
            parser: postcssJs,
          })
          ;({ nodes } = ast.root)
        } else if (directiveTarget === 'utilities') {
          // Convenience rule for including all utility styles, iterate through
          // style object to assemble all nodes
          Object.values(utilities).forEach((styles) => {
            // @ts-expect-error -- Need to type everything for this to work
            const ast = processor.process(styles, {
              parser: postcssJs,
            })
            nodes = nodes.concat(ast.root.nodes)
          })
        } else if (directiveTarget === 'components') {
          // Convenience rule for including all component styles, iterate through
          // style object to assemble all nodes
          Object.values(components).forEach((styles) => {
            // @ts-expect-error -- Need to type everything for this to work
            const ast = processor.process(styles, {
              parser: postcssJs,
            })
            nodes = nodes.concat(ast.root.nodes)
          })
        } else if (directiveTarget in components) {
          // The component styles should be found, and we replace the
          // @componentry node with the final set of parsed styles
          // Adapted from tailwindcss/src/util/parseObjectStyles.js
          const ast = processor.process(components[directiveTarget], {
            parser: postcssJs,
          })
          ;({ nodes } = ast.root)
        } else {
          // Fail fast for bad directives, eg "@componentry ohno;"
          throw new Error(`Unknown @componentry param: ${atRule.params}`)
        }

        // Attach @rule source for proper source map handling
        // https://github.com/postcss/postcss/blob/main/docs/guidelines/plugin.md#24-set-nodesource-for-new-nodes
        nodes.forEach((node) => {
          node.source = atRule.source // eslint-disable-line no-param-reassign
        })

        atRule.replaceWith(...nodes)
      },
    },
  }
}
plugin.postcss = true
