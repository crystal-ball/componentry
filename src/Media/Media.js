// @flow
import elem from '../elem-factory'
import withTheme from '../withTheme'

const Media = withTheme('Media', props => elem({ classes: 'media', ...props }))

const Body = withTheme('MediaBody', props => elem({ classes: 'media-body', ...props }))
Media.Body = Body

export default Media
