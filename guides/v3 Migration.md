# v3 Migration Guide

This guide contains an overview of changes that would impact consumers of
Componentry.

## Todo:

- Make the `close` svg a little smaller, it's a little big

## Breaking changes

- The `$include-icons` variable is defaulted to `false` now.
- Drawer and Accordion toggle no longer have default margin bottom, see the demo
  for an example of using the Drawer and Card component together.
- The non-standard dropdown classes `dropup`, `dropright`, `dropleft` and
  `dropdown-menu` have been removed.
- Styles are no longer published at `/dist`! Styles are published in `/styles`.
- The `ListGroup` component has been renamed to `List`. It will be updated with
  props to work with any lists, eg `.list-unstyled`. This also reflects the
  evolution from a Bootstrap implementation, to a sensible defaults/naming
  library.
- The `.focus` classes have been removed from the `Button` styles. Any focus
  should be handled using the `:focus` psuedo selector, and elements should be
  programaticaly focused.
- The library no longer alters the default browser focus styles. Outlines are
  left as defaults, and a utility method `setup-outline-handlers` has been added
  that will suppress focus outlines in an accessible manner for mouser and touch
  users only. This has also cleaned up much of the original Button box-shadow
  styles.

## Updates

- Added `Flex` component 💖
- Added `Header` component 💖
- Added `Anchor` component 💖
- Button has a `block` prop to toggle full width buttons 🎉
- The Bootstrap mixins have been separated based on if they are used as utility
  mixins in multiple places, or in a single component file.
- The Bootstrap files have been extracted into Componentry styles file, there is
  now a single entry for the library! The new entry is: `componentry.scss`
  1.  `theme.scss`: includes functions/mixins/variables (old Bootstrap)
  1.  `initialize`: includes css variables and reboot
  1.  `content`: optional include for type, forms, images, tables, code
  1.  `components`: includes each of the component styles
  1.  `atomics`: includes all of the utility styles
- An `outline` style has been added to the `Alert` component.
- A new mixin strategy has been setup:Componentry favors atomic classes over
  using mixins to compose styles. The preferred usage of mixins is to generate
  entire classes, like breakpoint mixins.
- Fixed long modals not scrolling

## Deprecated

- The `$colors` variables and `$colors` map. The library doesn't use these
  colors, only the theme-colors. Apps that would like to set their own colors
  map can continue to do so.

## Roadmap

- [ ] Evaluate the mixins in `theme` and convert them to atomic classes wherever
      possible.
- [ ] Remove all `.show` classes, relying consistently on `aria-hidden` states
- [ ] Use `.modal-scrollbar-measure` to add body padding for modal show/hide in
      Windows that accounts for scrollbar addition
- [ ] Extract Accordion component and styles to separate folder
- [ ] Create a 'Layout' section in component docs, add `Media` and `Flex` components
