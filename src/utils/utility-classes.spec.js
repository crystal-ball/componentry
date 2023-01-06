import { createTheme } from '../theme/theme'
import { themeDefaults } from '../theme/theme-defaults'
import { createUtilityClasses, initializeUtilityClassesTheme } from './utility-classes'

describe('createUtilityClasses()', () => {
  beforeEach(() => {
    initializeUtilityClassesTheme(themeDefaults)
  })

  it('does not compute undefined values', () => {
    expect(createUtilityClasses({}).utilityClasses).toBe('')
  })

  // --------------------------------------------------------
  // LAYOUT

  it('computes layout classes', () => {
    expect(
      createUtilityClasses({
        position: 'fixed',
        display: 'grid',
        invisible: true,
        visible: true,
        zIndex: 'modal',
      }).utilityClasses,
    ).toBe('fixed grid invisible visible z-modal')

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

  // --------------------------------------------------------
  // FLEXBOX/GRID

  it('computes flex/grid classes', () => {
    expect(
      createUtilityClasses({
        alignContent: 'space-between',
        flexDirection: 'column',
        flexGrow: 0,
        flexShrink: 0,
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        justifyContent: 'space-around',
        justifyItems: 'center',
        justifySelf: 'start',
        alignSelf: 'start',
      }).utilityClasses,
    ).toBe(
      'content-between flex-col grow-0 shrink-0 flex-wrap-reverse items-center justify-around justify-items-center justify-self-start self-start',
    )
  })

  // --------------------------------------------------------
  // SPACING

  it('computes spacing utility classes', () => {
    const spacings = ['px', 'auto', 0, 0.5, 1, 2, 3]

    // --- MARGIN
    // Theme values should become classes
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

    // Non-theme numbers should become styles
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

    // Non-theme strings should also be styles
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

    // --- PADDING
    // Theme values should become classes
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

    // Non-theme numbers should become styles
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

    // Non-theme strings should also be styles
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

    // --- GAP
    // Theme values should become classes
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

    // Non-theme numbers should become styles
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

  // --------------------------------------------------------
  // SIZING

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
        height: 42,
        width: 42,
      }).utilityStyles,
    ).toStrictEqual({ height: 42, width: 42 })

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

  // --------------------------------------------------------
  // TYPOGRAPHY

  it('computes typography utility classes', () => {
    expect(
      createUtilityClasses({
        bold: true,
        italic: true,
        fontFamily: 'mono',
        fontWeight: 'normal',
        lineHeight: 'none',
        color: 'primary.100',
        fontSize: 'sm',
        textAlign: 'center',
        letterSpacing: 'tighter',
        textTransform: 'uppercase',
      }).utilityClasses,
    ).toBe(
      'font-bold italic font-mono font-normal leading-none text-primary-100 text-sm text-center tracking-tighter uppercase',
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

  // --------------------------------------------------------
  // BACKGROUNDS

  it('computes background utility classes', () => {
    expect(
      createUtilityClasses({
        backgroundColor: 'primary.100',
      }).utilityClasses,
    ).toBe('bg-primary-100')

    expect(
      createUtilityClasses({
        backgroundColor: 'primary-100',
      }).utilityClasses,
    ).toBe('bg-primary-100')

    expect(
      createUtilityClasses({
        backgroundColor: '#ff428e',
      }).utilityStyles,
    ).toStrictEqual({
      backgroundColor: '#ff428e',
    })

    expect(
      createUtilityClasses({
        backgroundColor: 'primary.oops',
      }),
    ).toStrictEqual({
      utilityClasses: '',
      utilityStyles: { backgroundColor: 'primary.oops' },
      filteredProps: {},
    })

    expect(
      createUtilityClasses({
        backgroundColor: undefined,
      }).utilityClasses,
    ).toBe('')
  })

  it('looks up background utility classes', () => {
    const theme = createTheme({
      backgroundColor: {
        surface: '#eee',
      },
    })
    initializeUtilityClassesTheme(theme)

    expect(
      createUtilityClasses({
        backgroundColor: 'surface',
      }),
    ).toStrictEqual({
      utilityClasses: 'bg-surface',
      utilityStyles: undefined,
      filteredProps: {},
    })

    // Assert that theme has colors, but that theme.backgroundColor is preferred
    expect(theme.colors.primary[100]).toBeTruthy()
    expect(
      createUtilityClasses({
        backgroundColor: 'primary.100',
      }),
    ).toStrictEqual({
      utilityClasses: '',
      utilityStyles: { backgroundColor: 'primary.100' },
      filteredProps: {},
    })
  })

  // --------------------------------------------------------
  // BORDERS

  it('computes border utility classes', () => {
    expect(
      createUtilityClasses({
        border: true,
        borderTop: true,
        borderRight: true,
        borderBottom: true,
        borderLeft: true,
        borderWidth: 8,
        borderColor: 'primary',
        borderRadius: 'full',
        radius: 'lg',
      }).utilityClasses,
    ).toBe(
      'border border-t border-r border-b border-l border-8 border-primary rounded-full rounded-lg',
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
        radius: undefined,
      }).utilityClasses,
    ).toBe('')
  })

  // --------------------------------------------------------
  // EFFECTS

  it('computes effects utility classes', () => {
    expect(
      createUtilityClasses({
        boxShadow: true,
      }).utilityClasses,
    ).toBe('shadow')

    expect(
      createUtilityClasses({
        boxShadow: undefined,
      }).utilityClasses,
    ).toBe('')
  })

  // --------------------------------------------------------
  // STATE

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
