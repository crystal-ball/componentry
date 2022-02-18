import { computeARIA } from './aria'

// Complete set of possible ARIA attributes computed by ariaAttrs
const possibleAttrs = [
  'aria-controls',
  'aria-describedby',
  'aria-expanded',
  'aria-haspopup',
  'aria-hidden',
  'aria-labelledby',
  'aria-selected',
  'id',
  'role',
]

describe('ariaAttrs()', () => {
  it('does not return attributes for undefined flags', () => {
    const opts = {
      active: true,
      guid: 'test',
      aria: {},
    }

    const attrs = computeARIA(opts)

    // Every attribute should be undefined
    possibleAttrs.forEach((possibleAttr) => {
      expect(attrs[possibleAttr]).toBeUndefined()
    })
  })

  it('does not return attributes for falsey flags', () => {
    const attrs = computeARIA({
      active: false,
      guid: 'test',
      aria: {
        controls: false,
        describedby: false,
        expanded: false,
        haspopup: false,
        hidden: false,
        id: false,
        labelledby: false,
        role: false,
        selected: false,
      },
    })

    // Every attribute should be undefined
    possibleAttrs.forEach((possiblAttr) => {
      expect(attrs[possiblAttr]).toBeUndefined()
    })
  })

  it('returns attributes for truthy flags', () => {
    const attrs = computeARIA({
      active: true,
      guid: 'test',
      aria: {
        controls: true,
        describedby: true,
        expanded: true,
        haspopup: true,
        hidden: true,
        id: true,
        labelledby: true,
        selected: true,
        role: 'button',
      },
    })

    // Every aria should have some value
    possibleAttrs.forEach((possibleAttr) => {
      expect(attrs[possibleAttr]).toBeTruthy()
    })
  })

  it('assigns passed role', () => {
    expect(
      computeARIA({ active: true, guid: 'test', aria: { role: 'tab' } }),
    ).toStrictEqual({
      role: 'tab',
    })
  })

  it('assigns correct value to identifier attributes', () => {
    expect(
      computeARIA({
        active: true,
        guid: 'test',
        aria: {
          controls: true,
          describedby: true,
          haspopup: true,
          id: true,
          labelledby: true,
        },
      }),
    ).toStrictEqual({
      'aria-controls': 'test',
      'aria-describedby': 'test',
      'aria-haspopup': 'true',
      id: 'test',
      'aria-labelledby': 'test',
    })
  })

  it('uses activeId for elements with mutli-target/content', () => {
    expect(
      computeARIA({
        active: 'tab1',
        activeId: 'tab1',
        guid: 'test',
        type: 'content',
        aria: {
          hidden: true,
          id: true,
          labelledby: true,
        },
      }),
    ).toStrictEqual({
      'aria-hidden': 'false',
      id: 'test-tab1-content',
      'aria-labelledby': 'test-tab1-action',
    })
  })

  it('assigns correct values for active true', () => {
    expect(
      computeARIA({
        active: true,
        guid: 'test',
        aria: {
          expanded: true,
          hidden: true,
          selected: true,
        },
      }),
    ).toStrictEqual({
      'aria-expanded': 'true',
      'aria-hidden': 'false',
      'aria-selected': 'true',
    })
  })

  it('assigns correct values for active false', () => {
    expect(
      computeARIA({
        active: false,
        guid: 'test',
        aria: {
          expanded: true,
          hidden: true,
          selected: true,
        },
      }),
    ).toStrictEqual({
      'aria-expanded': 'false',
      'aria-hidden': 'true',
      'aria-selected': 'false',
    })
  })
})
