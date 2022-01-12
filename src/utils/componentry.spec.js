import { utilityStyles } from './style-utilities'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']

describe('utilityStyles()', () => {
  it('computes library utility classes from props', () => {
    sizes.forEach((size) => {
      expect(utilityStyles({ m: size, p: size }).utilityCx[1]).toStrictEqual([
        `m-${size}`,
        `p-${size}`,
      ])

      expect(utilityStyles({ mx: size, px: size }).utilityCx[1]).toStrictEqual([
        `mx-${size}`,
        `px-${size}`,
      ])

      expect(utilityStyles({ my: size, py: size }).utilityCx[1]).toStrictEqual([
        `my-${size}`,
        `py-${size}`,
      ])

      expect(
        utilityStyles({
          mt: size,
          mr: size,
          mb: size,
          ml: size,
          pt: size,
          pr: size,
          pb: size,
          pl: size,
        }).utilityCx[1],
      ).toStrictEqual([
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

  it('passes through numeric margin, and padding values', () => {
    expect(utilityStyles({ m: 5, p: 5 }).styles).toStrictEqual({
      margin: 5,
      padding: 5,
    })
    expect(utilityStyles({ mx: 5, px: 5 }).styles).toStrictEqual({
      marginLeft: 5,
      marginRight: 5,
      paddingLeft: 5,
      paddingRight: 5,
    })
    expect(utilityStyles({ my: 5, py: 5 }).styles).toStrictEqual({
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 5,
      paddingBottom: 5,
    })
    expect(utilityStyles({ mt: 5 }).styles).toStrictEqual({ marginTop: 5 })
    expect(utilityStyles({ mr: 5 }).styles).toStrictEqual({ marginRight: 5 })
    expect(utilityStyles({ mb: 5 }).styles).toStrictEqual({ marginBottom: 5 })
    expect(utilityStyles({ ml: 5 }).styles).toStrictEqual({ marginLeft: 5 })
    expect(utilityStyles({ pt: 5 }).styles).toStrictEqual({ paddingTop: 5 })
    expect(utilityStyles({ pr: 5 }).styles).toStrictEqual({ paddingRight: 5 })
    expect(utilityStyles({ pb: 5 }).styles).toStrictEqual({ paddingBottom: 5 })
    expect(utilityStyles({ pl: 5 }).styles).toStrictEqual({ paddingLeft: 5 })
  })

  it('passes through string margin, and padding values', () => {
    expect(utilityStyles({ m: '5', p: '5' }).styles).toStrictEqual({
      margin: '5',
      padding: '5',
    })
    expect(utilityStyles({ mx: '5', px: '5' }).styles).toStrictEqual({
      marginLeft: '5',
      marginRight: '5',
      paddingLeft: '5',
      paddingRight: '5',
    })
    expect(utilityStyles({ my: '5', py: '5' }).styles).toStrictEqual({
      marginTop: '5',
      marginBottom: '5',
      paddingTop: '5',
      paddingBottom: '5',
    })
    expect(utilityStyles({ mt: '5' }).styles).toStrictEqual({ marginTop: '5' })
    expect(utilityStyles({ mr: '5' }).styles).toStrictEqual({ marginRight: '5' })
    expect(utilityStyles({ mb: '5' }).styles).toStrictEqual({ marginBottom: '5' })
    expect(utilityStyles({ ml: '5' }).styles).toStrictEqual({ marginLeft: '5' })
    expect(utilityStyles({ pt: '5' }).styles).toStrictEqual({ paddingTop: '5' })
    expect(utilityStyles({ pr: '5' }).styles).toStrictEqual({ paddingRight: '5' })
    expect(utilityStyles({ pb: '5' }).styles).toStrictEqual({ paddingBottom: '5' })
    expect(utilityStyles({ pl: '5' }).styles).toStrictEqual({ paddingLeft: '5' })
  })

  it('border style classes are computed correctly', () => {
    expect(utilityStyles({ border: true }).utilityCx[0]).toStrictEqual(
      expect.objectContaining({
        border: true,
      }),
    )

    expect(utilityStyles({ borderTop: true }).utilityCx[0]).toStrictEqual(
      expect.objectContaining({
        'border-t': true,
      }),
    )
    expect(utilityStyles({ borderRight: true }).utilityCx[0]).toStrictEqual(
      expect.objectContaining({
        'border-r': true,
      }),
    )
    expect(utilityStyles({ borderBottom: true }).utilityCx[0]).toStrictEqual(
      expect.objectContaining({
        'border-b': true,
      }),
    )
    expect(utilityStyles({ borderLeft: true }).utilityCx[0]).toStrictEqual(
      expect.objectContaining({
        'border-l': true,
      }),
    )

    expect(utilityStyles({ borderColor: 'primary' }).utilityCx[0]).toStrictEqual(
      expect.objectContaining({
        'border-primary': 'primary',
      }),
    )

    expect(utilityStyles({ borderWidth: 'lg' }).utilityCx[0]).toStrictEqual(
      expect.objectContaining({ 'border-lg': 'lg' }),
    )
  })

  it('returns library className values', () => {
    expect(
      utilityStyles({
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'primary',
        border: true,
        borderBottom: true,
        borderColor: 'primary',
        borderLeft: true,
        borderRight: true,
        borderTop: true,
        borderWidth: 'lg',
        color: 'primary',
        fontFamily: 'monospace',
        fontSize: 'sm',
        fontStyle: 'italic',
        fontWeight: 'bold',
        justifyContent: 'center',
        position: 'fixed',
        textAlign: 'center',
        textTransform: 'uppercase',
      }).utilityCx[0],
    ).toStrictEqual(
      expect.objectContaining({
        'bg-primary': 'primary',
        'border': true,
        'border-b': true,
        'border-l': true,
        'border-lg': 'lg',
        'border-primary': 'primary',
        'border-r': true,
        'border-t': true,
        'content-center': 'center',
        'font-bold': 'bold',
        'font-monospace': 'monospace',
        'items-center': 'center',
        'justify-center': 'center',
        'fixed': 'fixed',
        'self-center': 'center',
        'text-center': 'center',
        'text-primary': 'primary',
        'text-sm': 'sm',
        'uppercase': 'uppercase',
      }),
    )
  })
})
