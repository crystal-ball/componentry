/*                                 ⚙️ Componentry default theme specification
 * -------------------------------------------------------------------------- */

const gray = {
  100: '#eff2f3',
  200: '#d7dfe2',
  300: '#bfcbd1',
  400: '#90a4ae',
  500: '#607d8b',
  600: '#56717d',
  700: '#3a4b53',
  800: '#2b383f',
  900: '#1d262a',
}

export const themeDefaults = {
  // --- SCREENS
  screens: {
    //   Componentry has a single breakpoint by default, additional breakpoints can
    //   be added. 1200px is used for the default to try and ensure all smaller
    //   desktops are included. (992, 1200, 1280 are the most common large breakpoints)
    //   For multiple breakpoints 768 and 1280 are common breakpoints for md and lg.
    lg: '1200px',
  },

  // --- COLORS
  colors: {
    current: 'currentColor',
    transparent: 'transparent',
    background: '#fff',
    inverse: '#eff',
    gray,
    primary: {
      100: '#f2f1ff',
      200: '#dfddff',
      300: '#cbc9ff',
      400: '#a4a0ff',
      500: '#7d77ff',
      600: '#716be6',
      700: '#4b4799',
      800: '#383673',
      900: '#26244d',
    },
    info: {
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    success: {
      100: '#f4f9ed',
      200: '#e4f1d2',
      300: '#d4e8b7',
      400: '#b3d681',
      500: '#93c54b',
      600: '#84b144',
      700: '#58762d',
      800: '#425922',
      900: '#2c3b17',
    },
    warning: {
      100: '#fdf8ec',
      200: '#fbedcf',
      300: '#f9e2b2',
      400: '#f4cd78',
      500: '#efb73e',
      600: '#d7a538',
      700: '#8f6e25',
      800: '#6c521c',
      900: '#483713',
    },
    error: {
      100: '#fbeeed',
      200: '#f6d4d3',
      300: '#f0bab9',
      400: '#e48784',
      500: '#d9534f',
      600: '#c34b47',
      700: '#82322f',
      800: '#622524',
      900: '#411918',
    },
  },

  // --- LAYOUT
  zIndex: {
    modal: 10,
  },

  // --- FLEX/GRID
  flexGrow: { 0: 0 },
  flexShrink: { 0: 0 },

  // --- SPACING
  spacing: {
    0: 0,
    px: '1px',
    0.5: '0.125rem', // 2px
    1: '0.25rem', // 4px
    1.5: '0.375rem', // 6px
    2: '0.5rem', // 8px
    2.5: '0.625rem', // 10px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    7: '1.75rem', // 28px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    14: '3.5rem', // 56px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    32: '8rem', // 128px
    48: '12rem', // 192px
    64: '16rem', // 256px
  },
  /**
   * spacingRatio allows defining a spacing conversion function for computing
   * spacing values.
   * @remarks
   * This is useful when using Componentry with other component libraries that
   * depend on computing spacing values.
   * @example
   * {
   *   // Convert any arbitrary value to an 8px grid value
   *   spacingRatio: base => `${base * 8}px`
   * }
   */
  spacingRatio: undefined as undefined | ((base: number) => string),

  // --- SIZING
  height: {
    0: 0,
    auto: 'auto',
    full: '100%',
    screen: '100vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
  },
  width: {
    0: 0,
    auto: 'auto',
    full: '100%',
    screen: '100vw',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    prose: '65ch',
  },

  // --- TYPOGRAPHY
  fontFamily: {
    body: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    monospace:
      "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontSize: {
    base: '1rem', // HTML base size
    small: '0.875rem',
    large: '1.25rem',
    h1: '3rem',
    h2: '2rem',
    h3: '1.5rem',
    body: '1rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeight: {
    none: 1,
    normal: 1.5,
  },

  textColor: undefined as { [Color: string]: string } | undefined, // Optional semantic typography colors definition

  // --- BACKGROUND

  backgroundColor: undefined as { [Color: string]: string } | undefined, // Optional semantic background colors definition

  // --- BORDERS
  border: {
    DEFAULT: `1px solid ${gray[500]}`,
  },
  borderRadius: {
    DEFAULT: '0.25rem', // 4px
    none: '0px',
    full: '9999px',
    sm: '0.125rem', // 2px
    md: '0.375rem', // 6px
    lg: '6px', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    '3xl': '1.5rem', // 24px
  },
  borderStyle: {
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
    hidden: 'hidden',
    none: 'none',
    solid: 'solid',
  },
  borderWidth: {
    0: 0,
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },

  borderColor: undefined as { [Color: string]: string } | undefined, // Optional semantic border colors definition

  // --- EFFECTS
  boxShadow: {
    DEFAULT: '0 0.5rem 1rem rgba(73, 80, 87, 0.15)',
  },
}
