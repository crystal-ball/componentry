import { componentry } from './componentry'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']

describe('componentry()', () => {
  test('computes libary utility classes from props', () => {
    sizes.forEach((size) => {
      expect(componentry({ m: size, p: size }).utilityCx[1]).toEqual([
        `m-${size}`,
        `p-${size}`,
      ])

      expect(componentry({ mx: size, px: size }).utilityCx[1]).toEqual([
        `mx-${size}`,
        `px-${size}`,
      ])

      expect(componentry({ my: size, py: size }).utilityCx[1]).toEqual([
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
        }).utilityCx[1],
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
    expect(componentry({ m: 5, p: 5 }).styles).toEqual({
      margin: 5,
      padding: 5,
    })
    expect(componentry({ mx: 5, px: 5 }).styles).toEqual({
      marginLeft: 5,
      marginRight: 5,
      paddingLeft: 5,
      paddingRight: 5,
    })
    expect(componentry({ my: 5, py: 5 }).styles).toEqual({
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 5,
      paddingBottom: 5,
    })
    expect(componentry({ mt: 5 }).styles).toEqual({ marginTop: 5 })
    expect(componentry({ mr: 5 }).styles).toEqual({ marginRight: 5 })
    expect(componentry({ mb: 5 }).styles).toEqual({ marginBottom: 5 })
    expect(componentry({ ml: 5 }).styles).toEqual({ marginLeft: 5 })
    expect(componentry({ pt: 5 }).styles).toEqual({ paddingTop: 5 })
    expect(componentry({ pr: 5 }).styles).toEqual({ paddingRight: 5 })
    expect(componentry({ pb: 5 }).styles).toEqual({ paddingBottom: 5 })
    expect(componentry({ pl: 5 }).styles).toEqual({ paddingLeft: 5 })
  })

  test('passes through string margin, and padding values', () => {
    expect(componentry({ m: '5', p: '5' }).styles).toEqual({
      margin: '5',
      padding: '5',
    })
    expect(componentry({ mx: '5', px: '5' }).styles).toEqual({
      marginLeft: '5',
      marginRight: '5',
      paddingLeft: '5',
      paddingRight: '5',
    })
    expect(componentry({ my: '5', py: '5' }).styles).toEqual({
      marginTop: '5',
      marginBottom: '5',
      paddingTop: '5',
      paddingBottom: '5',
    })
    expect(componentry({ mt: '5' }).styles).toEqual({ marginTop: '5' })
    expect(componentry({ mr: '5' }).styles).toEqual({ marginRight: '5' })
    expect(componentry({ mb: '5' }).styles).toEqual({ marginBottom: '5' })
    expect(componentry({ ml: '5' }).styles).toEqual({ marginLeft: '5' })
    expect(componentry({ pt: '5' }).styles).toEqual({ paddingTop: '5' })
    expect(componentry({ pr: '5' }).styles).toEqual({ paddingRight: '5' })
    expect(componentry({ pb: '5' }).styles).toEqual({ paddingBottom: '5' })
    expect(componentry({ pl: '5' }).styles).toEqual({ paddingLeft: '5' })
  })

  test('border style classes are computed correctly', () => {
    expect(componentry({ border: true }).utilityCx[0]).toEqual(
      expect.objectContaining({
        border: true,
      }),
    )

    expect(componentry({ borderTop: true }).utilityCx[0]).toEqual(
      expect.objectContaining({
        'border-top': true,
      }),
    )
    expect(componentry({ borderRight: true }).utilityCx[0]).toEqual(
      expect.objectContaining({
        'border-right': true,
      }),
    )
    expect(componentry({ borderBottom: true }).utilityCx[0]).toEqual(
      expect.objectContaining({
        'border-bottom': true,
      }),
    )
    expect(componentry({ borderLeft: true }).utilityCx[0]).toEqual(
      expect.objectContaining({
        'border-left': true,
      }),
    )

    expect(componentry({ borderColor: 'primary' }).utilityCx[0]).toEqual(
      expect.objectContaining({
        'border-color-primary': 'primary',
      }),
    )

    expect(componentry({ borderWidth: 'lg' }).utilityCx[0]).toEqual(
      expect.objectContaining({ 'border-width-lg': 'lg' }),
    )
  })

  test('returns library className values', () => {
    expect(
      componentry({
        backgroundColor: 'primary',
        border: true,
        borderBottom: true,
        borderColor: 'primary',
        borderLeft: true,
        borderRight: true,
        borderTop: true,
        borderWidth: 'lg',
        fontColor: 'primary',
        fontFamily: 'monospace',
        fontSize: 'sm',
        fontStyle: 'italic',
        fontWeight: 'bold',
        position: 'fixed',
        textAlign: 'center',
        textTransform: 'uppercase',
      }).utilityCx[0],
    ).toEqual({
      'background-color-primary': 'primary',
      'border': true,
      'border-bottom': true,
      'border-color-primary': 'primary',
      'border-left': true,
      'border-right': true,
      'border-top': true,
      'border-width-lg': 'lg',
      'font-bold': 'bold',
      'font-color-primary': 'primary',
      'font-family-monospace': 'monospace',
      'position-fixed': 'fixed',
      'text-align-center': 'center',
      'text-sm': 'sm',
      'text-transform-uppercase': 'uppercase',
    })
  })
})
