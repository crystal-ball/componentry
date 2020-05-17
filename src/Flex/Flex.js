import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * [Flex component 📝](https://componentry.design/components/flex)
 */
export default function Flex(props) {
  /** @type {{ align: string, direction: string, inline: boolean, justify: string, wrap: string }} */
  const { align, direction, inline, justify, wrap, ...rest } = {
    ...useTheme('Flex'),
    ...props,
  }

  return elem({
    elemClassName: {
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
