# Theme shape

The primary goal that determined Compnentry's theme shape was creating a
flexible representation of the "design tokens" that make up most design systems.

Theming usually starts with four core elements: color, spacing, typography, and
iconography.

### Design considerations

- "Should all theme namespaces be plural"?

_defining a color system_

- "What to name the namespace for colors, 'palette' or 'color(s)'? MUI uses
  'palette', but almost every design system documentation uses 'Color'. Since
  Tailwind/Chakra use `colors` and Componentry aims to be easily useable with
  Tailwind that makes `colors` the best choice. Within the `colors` namespace
  all libraries accept flexible definitions of color values as either a
  string->value or map->value.

  - MUI: Color definitions in `palette` for: primary, secondary, error, warning,
    info, success. Each color definition has a: light, main, dark, contrastText.
  - Tailwind/Chakra: Color definitions in `colors` for: gray, red, yellow,
    green, etc. Each color definition is a 100-900 shade map.

- "Where should border/typography colors be constrained?" Allowing every single
  color value as a styled prop isn't a scalable solution for design systems,
  maintainers need a way to constrain the set of allowed values.

- On font colors:
  - Tailwind makes all palette colors available, but `textColor` enables
    overrides
  - MUI has a `palette.text` map
  - Chakra makes all palette colors available, without constraint

```js
const themeShape = {
  colors: {
    'current': 'currentColor',
    transparent: "transparent",
    // gray, primary, highlight, action success, warning, critical
    primary: {
      '100': #f2f1ff,
      // ...
      '900': #26244d,
    }
    // Consumers that want to constrain colors can create additional patterns within the
    // colors space, eg constraining text colors could look like adding values:
    // textLink, textSuccess, textBody, etc.
    // or could look like adding values:
    // text: { link, success, body }, etc.
    // This is a great way to improve consistency for text and border colors
  },
  spacing: {
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
  },
  typography: {
    fonts: {},
    fontColors: {},
    fontSizes: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {}
  },
  // ---
  borders: {
    border: '1px solid #333',
    accent: '1px solid #369'
  },
  shadows: {},
  sizes: {
    '100vh': '100vh',
  },
  zIndices: {},
  // ---
  breakpoints: {},
  radii: {},
  transitions: {}, // ???
  zIndex: {},
}
```

## Tailwind

https://tailwindcss.com/docs/theme

```js
const themeShape = {
  screens: {
    sm: '480px',
    md: '768px',
    // ...
  },
  colors: {
    // gray, orange, red, yellow, teal, ...
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
    // ...
  },
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    // ...
  },
  // Core plugins
  borderRadius: {},
  fontFamily: {},
  zIndex: {},
}
```

## MUI

- https://mui.com/customization/theming/
- https://mui.com/customization/default-theme/

```js
const themeShape = {
  breakpoints: {},
  palette: {
    // primary, secondary, error, warning, info, success
    // -> light, main, dark, contrastText
  },
  spacing: {},
  shape: {}, // ???
  shadows: {},
  typography: {},
  transitions: {}, // ???
  zIndex: {},
}
```

## ChakraUI

- https://chakra-ui.com/docs/theming/theme

_Theming based on Styled System specification_

```js
const themeShape = {
  breakpoints: {},
  colors: {
    // gray, orange, red, yellow, teal, ...
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      // ...
      900: '#171923',
    },
    // ...
  },
  // --- Typography
  fonts: {},
  fontSizes: {},
  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},

  space: {},
  sizes: {},
  radii: {},
  zIndices: {},
}
```

### Considerations

1. Tailwind
2. MUI
3. ChakraUI
4. ~Styled System~ Project is abandoned
