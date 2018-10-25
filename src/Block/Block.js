import componentryElem from '../elem-factory'
import withTheme from '../withTheme'

const Block = ({ block, inline, ...rest }) =>
  componentryElem({
    classes: {
      // Divs are display block by default, so this isn't necessary as a default
      // className
      'd-block': block,
      'd-inline-block': inline,
    },
    ...rest,
  })

export default withTheme('Block', Block)
