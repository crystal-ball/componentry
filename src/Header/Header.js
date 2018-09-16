// @flow
import withTheme from '../withTheme'
import elem from '../elem-factory'

type Props = {
  /** Sets utility text color class */
  color: string, // theme colors + muted
  /** Sets a direct style matching font size number */
  fontSize?: number,

  textAlign: '' | 'justify' | 'right' | 'center' | 'left',
}

const Header = ({ color, fontSize, textAlign, ...rest }: Props) =>
  elem({
    defaultAs: 'h1',
    style: { fontSize },
    classes: {
      [`text-${textAlign}`]: textAlign,
      [`text-${color}`]: color,
    },
    ...rest,
  })

Header.defaultProps = {
  textAlign: '',
  color: '',
}

export default withTheme('Header', Header)
