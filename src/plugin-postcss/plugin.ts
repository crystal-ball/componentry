import postcss, { PluginCreator } from 'postcss'
import postcssNested from 'postcss-nested'
import postcssJs from 'postcss-js'

import { button } from '../Button/Button.styles'

const componentStyles: Record<string, Record<string, unknown>> = {
  button,
}

// --------------------------------------------------------
// Utils

const processor = postcss([postcssNested()])

// Adapted from tailwindcss/src/util/parseObjectStyles.js
function parseComponentStyles(styles: Record<string, unknown>) {
  const ast = processor.process(styles, {
    parser: postcssJs,
  })

  return ast.root.nodes
}

// --------------------------------------------------------
// Plugin

/**
 * Componentry PostCSS plugin manages:
 *
 * 1. Merging the library default theme and component styles with user defined theme and component styles
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
          // The component styles should be found, and we replace the @componentry node with
          // the final set of parsed styles
          atRule.replaceWith(...parseComponentStyles(componentStyles[component]))
        } else {
          // Fail fast for bad directives, eg "@componentry ohno;"
          throw new Error(`Unknown @componentry param: ${atRule.params}`)
        }
      },
    },
  }
}
plugin.postcss = true
