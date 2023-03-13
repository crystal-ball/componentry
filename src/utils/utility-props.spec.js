import { createTheme } from '../theme/theme'
import { themeDefaults } from '../theme/theme-defaults'
import { createUtilityProps, initializeUtilityPropsTheme } from './utility-props'

describe('createUtilityProps()', () => {
  beforeEach(() => {
    initializeUtilityPropsTheme(themeDefaults)
  })

  it('does not compute undefined values', () => {
    expect(createUtilityProps({}).utilityClassName).toBe('')
  })

  // --------------------------------------------------------
  // LAYOUT

  it('computes layout classes', () => {
    expect(
      createUtilityProps({
        position: 'fixed',
        display: 'grid',
        invisible: true,
        visible: true,
        zIndex: 'modal',
      }).utilityClassName,
    ).toBe('fixed grid invisible visible z-modal')

    expect(
      createUtilityProps({
        position: undefined,
        display: undefined,
        invisible: false,
        visible: false,
        zIndex: undefined,
      }).utilityClassName,
    ).toBe('')
  })

  // --------------------------------------------------------
  // FLEXBOX/GRID

  it('computes flex/grid classes', () => {
    expect(
      createUtilityProps({
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
      }).utilityClassName,
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
      const computed = createUtilityProps({
        m: spacing,
        mt: spacing,
        mr: spacing,
        mb: spacing,
        ml: spacing,
        mx: spacing,
        my: spacing,
      })

      expect(computed.utilityClassName).toBe(
        `m-${spacing} mt-${spacing} mr-${spacing} mb-${spacing} ml-${spacing} mx-${spacing} my-${spacing}`,
      )
    })

    // Non-theme numbers should become styles
    expect(
      createUtilityProps({
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
      utilityClassName: '',
      utilityStyle: {
        margin: 42,
        marginTop: 42,
        marginRight: 42,
        marginBottom: 42,
        marginLeft: 42,
      },
    })

    // Non-theme strings should also be styles
    expect(
      createUtilityProps({
        mx: '1rem',
        my: '2em',
      }),
    ).toStrictEqual({
      filteredProps: {},
      utilityClassName: '',
      utilityStyle: {
        marginTop: '2em',
        marginRight: '1rem',
        marginBottom: '2em',
        marginLeft: '1rem',
      },
    })

    // --- PADDING
    // Theme values should become classes
    spacings.forEach((spacing) => {
      const computed = createUtilityProps({
        p: spacing,
        pt: spacing,
        pr: spacing,
        pb: spacing,
        pl: spacing,
        px: spacing,
        py: spacing,
      })

      expect(computed.utilityClassName).toBe(
        `p-${spacing} pt-${spacing} pr-${spacing} pb-${spacing} pl-${spacing} px-${spacing} py-${spacing}`,
      )
    })

    // Non-theme numbers should become styles
    expect(
      createUtilityProps({
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
      utilityClassName: '',
      utilityStyle: {
        padding: 42,
        paddingTop: 42,
        paddingRight: 42,
        paddingBottom: 42,
        paddingLeft: 42,
      },
    })

    // Non-theme strings should also be styles
    expect(
      createUtilityProps({
        px: '1rem',
        py: '2em',
      }),
    ).toStrictEqual({
      filteredProps: {},
      utilityClassName: '',
      utilityStyle: {
        paddingTop: '2em',
        paddingRight: '1rem',
        paddingBottom: '2em',
        paddingLeft: '1rem',
      },
    })

    // --- GAP
    // Theme values should become classes
    spacings.forEach((spacing) => {
      const computed = createUtilityProps({
        gap: spacing,
        columnGap: spacing,
        rowGap: spacing,
      })

      expect(computed.utilityClassName).toBe(
        `gap-${spacing} gap-x-${spacing} gap-y-${spacing}`,
      )
    })

    // Non-theme numbers should become styles
    expect(
      createUtilityProps({
        gap: 42,
        columnGap: 42,
        rowGap: 42,
      }),
    ).toStrictEqual({
      filteredProps: {},
      utilityClassName: '',
      utilityStyle: {
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
      createUtilityProps({
        height: 'screen',
        minHeight: 'screen',
        maxHeight: 'screen',
        width: 'full',
        minWidth: 'full',
        maxWidth: 'full',
      }).utilityClassName,
    ).toBe('h-screen min-h-screen max-h-screen w-full min-w-full max-w-full')

    expect(
      createUtilityProps({
        height: 42,
        width: 42,
      }).utilityStyle,
    ).toStrictEqual({ height: 42, width: 42 })

    expect(
      createUtilityProps({
        height: undefined,
        minHeight: undefined,
        maxHeight: undefined,
        width: undefined,
        minWidth: undefined,
        maxWidth: undefined,
      }).utilityClassName,
    ).toBe('')
  })

  // --------------------------------------------------------
  // TYPOGRAPHY

  it('computes typography utility classes', () => {
    expect(
      createUtilityProps({
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
      }).utilityClassName,
    ).toBe(
      'font-bold italic font-mono font-normal leading-none text-primary-100 text-sm text-center tracking-tighter uppercase',
    )

    expect(
      createUtilityProps({
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
      }).utilityClassName,
    ).toBe('')
  })

  // --------------------------------------------------------
  // BACKGROUNDS

  it('computes background utility classes', () => {
    expect(
      createUtilityProps({
        backgroundColor: 'primary.100',
      }).utilityClassName,
    ).toBe('bg-primary-100')

    expect(
      createUtilityProps({
        backgroundColor: 'primary-100',
      }).utilityClassName,
    ).toBe('bg-primary-100')

    expect(
      createUtilityProps({
        backgroundColor: '#ff428e',
      }).utilityStyle,
    ).toStrictEqual({
      backgroundColor: '#ff428e',
    })

    expect(
      createUtilityProps({
        backgroundColor: 'primary.oops',
      }),
    ).toStrictEqual({
      utilityClassName: '',
      utilityStyle: { backgroundColor: 'primary.oops' },
      filteredProps: {},
    })

    expect(
      createUtilityProps({
        backgroundColor: undefined,
      }).utilityClassName,
    ).toBe('')
  })

  it('looks up background utility classes', () => {
    const theme = createTheme({
      backgroundColor: {
        surface: '#eee',
      },
    })
    initializeUtilityPropsTheme(theme)

    expect(
      createUtilityProps({
        backgroundColor: 'surface',
      }),
    ).toStrictEqual({
      utilityClassName: 'bg-surface',
      utilityStyle: undefined,
      filteredProps: {},
    })

    // Assert that theme has colors, but that theme.backgroundColor is preferred
    expect(theme.colors.primary[100]).toBeTruthy()
    expect(
      createUtilityProps({
        backgroundColor: 'primary.100',
      }),
    ).toStrictEqual({
      utilityClassName: '',
      utilityStyle: { backgroundColor: 'primary.100' },
      filteredProps: {},
    })
  })

  // --------------------------------------------------------
  // BORDERS

  it('computes border utility classes', () => {
    expect(
      createUtilityProps({
        border: true,
        borderTop: true,
        borderRight: true,
        borderBottom: true,
        borderLeft: true,
        borderWidth: 8,
        borderColor: 'primary',
        borderRadius: 'full',
        radius: 'lg',
      }).utilityClassName,
    ).toBe(
      'border border-t border-r border-b border-l border-8 border-primary rounded-full rounded-lg',
    )

    expect(
      createUtilityProps({
        border: false,
        borderTop: false,
        borderRight: false,
        borderBottom: false,
        borderLeft: false,
        borderWidth: undefined,
        borderColor: undefined,
        borderRadius: undefined,
        radius: undefined,
      }).utilityClassName,
    ).toBe('')
  })

  // --------------------------------------------------------
  // EFFECTS

  it('computes effects utility classes', () => {
    expect(
      createUtilityProps({
        boxShadow: true,
      }).utilityClassName,
    ).toBe('shadow')

    expect(
      createUtilityProps({
        boxShadow: undefined,
      }).utilityClassName,
    ).toBe('')
  })

  // --------------------------------------------------------
  // STATE

  it('computes state classes', () => {
    expect(createUtilityProps({ active: true, disabled: true }).utilityClassName).toBe(
      'C9Y-active C9Y-disabled',
    )
    expect(
      createUtilityProps({ active: true, disabled: true }).filteredProps,
    ).toStrictEqual({
      disabled: true,
    })

    expect(createUtilityProps({ active: false, disabled: false }).utilityClassName).toBe(
      '',
    )
  })
})
