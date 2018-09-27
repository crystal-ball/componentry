import withTheme from '../withTheme'
import elem from '../elem-factory'

type Props = {
  // Inline style props
  fontSize?: number,
  letterSpacing?: number,
  lineHeight?: number,
  // -- Utility class name props
  color: string,
  fontWeight: '' | 'light' | 'normal' | 'bold',
  italic: boolean,
  monospace: boolean,
  textAlign: '' | 'justify' | 'right' | 'center' | 'left',
  uppercase: boolean,
}

/**
 * The type elements share the same props API and are only different in the
 * default `as` value which is customized with default props.
 */
const makeType = as => ({
  color,
  fontSize,
  fontWeight,
  italic = false,
  letterSpacing,
  lineHeight,
  monospace = false,
  uppercase = false,
  textAlign,
  ...rest
}: Props) =>
  elem({
    defaultAs: as,
    style: { fontSize, letterSpacing, lineHeight },
    classes: {
      'font-italic': italic,
      'text-uppercase': uppercase,
      'text-monospace': monospace,
      [`font-weight-${fontWeight}`]: fontWeight,
      [`text-${color}`]: color,
      [`text-${textAlign}`]: textAlign,
    },
    ...rest,
  })

const Anchor = withTheme('Anchor', makeType('a'))
const Header = withTheme('Header', makeType('h1'))
const Text = withTheme('Text', makeType('p'))

export { Anchor, Header, Text }
