import { navClasses, parseBaseCx } from './class-names'

describe('navClasses()', () => {
  test('returns a string of classes for passed options', () => {
    expect(
      navClasses('nav', { fill: true, justify: true, pills: true, vertical: true }),
    ).toEqual('nav nav-fill nav-justified nav-pills nav-vertical')
  })

  test('returns only the variant class when flags arent truthy', () => {
    expect(navClasses('nav', {})).toEqual('nav')
  })
})

describe('parseBaseCx()', () => {
  test('returns a base class for the display name', () => {
    expect(parseBaseCx('Active')).toBe('active')
    expect(parseBaseCx('ActiveAction')).toBe('active-action')
  })
})
