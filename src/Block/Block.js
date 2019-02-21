import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

export default function Block(props) {
  const { block, inline, ...rest } = { ...useTheme('Block'), ...props }

  return elem({
    classes: {
      'd-block': block,
      'd-inline-block': inline,
    },
    ...rest,
  })
}
