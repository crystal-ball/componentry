import arias from './arias'

const possibleArias = [
  'aria-controls',
  'aria-describedby',
  'aria-expanded',
  'aria-haspopup',
  'aria-hidden',
  'id',
  'aria-labelledby',
  'aria-selected'
]

describe('arias()', () => {
  test('it does not return arias for undefined flags', () => {
    const attrs = {
      active: true,
      guid: 'test'
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
      controls: false,
      describedby: false,
      expanded: false,
      haspopup: false,
      hidden: false,
      id: false,
      labelledby: false,
      selected: false
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
      controls: true,
      describedby: true,
      expanded: true,
      haspopup: true,
      hidden: true,
      id: true,
      labelledby: true,
      selected: true
    }

    // expect().toEqual({
    //   'aria-controls': 'test',
    //   'aria-describedby': 'test',
    //   'aria-expanded': 'true',
    //   'aria-haspopup': 'true',
    //   'aria-hidden': 'false',
    //   id: 'test',
    //   'aria-labelledby': 'test',
    //   'aria-selected': 'true'
    // })

    const result = arias(attrs)

    // Every aria should have some value
    possibleArias.forEach(possibleAria => {
      expect(result[possibleAria]).toBeTruthy()
    })
  })

  test('it assigns passed role', () => {
    expect(arias({ active: true, guid: 'test', role: 'tab' })).toEqual({
      role: 'tab'
    })
  })

  test('it assigns correct value to identifier arias', () => {
    const attrs = {
      active: true,
      guid: 'test',
      controls: true,
      describedby: true,
      haspopup: true,
      id: true,
      labelledby: true
    }

    expect(arias(attrs)).toEqual({
      'aria-controls': 'test',
      'aria-describedby': 'test',
      'aria-haspopup': 'true',
      id: 'test',
      'aria-labelledby': 'test'
    })
  })

  test('it uses explicit values for dynamic arias', () => {
    const attrs = {
      active: true,
      guid: 'test',
      controls: 'id',
      id: 'id',
      labelledby: 'id'
    }

    expect(arias(attrs)).toEqual({
      'aria-controls': 'id',
      id: 'id',
      'aria-labelledby': 'id'
    })
  })

  test('it assigns correct values for active true', () => {
    const attrs = {
      active: true,
      guid: 'test',
      expanded: true,
      hidden: true,
      selected: true
    }

    expect(arias(attrs)).toEqual({
      'aria-expanded': 'true',
      'aria-hidden': 'false',
      'aria-selected': 'true'
    })
  })

  test('it assigns correct values for active false', () => {
    const attrs = {
      active: false,
      guid: 'test',
      expanded: true,
      hidden: true,
      selected: true
    }

    expect(arias(attrs)).toEqual({
      'aria-expanded': 'false',
      'aria-hidden': 'true',
      'aria-selected': 'false'
    })
  })
})
