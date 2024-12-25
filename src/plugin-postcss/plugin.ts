import postcss, { ChildNode, PluginCreator, Root } from 'postcss'
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
        let processedNodes: Array<ChildNode | Root> = []

        if (directiveTarget === 'foundation') {
          const ast = processor.process(foundation, {
            parser: postcssJs,
          })
          processedNodes = ast.root.nodes
        } else if (directiveTarget === 'utilities') {
          // Convenience rule for including all utility styles, iterate through
          // style object to assemble all nodes
          Object.values(utilities).forEach((styles) => {
            const ast = processor.process(styles, {
              parser: postcssJs,
            })
            processedNodes = processedNodes.concat(ast.root.nodes)
          })
        } else if (directiveTarget === 'components') {
          // Convenience rule for including all component styles, iterate through
          // style object to assemble all nodes
          Object.values(components).forEach((styles) => {
            const ast = processor.process(styles, {
              parser: postcssJs,
            })
            processedNodes = processedNodes.concat(ast.root.nodes)
          })
        } else if (directiveTarget in components) {
          // The component styles should be found, and we replace the
          // @componentry node with the final set of parsed styles
          // Adapted from tailwindcss/src/util/parseObjectStyles.js
          // @ts-expect-error -- in type guard
          const ast = processor.process(components[directiveTarget], {
            parser: postcssJs,
          })
          processedNodes = ast.root.nodes
        } else {
          // Fail fast for bad directives, eg "@componentry ohno;"
          throw new Error(`Unknown @componentry param: ${atRule.params}`)
        }

        // Attach @rule source for proper source map handling
        // https://github.com/postcss/postcss/blob/main/docs/guidelines/plugin.md#24-set-nodesource-for-new-nodes
        processedNodes.forEach((node) => {
          node.source = atRule.source
        })

        atRule.replaceWith(...processedNodes)
      },
    },
  }
}
plugin.postcss = true
