import { useTheme } from '../Theme/Theme'
import { element } from '../factories/element'

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
export function Text(props) {
  /** @type {{ variant: string, bold: boolean, italic: boolean, inline: boolean, variantsElements: { [key: string]: string}}} */
  const { variant = 'body', bold, italic, inline, variantsElements = {}, ...rest } = {
    ...useTheme('Text'),
    ...props,
  }

  return element({
    as: inline
      ? 'span'
      : variantsElements[variant] || defaultVariantsElements[variant] || 'p',
    fontStyle: italic ? 'italic' : null,
    fontWeight: bold ? 'bold' : null,
    componentCx: {
      '🅲-text': true,
      [`text-${variant}`]: !inline,
    },
    ...rest,
  })
}
Text.displayName = 'Text'
