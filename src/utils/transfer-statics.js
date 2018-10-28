// TODO: can statics just be assigned after withTheme wrapping?
const statics = [
  'Body',
  'Button',
  'Close',
  'Content',
  'ContentContainer',
  'Footer',
  'Header',
  'Item',
  'Nav',
  'Title',
  'Trigger',
]

export default function transferStatics(Base, Target) {
  statics.forEach(s => {
    /* eslint-disable no-param-reassign */
    if (Base[s]) Target[s] = Base[s]
    /* eslint-enable no-param-reassign */
  })
}
