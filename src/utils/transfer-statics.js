const statics = [
  'Trigger',
  'Content',
  'Item',
  'Header',
  'Title',
  'Body',
  'Footer',
  'Nav',
  'ContentContainer',
]

export default function transferStatics(Base, Target) {
  statics.forEach(s => {
    /* eslint-disable no-param-reassign */
    if (Base[s]) Target[s] = Base[s]
    /* eslint-enable no-param-reassign */
  })
}
