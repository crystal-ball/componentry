import { useTheme } from '../Theme/Theme'
import { element } from '../factories/element'

/**
 * [Flex component 📝](https://componentry.design/components/flex)
 */
export function Flex(props) {
  /** @type {{ align: string, direction: string, inline: boolean, justify: string, wrap: string }} */
  const { align, direction, inline, justify, wrap, ...rest } = {
    ...useTheme('Flex'),
    ...props,
  }

  return element({
    componentCx: {
      // ℹ️ Flex is a helper component so it doesn't have a 🅲-flex class
      'd-flex': !inline,
      'd-inline-flex': inline,
      // column, column-reverse, row, row-reverse
      [`flex-${direction}`]: direction,
      // wrap, wrap-reverse, nowrap
      [`flex-${wrap}`]: wrap,
      // start, end, center, baseline, stretch
      [`align-items-${align}`]: align,
      // start, end, center, around, between, evenly
      [`justify-content-${justify}`]: justify,
    },
    ...rest,
  })
}
Flex.displayName = 'Flex'
