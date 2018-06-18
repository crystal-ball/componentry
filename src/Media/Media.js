// @flow
import elementFactory from '../component-factories/element'

const Media = elementFactory('Media', { className: 'media' })
const MediaBody = elementFactory('MediaBody', { className: 'media-body' })

// $FlowFixMe
Media.Body = MediaBody

export default Media
