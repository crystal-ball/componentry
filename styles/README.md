# CSS In Componentry
Componentry is built to work as seamlessly as possible with Bootstrap v4. As little
CSS as possible is used in the project to minimize interference with Bs styling.
Style rules in Componentry are included in the cases where optimizations over the
existing Bs styles became possible.

## Import Structure
Componentry uses the same SCSS variables as Bootstrap, so that the styling between
components and Bs elements is the same. Include them in your project like so:

```scss
// 1. Theme Variables
// Import custom variables to theme Bootstrap and Componentry
@import 'theme/variables';

// 2. Bootstrap Styles
// Import the Bootstrap library to create base style ruleset
@import '~bootstrap/scss/bootstrap';

// 3. Componentry Styles
// Import Componentry styles on top of Bootstrap base ruleset
@import '~componentry/dist/componentry';

// 4. Application Styles
// Import application styles as final ruleset
@import 'application/styles';
```

## Clear Theme
Componentry includes a `Clear` theme as an example of customization, as well as a
clean modern theme that can be used in any applciation. It can be used by importing
the theme variables in your application first:

```scss
// 1. Theme Variables
@import '~componentry/dist/themes/clear';

// 2. Bootstrap Styles
// etc...
```

## Componentry Styles
Componentry enhancements to Bootstrap include:
- Using the `aria-hidden` attribute to handle showing/hiding elements instead of a
  class name. The `aria-hidden` attribute is used in all components for A++
  accesibility, and instead of duplicating the aria status in a class name
  Componentry extends the Bs styles to trigger off the aria status.
- Where possible floats have been replaced with flexbox rules.
- The `btn-unstyled` rule is intended to be used with the `btn-link` rule to create
  A++ accessible buttons styled to look exactly like anchors for any interactive
  element that is not a link to a different page.
- Included `icon` class adds base styles for font icons using SVGs.
- Tooltips and Popovers use a relative positioned container with absolute positioned
  children for DOM placement instead of fixed position. This removes necessity of
  calculating fixed top/left coordinates.
