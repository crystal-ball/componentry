import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

export default function Block(props) {
  const { inline, ...rest } = { ...useTheme('Block'), ...props }

  return elem({
    componentClassNames: {
      'd-block': !inline,
      'd-inline-block': inline,
    },
    ...rest,
  })
}
