import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

export default function Flex(props) {
  const { align, direction, inline, justify, wrap, ...rest } = {
    ...useTheme('Flex'),
    ...props,
  }

  return elem({
    classes: {
      'd-flex': !inline,
      'd-inline-flex': inline,
      'flex-column': direction === 'column',
      'flex-column-reverse': direction === 'column-reverse',
      'flex-row': direction === 'row',
      'flex-row-reverse': direction === 'row-reverse',
      [`align-items-${align}`]: align,
      [`flex-${wrap}`]: wrap,
      [`justify-content-${justify}`]: justify,
    },
    ...rest,
  })
}
