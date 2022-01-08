/*                                 ⚙️ Componentry default theme specification
 * -------------------------------------------------------------------------- */

export const theme = {
  prefix: '🅲-',
  // --- SCREENS
  screens: {
    // Componentry has a single breakpoint by default, additional breakpoints can
    // be added. 1200px is used for the default to try and ensure all smaller
    // desktops are included. (992, 1200, 1280 are the most common large breakpoints)
    // For multiple breakpoints 768 and 1280 are common breakpoints for md and lg.
    lg: '1200px',
  },
  // --- COLORS
  colors: {
    current: 'currentColor',
    transparent: 'transparent',
    inverse: '#eff',
    gray: {
      100: '#eff2f3',
      200: '#d7dfe2',
      300: '#bfcbd1',
      400: '#90a4ae',
      500: '#607d8b',
      600: '#56717d',
      700: '#3a4b53',
      800: '#2b383f',
      900: '#1d262a',
    },
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

  // --- SPACING
  spacing: {
    0: 0,
    0.5: '0.25rem', // 4px
    1: '0.5rem', // 8px
    1.5: '0.75rem', // 12px
    2: '1rem', // 16px
    3: '1.5rem', // 24px
    4: '2rem', // 32px
    5: '2.5rem', // 40px
    6: '3rem', // 48px
  },
  // --- TYPOGRAPHY
  fontFamily: {
    body: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.25rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  lineHeight: {
    none: 1,
    normal: 1.5,
  },
  // --- BORDERS
  borderWidth: {
    DEFAULT: '1px',
  },
  borderColor: {
    DEFAULT: '#607d8b', // matches gray.500
  },
  borderRadius: {
    DEFAULT: '4px',
    sm: '2px',
    md: '4px',
    lg: '6px',
  },
  // --- SHADOWS
  boxShadow: {
    DEFAULT: '0 0.5rem 1rem rgba(73, 80, 87, 0.15)',
  },
} as const
