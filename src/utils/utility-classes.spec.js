import { createUtilityClasses } from './utility-classes'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']

describe('createUtilityClasses()', () => {
  it('computes library utility classes from props', () => {
    sizes.forEach((size) => {
      const computed = createUtilityClasses({ m: size, p: size })

      expect(computed.utilityCx[`m-${size}`]).toBeTruthy()
      expect(computed.utilityCx[`p-${size}`]).toBeTruthy()
    })
  })

  it('border style classes are computed correctly', () => {
    expect(createUtilityClasses({ border: true }).utilityCx).toStrictEqual(
      expect.objectContaining({
        border: true,
      }),
    )

    expect(createUtilityClasses({ borderTop: true }).utilityCx).toStrictEqual(
      expect.objectContaining({
        'border-t': true,
      }),
    )
    expect(createUtilityClasses({ borderRight: true }).utilityCx).toStrictEqual(
      expect.objectContaining({
        'border-r': true,
      }),
    )
    expect(createUtilityClasses({ borderBottom: true }).utilityCx).toStrictEqual(
      expect.objectContaining({
        'border-b': true,
      }),
    )
    expect(createUtilityClasses({ borderLeft: true }).utilityCx).toStrictEqual(
      expect.objectContaining({
        'border-l': true,
      }),
    )

    expect(createUtilityClasses({ borderColor: 'primary' }).utilityCx).toStrictEqual(
      expect.objectContaining({
        'border-primary': 'primary',
      }),
    )

    expect(createUtilityClasses({ borderWidth: 'lg' }).utilityCx).toStrictEqual(
      expect.objectContaining({ 'border-lg': 'lg' }),
    )
  })

  it('returns library className values', () => {
    expect(
      createUtilityClasses({
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
        fontWeight: 'light',
        justifyContent: 'center',
        position: 'fixed',
        textAlign: 'center',
        textTransform: 'uppercase',
      }).utilityCx,
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
        'font-light': 'light',
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
