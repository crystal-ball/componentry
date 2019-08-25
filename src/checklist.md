# Component readiness checklist

- [ ] `as` prop for changing root element
- [ ] `flavor` prop for changing base className

- [ ] Handle Componentry props like mt, pt, etc.

# How the components work:

1. App theme values can be set by the ThemeProvider component, and inside each
   component the useTheme hook is called to lookup any defaults

# Gotchas

- The library can't use `defaultProps` because then that prop will always have a
  value, and users can no longer set a default value using the theme context.
