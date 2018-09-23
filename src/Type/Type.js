// @flow
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
  textAlign: '' | 'justify' | 'right' | 'center' | 'left',
  uppercase: boolean,
}

/**
 * The type elements share the same props API and are only different in the
 * default `as` value which is customized with default props.
 */
const makeType = as => {
  const Type = ({
    color,
    fontSize,
    fontWeight,
    italic,
    letterSpacing,
    lineHeight,
    uppercase,
    textAlign,
    ...rest
  }: Props) =>
    elem({
      style: { fontSize, letterSpacing, lineHeight },
      classes: {
        'font-italic': italic,
        'text-uppercase': uppercase,
        [`font-weight-${fontWeight}`]: fontWeight,
        [`text-${color}`]: color,
        [`text-${textAlign}`]: textAlign,
      },
      ...rest,
    })

  Type.defaultProps = {
    as,
    color: '',
    fontWeight: '',
    italic: false,
    textAlign: '',
    uppercase: false,
  }

  return Type
}

const Anchor = withTheme('Anchor', makeType('a'))
const Header = withTheme('Header', makeType('h1'))
const Text = withTheme('Text', makeType('p'))

export { Anchor, Header, Text }
