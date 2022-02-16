import { createUtilityClasses } from './utility-classes'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']

describe('createUtilityClasses()', () => {
  it('computes spacing utility classes', () => {
    sizes.forEach((size) => {
      const computed = createUtilityClasses({ m: size, p: size })

      expect(computed.utilityClasses.includes(`m-${size}`)).toBeTruthy()
      expect(computed.utilityClasses.includes(`p-${size}`)).toBeTruthy()
    })
  })

  it('computes border utility classes', () => {
    expect(createUtilityClasses({ border: true }).utilityClasses).toBe('border')

    expect(createUtilityClasses({ borderTop: true }).utilityClasses).toBe('border-t')
    expect(createUtilityClasses({ borderRight: true }).utilityClasses).toBe('border-r')
    expect(createUtilityClasses({ borderBottom: true }).utilityClasses).toBe('border-b')
    expect(createUtilityClasses({ borderLeft: true }).utilityClasses).toBe('border-l')

    expect(createUtilityClasses({ borderWidth: 'lg' }).utilityClasses).toBe('border-lg')
    expect(createUtilityClasses({ borderColor: 'primary' }).utilityClasses).toBe(
      'border-primary',
    )
  })

  it('computes all utility classes', () => {
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
      }).utilityClasses,
    ).toBe(
      'fixed content-center items-center justify-center self-center uppercase font-monospace font-light text-primary text-sm text-center bg-primary border border-b border-l border-r border-t border-lg border-primary',
    )
  })
})
