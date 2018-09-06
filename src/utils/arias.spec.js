import arias from './arias'

const possibleArias = [
  'aria-controls',
  'aria-describedby',
  'aria-expanded',
  'aria-haspopup',
  'aria-hidden',
  'id',
  'aria-labelledby',
  'aria-selected',
]

describe('arias()', () => {
  test('it does not return arias for undefined flags', () => {
    const attrs = {
      active: true,
      guid: 'test',
    }

    const result = arias(attrs)

    // Every aria should be undefined
    possibleArias.forEach(possibleAria => {
      expect(result[possibleAria]).toEqual(undefined)
    })
  })

  test('it does not return arias for falsey flags', () => {
    const attrs = {
      active: false,
      guid: 'test',
      arias: {
        controls: false,
        describedby: false,
        expanded: false,
        haspopup: false,
        hidden: false,
        id: false,
        labelledby: false,
        selected: false,
      },
    }

    const result = arias(attrs)

    // Every aria should have some value
    possibleArias.forEach(possibleAria => {
      expect(result[possibleAria]).toEqual(undefined)
    })
  })

  test('it returns arias for truthy flags', () => {
    const attrs = {
      active: true,
      guid: 'test',
      arias: {
        controls: true,
        describedby: true,
        expanded: true,
        haspopup: true,
        hidden: true,
        id: true,
        labelledby: true,
        selected: true,
      },
    }

    const result = arias(attrs)

    // Every aria should have some value
    possibleArias.forEach(possibleAria => {
      expect(result[possibleAria]).toBeTruthy()
    })
  })

  test('it assigns passed role', () => {
    expect(arias({ active: true, guid: 'test', arias: { role: 'tab' } })).toEqual({
      role: 'tab',
    })
  })

  test('it assigns correct value to identifier arias', () => {
    const attrs = {
      active: true,
      guid: 'test',
      arias: {
        controls: true,
        describedby: true,
        haspopup: true,
        id: true,
        labelledby: true,
      },
    }

    expect(arias(attrs)).toEqual({
      'aria-controls': 'test',
      'aria-describedby': 'test',
      'aria-haspopup': 'true',
      id: 'test',
      'aria-labelledby': 'test',
    })
  })

  test('it uses activeId for elements with mutli-target/content', () => {
    const attrs = {
      active: 'tab1',
      activeId: 'tab1',
      guid: 'test',
      type: 'content',
      arias: {
        hidden: true,
        id: true,
        labelledby: true,
      },
    }

    expect(arias(attrs)).toEqual({
      'aria-hidden': 'false',
      id: 'test-tab1-content',
      'aria-labelledby': 'test-tab1-trigger',
    })
  })

  test('it assigns correct values for active true', () => {
    const attrs = {
      active: true,
      guid: 'test',
      arias: {
        expanded: true,
        hidden: true,
        selected: true,
      },
    }

    expect(arias(attrs)).toEqual({
      'aria-expanded': 'true',
      'aria-hidden': 'false',
      'aria-selected': 'true',
    })
  })

  test('it assigns correct values for active false', () => {
    const attrs = {
      active: false,
      guid: 'test',
      arias: {
        expanded: true,
        hidden: true,
        selected: true,
      },
    }

    expect(arias(attrs)).toEqual({
      'aria-expanded': 'false',
      'aria-hidden': 'true',
      'aria-selected': 'false',
    })
  })
})
