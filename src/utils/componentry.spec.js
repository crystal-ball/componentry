import { componentry, targetClassNames } from './componentry'

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

  test('targetClassNames returns computed className values for target elements', () => {
    expect(
      targetClassNames({
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
