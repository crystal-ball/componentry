Dynamic props

Issue #400

- Ideal to start with support for spacing and sizing
- Need ability to configure theme => start by passing theme from element
  creator? Requires threading through components, maybe start with a configure
  fn??
  - In future support using ThemeProvider?
- Do NOT support a ratio => sizing scale is generous, if size doesn't fall into
  the scale it's a custom value. (At that point arbitrary is arbitrary)

For each prop:

1. Check if prop value is a theme key => if yes className
2. Else use custom value
3. Prefer rem?? =>

Write a codemod for converting values that aren't in the theme to px, eg ∆ 3.75
to 30px Motivation: help encourage alignment to the scale.

Avoid arbitrary styles:

1. Custom syntax
2. Enables consistency drift

AFTER

- Add props for grid so that you can inline grid-template-columns without
  needing a class
