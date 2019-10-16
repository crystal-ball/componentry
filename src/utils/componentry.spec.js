import { arias, componentry, actionClasses } from './componentry'

describe('componentry()', () => {
  test('computes libary utility classes from props', () => {
    ;['xs', 'sm', 'base', 'lg', 'xl'].forEach(size => {
      expect(componentry({ m: size, p: size }).libraryClassNames[1]).toEqual([
        `m-${size}`,
        `p-${size}`,
      ])

      expect(componentry({ mx: size, px: size }).libraryClassNames[1]).toEqual([
        `mx-${size}`,
        `px-${size}`,
      ])

      expect(componentry({ my: size, py: size }).libraryClassNames[1]).toEqual([
        `my-${size}`,
        `py-${size}`,
      ])

      expect(
        componentry({
          mt: size,
          mr: size,
          mb: size,
          ml: size,
          pt: size,
          pr: size,
          pb: size,
          pl: size,
        }).libraryClassNames[1],
      ).toEqual([
        `mt-${size}`,
        `mr-${size}`,
        `mb-${size}`,
        `ml-${size}`,
        `pt-${size}`,
        `pr-${size}`,
        `pb-${size}`,
        `pl-${size}`,
      ])
    })
  })

  test('passes through numeric margin, and padding values', () => {
    expect(componentry({ m: 5, p: 5 }).libraryStyles).toEqual({
      margin: 5,
      padding: 5,
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

  test('passes through string margin, and padding values', () => {
    expect(componentry({ m: '5', p: '5' }).libraryStyles).toEqual({
      margin: '5',
      padding: '5',
    })
    expect(componentry({ mx: '5', px: '5' }).libraryStyles).toEqual({
      marginLeft: '5',
      marginRight: '5',
      paddingLeft: '5',
      paddingRight: '5',
    })
    expect(componentry({ my: '5', py: '5' }).libraryStyles).toEqual({
      marginTop: '5',
      marginBottom: '5',
      paddingTop: '5',
      paddingBottom: '5',
    })
    expect(componentry({ mt: '5' }).libraryStyles).toEqual({ marginTop: '5' })
    expect(componentry({ mr: '5' }).libraryStyles).toEqual({ marginRight: '5' })
    expect(componentry({ mb: '5' }).libraryStyles).toEqual({ marginBottom: '5' })
    expect(componentry({ ml: '5' }).libraryStyles).toEqual({ marginLeft: '5' })
    expect(componentry({ pt: '5' }).libraryStyles).toEqual({ paddingTop: '5' })
    expect(componentry({ pr: '5' }).libraryStyles).toEqual({ paddingRight: '5' })
    expect(componentry({ pb: '5' }).libraryStyles).toEqual({ paddingBottom: '5' })
    expect(componentry({ pl: '5' }).libraryStyles).toEqual({ paddingLeft: '5' })
  })

  test('border style classes are computed correctly', () => {
    expect(componentry({ border: true }).libraryClassNames[0]).toEqual(
      expect.objectContaining({
        border: true,
      }),
    )

    expect(componentry({ borderTop: true }).libraryClassNames[0]).toEqual(
      expect.objectContaining({
        'border-top': true,
      }),
    )
    expect(componentry({ borderRight: true }).libraryClassNames[0]).toEqual(
      expect.objectContaining({
        'border-right': true,
      }),
    )
    expect(componentry({ borderBottom: true }).libraryClassNames[0]).toEqual(
      expect.objectContaining({
        'border-bottom': true,
      }),
    )
    expect(componentry({ borderLeft: true }).libraryClassNames[0]).toEqual(
      expect.objectContaining({
        'border-left': true,
      }),
    )

    expect(componentry({ borderColor: 'primary' }).libraryClassNames[0]).toEqual(
      expect.objectContaining({
        'border-primary': 'primary',
      }),
    )

    expect(componentry({ borderWidth: 'lg' }).libraryClassNames[0]).toEqual(
      expect.objectContaining({ 'border-width-lg': 'lg' }),
    )
  })

  test('returns library className values', () => {
    expect(
      componentry({
        background: 'primary',
        border: true,
        borderTop: true,
        borderRight: true,
        borderBottom: true,
        borderLeft: true,
        borderColor: 'primary',
        borderWidth: 'lg',
        fontColor: 'primary',
        fontSize: 'sm',
        fontWeight: 'bold',
        italic: true,
        monospace: true,
        position: 'fixed',
        textAlign: 'center',
        uppercase: true,
      }).libraryClassNames[0],
    ).toEqual({
      'background-primary': 'primary',
      border: true,
      'border-top': true,
      'border-right': true,
      'border-bottom': true,
      'border-left': true,
      'border-primary': 'primary',
      'border-width-lg': 'lg',
      'font-color-primary': 'primary',
      'font-style-italic': true,
      'font-size-sm': 'sm',
      'font-weight-bold': 'bold',
      'position-fixed': 'fixed',
      'text-align-center': 'center',
      'text-monospace': true,
      'text-uppercase': true,
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
