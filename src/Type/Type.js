// @flow
import withTheme from '../withTheme'
import elem from '../elem-factory'

const computeSpacing = ({
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  p,
  px,
  py,
  pt,
  pb,
  pr,
  pl,
  ...rest
}) => {
  const spacing = {
    margin: m,
    marginTop: mt || mx,
    marginBottom: mb || mx,
    marginLeft: ml || my,
    marginRight: mr || my,
    padding: p,
    paddingTop: pt || px,
    paddingBottom: pb || px,
    paddingLeft: pl || py,
    paddingRight: pr || py,
  }

  return { filtered: rest, spacing }
}

type Props = {
  // Inline style props
  fontSize?: number,
  letterSpacing?: number,
  lineHeight?: number,
  // Spacing props: p*, m*

  // -- Utility class name props
  color: string,
  fontWeight: '' | 'light' | 'normal' | 'bold',
  italic: boolean,
  textAlign: '' | 'justify' | 'right' | 'center' | 'left',
  uppercase: boolean,
}

const makeType = defaultAs => {
  const Elem = ({
    color,
    fontSize,
    fontWeight,
    italic,
    letterSpacing,
    lineHeight,
    uppercase,
    textAlign,
    ...rest
  }: Props) => {
    const { filtered, spacing } = computeSpacing(rest)

    return elem({
      defaultAs,
      style: { fontSize, letterSpacing, lineHeight, ...spacing },
      classes: {
        'font-italic': italic,
        'text-uppercase': uppercase,
        [`font-weight-${fontWeight}`]: fontWeight,
        [`text-${color}`]: color,
        [`text-${textAlign}`]: textAlign,
      },
      ...filtered,
    })
  }

  Elem.defaultProps = {
    color: '',
    fontWeight: '',
    italic: false,
    textAlign: '',
    uppercase: false,
  }

  return Elem
}

const Anchor = withTheme('Anchor', makeType('a'))
const Header = withTheme('Header', makeType('h1'))
const Text = withTheme('Text', makeType('p'))

export { Anchor, Header, Text }
