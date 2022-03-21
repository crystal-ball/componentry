import { createUtilityClasses } from './utility-classes'

describe('createUtilityClasses()', () => {
  it('does not compute undefined values', () => {
    expect(createUtilityClasses({}).utilityClasses).toBe('')
  })

  it('computes layout classes', () => {
    expect(
      createUtilityClasses({
        position: 'fixed',
        display: 'grid',
        invisible: true,
        visible: true,
        zIndex: 50,
      }).utilityClasses,
    ).toBe('fixed grid invisible visible z-50')

    expect(
      createUtilityClasses({
        position: undefined,
        display: undefined,
        invisible: false,
        visible: false,
        zIndex: undefined,
      }).utilityClasses,
    ).toBe('')
  })

  it('computes flex/grid classes', () => {
    expect(
      createUtilityClasses({
        alignContent: 'center',
        flexDirection: 'column',
        flexGrow: 0,
        flexShrink: 0,
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        justifySelf: 'start',
        alignSelf: 'start',
      }).utilityClasses,
    ).toBe(
      'content-center flex-col grow-0 shrink-0 flex-wrap-reverse items-center justify-center justify-items-center justify-self-start self-start',
    )
  })

  it('computes spacing utility classes', () => {
    const spacings = [0, 0.5, 1, 2, 3]
    spacings.forEach((spacing) => {
      const computed = createUtilityClasses({
        m: spacing,
        mt: spacing,
        mr: spacing,
        mb: spacing,
        ml: spacing,
        mx: spacing,
        my: spacing,
      })

      expect(computed.utilityClasses).toBe(
        `m-${spacing} mt-${spacing} mr-${spacing} mb-${spacing} ml-${spacing} mx-${spacing} my-${spacing}`,
      )
    })

    expect(
      createUtilityClasses({
        m: 42,
        mt: 42,
        mr: 42,
        mb: 42,
        ml: 42,
        mx: 42,
        my: 42,
      }),
    ).toStrictEqual({
      filteredProps: {},
      utilityClasses: '',
      utilityStyles: {
        margin: 42,
        marginTop: 42,
        marginRight: 42,
        marginBottom: 42,
        marginLeft: 42,
      },
    })

    expect(
      createUtilityClasses({
        mx: '1rem',
        my: '2em',
      }),
    ).toStrictEqual({
      filteredProps: {},
      utilityClasses: '',
      utilityStyles: {
        marginTop: '2em',
        marginRight: '1rem',
        marginBottom: '2em',
        marginLeft: '1rem',
      },
    })

    spacings.forEach((spacing) => {
      const computed = createUtilityClasses({
        p: spacing,
        pt: spacing,
        pr: spacing,
        pb: spacing,
        pl: spacing,
        px: spacing,
        py: spacing,
      })

      expect(computed.utilityClasses).toBe(
        `p-${spacing} pt-${spacing} pr-${spacing} pb-${spacing} pl-${spacing} px-${spacing} py-${spacing}`,
      )
    })

    expect(
      createUtilityClasses({
        p: 42,
        pt: 42,
        pr: 42,
        pb: 42,
        pl: 42,
        px: 42,
        py: 42,
      }),
    ).toStrictEqual({
      filteredProps: {},
      utilityClasses: '',
      utilityStyles: {
        padding: 42,
        paddingTop: 42,
        paddingRight: 42,
        paddingBottom: 42,
        paddingLeft: 42,
      },
    })

    expect(
      createUtilityClasses({
        px: '1rem',
        py: '2em',
      }),
    ).toStrictEqual({
      filteredProps: {},
      utilityClasses: '',
      utilityStyles: {
        paddingTop: '2em',
        paddingRight: '1rem',
        paddingBottom: '2em',
        paddingLeft: '1rem',
      },
    })

    spacings.forEach((spacing) => {
      const computed = createUtilityClasses({
        gap: spacing,
        columnGap: spacing,
        rowGap: spacing,
      })

      expect(computed.utilityClasses).toBe(
        `gap-${spacing} gap-x-${spacing} gap-y-${spacing}`,
      )
    })

    expect(
      createUtilityClasses({
        gap: 42,
        columnGap: 42,
        rowGap: 42,
      }),
    ).toStrictEqual({
      filteredProps: {},
      utilityClasses: '',
      utilityStyles: {
        gap: 42,
        columnGap: 42,
        rowGap: 42,
      },
    })
  })

  it('computes sizing utility classes', () => {
    expect(
      createUtilityClasses({
        height: 'screen',
        minHeight: 'screen',
        maxHeight: 'screen',
        width: 'full',
        minWidth: 'full',
        maxWidth: 'full',
      }).utilityClasses,
    ).toBe('h-screen min-h-screen max-h-screen w-full min-w-full max-w-full')

    expect(
      createUtilityClasses({
        height: undefined,
        minHeight: undefined,
        maxHeight: undefined,
        width: undefined,
        minWidth: undefined,
        maxWidth: undefined,
      }).utilityClasses,
    ).toBe('')
  })

  it('computes typography utility classes', () => {
    expect(
      createUtilityClasses({
        bold: true,
        italic: true,
        fontFamily: 'mono',
        fontWeight: 'normal',
        lineHeight: 'none',
        color: 'heading',
        fontSize: 'sm',
        textAlign: 'center',
        letterSpacing: 'tighter',
        textTransform: 'uppercase',
      }).utilityClasses,
    ).toBe(
      'font-bold italic font-mono font-normal leading-none text-heading text-sm text-center tracking-tighter uppercase',
    )

    expect(
      createUtilityClasses({
        bold: false,
        italic: false,
        fontFamily: undefined,
        fontWeight: undefined,
        lineHeight: undefined,
        color: undefined,
        fontSize: undefined,
        textAlign: undefined,
        letterSpacing: undefined,
        textTransform: undefined,
      }).utilityClasses,
    ).toBe('')
  })

  it('computes background color utility classes', () => {
    expect(
      createUtilityClasses({
        backgroundColor: 'primary-100',
        boxShadow: true,
      }).utilityClasses,
    ).toBe('bg-primary-100 shadow')

    expect(
      createUtilityClasses({
        backgroundColor: undefined,
        boxShadow: undefined,
      }).utilityClasses,
    ).toBe('')
  })

  it('computes border utility classes', () => {
    expect(
      createUtilityClasses({
        border: true,
        borderTop: true,
        borderRight: true,
        borderBottom: true,
        borderLeft: true,
        borderWidth: 'lg',
        borderColor: 'primary',
        borderRadius: 'full',
      }).utilityClasses,
    ).toBe(
      'border border-t border-r border-b border-l border-lg border-primary rounded-full',
    )

    expect(
      createUtilityClasses({
        border: false,
        borderTop: false,
        borderRight: false,
        borderBottom: false,
        borderLeft: false,
        borderWidth: undefined,
        borderColor: undefined,
        borderRadius: undefined,
      }).utilityClasses,
    ).toBe('')
  })

  it('computes state classes', () => {
    expect(createUtilityClasses({ active: true, disabled: true }).utilityClasses).toBe(
      'C9Y-active C9Y-disabled',
    )
    expect(
      createUtilityClasses({ active: true, disabled: true }).filteredProps,
    ).toStrictEqual({
      disabled: true,
    })

    expect(createUtilityClasses({ active: false, disabled: false }).utilityClasses).toBe(
      '',
    )
  })
})
