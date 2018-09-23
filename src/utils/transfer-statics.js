const statics = [
  'Body',
  'Content',
  'ContentContainer',
  'Footer',
  'Header',
  'Item',
  'Nav',
  'Title',
  'Trigger',
  'defaultProps',
]

export default function transferStatics(Base, Target) {
  statics.forEach(s => {
    /* eslint-disable no-param-reassign */
    if (Base[s]) Target[s] = Base[s]
    /* eslint-enable no-param-reassign */
  })
}
