import { parseBaseCx } from './class-names'

describe('parseBaseCx()', () => {
  it('should parse a base class from a display name', () => {
    expect(parseBaseCx('Active')).toBe('active')
    expect(parseBaseCx('ActiveAction')).toBe('active-action')
  })
})
