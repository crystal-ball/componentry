import { navClasses, parseBaseCx } from './class-names'

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

describe('parseBaseCx()', () => {
  it('returns a base class for the display name', () => {
    expect(parseBaseCx('Active')).toBe('active')
    expect(parseBaseCx('ActiveAction')).toBe('active-action')
  })
})
