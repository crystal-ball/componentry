import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

const defaultVariantsElements = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'body': 'p',
  'code': 'code',
  'small': 'small',
}

/**
 * [Text component 📝](https://componentry.design/components/text)
 */
export default function Text(props) {
  const {
    variant = 'body',
    bold = false,
    italic = false,
    inline = false,
    variantsElements = {},
    ...rest
  } = {
    ...useTheme('Text'),
    ...props,
  }

  return elem({
    as: inline
      ? 'span'
      : variantsElements[variant] || defaultVariantsElements[variant] || 'p',
    fontStyle: italic ? 'italic' : null,
    fontWeight: bold ? 'bold' : null,
    elemClassName: inline ? null : `✨${variant}`,
    ...rest,
  })
}
Text.displayName = '✨Text'
