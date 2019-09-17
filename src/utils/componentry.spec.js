import { arias, componentry, actionClasses } from './componentry'

describe('componentry()', () => {
  test('returns computed border, margin, and padding values', () => {
    expect(componentry({ m: 5, p: 5, b: '1px solid blue' }).libraryStyles).toEqual({
      margin: 5,
      padding: 5,
      border: '1px solid blue',
    })
    expect(componentry({ mx: 5, px: 5 }).libraryStyles).toEqual({
      marginLeft: 5,
      marginRight: 5,
      paddingLeft: 5,
      paddingRight: 5,
    })
    expect(componentry({ my: 5, py: 5 }).libraryStyles).toEqual({
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 5,
      paddingBottom: 5,
    })
    expect(componentry({ mt: 5 }).libraryStyles).toEqual({ marginTop: 5 })
    expect(componentry({ mr: 5 }).libraryStyles).toEqual({ marginRight: 5 })
    expect(componentry({ mb: 5 }).libraryStyles).toEqual({ marginBottom: 5 })
    expect(componentry({ ml: 5 }).libraryStyles).toEqual({ marginLeft: 5 })
    expect(componentry({ pt: 5 }).libraryStyles).toEqual({ paddingTop: 5 })
    expect(componentry({ pr: 5 }).libraryStyles).toEqual({ paddingRight: 5 })
    expect(componentry({ pb: 5 }).libraryStyles).toEqual({ paddingBottom: 5 })
    expect(componentry({ pl: 5 }).libraryStyles).toEqual({ paddingLeft: 5 })
  })

  test('returns library className values', () => {
    expect(
      componentry({
        bg: 'primary',
        borderColor: 'primary',
        color: 'primary',
        fontWeight: 'bold',
        italic: true,
        monospace: true,
        position: 'fixed',
        size: 'sm',
        textAlign: 'center',
        uppercase: true,
      }).libraryClassNames,
    ).toEqual({
      'font-italic': true,
      'text-uppercase': true,
      'text-monospace': true,
      'bg-primary': 'primary',
      'border-primary': 'primary',
      'font-weight-bold': 'bold',
      'position-fixed': 'fixed',
      'text-primary': 'primary',
      'text-sm': 'sm',
      'text-center': 'center',
    })
  })
})

describe('actionClasses()', () => {
  test('actionClasses returns computed className values for target elements', () => {
    expect(
      actionClasses({
        variant: 'btn',
        block: true,
        color: 'primary',
        disabled: true,
        outline: 'primary',
        size: 'sm',
      }),
    ).toEqual({
      btn: true,
      'btn-block': true,
      'btn-primary': 'primary',
      disabled: true,
      'btn-outline-primary': 'primary',
      'btn-sm': 'sm',
    })
  })
})

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
