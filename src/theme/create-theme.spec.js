import { createTheme } from './theme'
import { themeDefaults } from './theme-defaults'

describe('merge()', () => {
  it('merges theme values', () => {
    const theme = createTheme({
      colors: {
        gray: {
          200: '#333',
        },
      },
      fontWeight: {
        bold: 600,
      },
    })

    expect(theme.colors).toStrictEqual({
      gray: {
        200: '#333',
      },
    })

    expect(theme.fontWeight).toStrictEqual({
      bold: 600,
    })
  })

  it('extends theme values', () => {
    const theme = createTheme({
      extend: {
        colors: {
          gray: {
            200: '#333',
          },
        },
        fontWeight: {
          veryBold: 600,
        },
      },
    })

    // Spot check that theme defaults are carried through
    expect(theme.border).toStrictEqual(themeDefaults.border)
    expect(theme.colors.primary).toStrictEqual(themeDefaults.colors.primary)

    // Check that defaults are extended
    expect(theme.fontWeight).toStrictEqual({
      light: 300,
      normal: 400,
      bold: 700,
      veryBold: 600,
    })
    expect(theme.colors.gray).toStrictEqual({
      100: '#eff2f3',
      200: '#333',
      300: '#bfcbd1',
      400: '#90a4ae',
      500: '#607d8b',
      600: '#56717d',
      700: '#3a4b53',
      800: '#2b383f',
      900: '#1d262a',
    })
  })
})
