import { navClasses } from './component-classes'

describe('navClasses()', () => {
  it('returns a string of classes for passed options', () => {
    expect(
      navClasses('nav', { fill: true, justify: true, pills: true, vertical: true }),
    ).toBe('nav-fill nav-justified nav-pills nav-vertical')
  })

  it('returns only the variant class when flags arent truthy', () => {
    expect(navClasses('nav', {})).toBe('')
  })
})
