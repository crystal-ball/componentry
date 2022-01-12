import postcss, { PluginCreator } from 'postcss'
import postcssNested from 'postcss-nested'
import postcssJs from 'postcss-js'

import { alertStyles } from '../components/Alert/Alert.styles'
import { buttonStyles } from '../components/Button/Button.styles'
import { closeStyles } from '../components/Close/Close.styles'
import { iconStyles } from '../components/Icon/Icon.styles'
import { linkStyles } from '../components/Link/Link.styles'
import { textStyles } from '../components/Text/Text.styles'

const componentStyles: Record<string, Record<string, unknown>> = {
  alert: alertStyles,
  button: buttonStyles,
  close: closeStyles,
  icon: iconStyles,
  link: linkStyles,
  text: textStyles,
}

const processor = postcss([postcssNested()])

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
          // Adapted from tailwindcss/src/util/parseObjectStyles.js
          const ast = processor.process(componentStyles[component], {
            parser: postcssJs,
          })

          // The component styles should be found, and we replace the @componentry node with
          // the final set of parsed styles
          atRule.replaceWith(...ast.root.nodes)
        } else {
          // Fail fast for bad directives, eg "@componentry ohno;"
          throw new Error(`Unknown @componentry param: ${atRule.params}`)
        }
      },
    },
  }
}
plugin.postcss = true
