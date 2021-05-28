# componentry changelog

> Changelog tags
>
> - 💥 - Breaking change
> - 🔖 - Release notes
> - 💖 - New feature
> - ✨ - Updates
> - 🛠 - Fixes

<!--
## Unreleased items

- ...
-->

## [3.4.1](https://github.com/crystal-ball/componentry/compare/v3.4.0...v3.4.1) (2020-05-28)

### 🛠 Fixes

- `useTheme` throwing errors in valid use cases.
- Sass merge logic combining padding, margin, borders values instead of overwriting them.

## [3.4.0](https://github.com/crystal-ball/componentry/compare/v3.3.1...v3.4.0) (2020-05-14)

### 💖 New

- Types updated to strict type checking

### 🛠 Fixes

- Add missing utility prop types

## [3.3.1](https://github.com/crystal-ball/componentry/compare/v3.3.0...v3.3.1) (2020-03-21)

### 🛠 Fixes

- Flex SASS filename casing mismatch

## [3.3.0](https://github.com/crystal-ball/componentry/compare/v3.2.0...v3.3.0) (2020-03-21)

### 💖 New

- Text component shorthand props `align` and `color` added for setting text alignment and color.
- Types added for all components for `fontColor`, `textAlign`, `width`, `backgroundColor` and `borderColor`.
- Module augmentation to override utlity prop types added to library.

### ✨ Updates

- Styles only entry `_index.scss` added to ensure library styles can be imported as `~componentry/styles`

### 🛠 Fixes

- Misc className mismatches resulting from TS updates.

## [3.2.0](https://github.com/crystal-ball/componentry/compare/v3.1.0...v3.2.0) (2020-03-10)

### 💖 New

- Styles only entry added at `~componentry/styles` for convenience setting up the library.

### 🛠 Fixes

- Responsive and flex classes mismatched between styles and component output.

## [3.1.0](https://github.com/crystal-ball/componentry/compare/v3.0.0...v3.1.0) (2020-02-28)

### TYPESCRIPT 🎉

**Componentry is now written in TypeScript 🎉🎉🎉**

Adding types has been a wishlist item for a long time. Types provide such a
great developer experience upgrade, and increase the quality of the codebase. 

_Although this is a minor release it is a little spicy 🌶 because updating to TS
required changing every file in the library 😬._

### Upgrades

- The `classnames` package has been replaced with `clsx` for a performance boost.

## [3.0.0](https://github.com/crystal-ball/componentry/compare/v2.5.0...v3.0.0) - 2020-05-17

After nearly two years of tinkering and optimizing, Componentry v3 is released 🎉

v3 is essentially a new library, so breaking changes aren't listed. The
recommended migration path is to install both the v2 and v3 branches
simultaneously, using a git tag for the v2 branch. The v3 components and styles
are prefixed and shouldn't cause conflicts when both are used.

### V3 Improvements 💖

- Components are using the latest React features, including the updated context
  API and hooks. As a result the code for handling components with active state
  is smaller and easier to maintain.
- Styles are fully customizeable. The library base theme and component styles
  are now written with SASS maps and every line of component styles can be
  overridden.
- Component behavior and appearance styles have been split into base and variant
  classes. A few useful variants ship with Componentry, and it's possible to add
  additional style variants without having to figure out how to extend behaviors
  like visibility.
- System props provide convenience methods for setting Tailwind CSS inspired
  utility classes. Each component accepts system props, and the utility styles
  can be used stand-alone.
- New Block, Flex, and Text components make creating layouts and consistent
  text elements faster. These base components provide convenient building blocks
  for composing custom components.

### 🛣 Roadmap

The initial v3 release offically includes the `Block`, `Flex`, `Icon`, `Text`,
and `Theme` components. The remaining components can be imported, but their
styles still need to be transitioned to SASS maps and variants so there will
be changes.

The `Anchor` and `Button` components will be released next.

The active components, including `Active`, `Drawer`, `Dropdown`, `Tooltip` and
`Popover` will be released after that.

Remaining components will be queued and released after that.

Build something radical 💖


## [3.0.0-alpha.12] - 2018-11-16

## Updated

- Added `position` prop to handle position utility classes.
- Added `.text-line-through` utility class for line through decoration
- Added `button` prop to Anchor component to toggle button styles
- Fixed modal footer bg variable usage

## [3.0.0-alpha.11] - 2018-10-30

## BREAKING CHANGES

- The Modal.Header now uses the `close` props (instead of `Close`) as the flag
  to render a close element, and internally renders the `Modal.Close` subcomponent
  instead of the Close prop.
- Dropdown util `.dropdown-menu-right` renamed to `.dropdown-content-right` to align
  with subcomponent naming.
- All Active.Trigger subcomponent classnames have been renamed from `.elem-toggle`
  to `.elem-trigger` to align with subcomponent naming.

## Updated

- Fixed mx/y and px/y props failing to return appropriate styles
- Added the ButtonGroup component 🎉
- Added `.justify-content-evenly` class to match Flex justify prop `evenly`
- Added `$font-size-monospace` SASS var
- Active elements now accept a `size` prop that will include an `.element-size`
  className
- Dropdown Sass vars added for size variants:

  $dropdown-font-size(-sm/lg), $dropdown-font-weight(-sm/lg), $dropdown-item-padding-(x/y)-(sm/lg)

## [3.0.0-alpha.10] - 2018-10-25

## Fix

- Remove references to `prop-types` in lib src
- Fix publishing references

## [3.0.0-alpha.9] - 2018-10-25

## BREAKING CHANGES

- The updated atomic styles handling passes values directly through, so spacing
  number values are no longer converted to classNames,

  eg: `m={3}` will now return `margin: 3px` instead of `className="m-3"`
- The `content` styles are no longer included by default in the base `componentry`
  styleset. These styles have not been evaluated and are completely opt-in now.
- The `size` mixin has been deleted. It doesn't seem to be needed...

## Updated

- Added a Block component to complement the Flex component
- Added componentry library atomic styles utility in `/src/utils/componentry`
- Added initial library typings for Active, Button and Dropdown components
- Added `border` border color to create a utility border class
- Fixed the Active.Trigger elements failing to render anchor nodes when passed
  an href.
- Fixed items with tabindex showing outlines on click
- Added `.flex-basis-0` and `.flex-basis-1` atomic classes
- Added `.min-100vw` and `.min-100vh` atomic classes for working with page
  level containers
- Moved all typography related classes to `/atomic/text`
- Refactored subcomponent assignment to be more explicit

## [3.0.0-alpha.8] - 2018-10-19

## BREAKING CHANGES

- Following the pattern of explicit classNames usage, the outline button variant
  is now used without the color modifier class. The color modifier class and the
  outline class are not additive, so it doesn't make sense to use them in an
  additive way. The outline prop now takes the color of the outline button!

## Updated

- The `btn-container-<x/y>` classes have been added to automatically create
  spacing between buttons in a container.
- An issue where using the FaCC render pattern with active containers wouldn't
  render the containing wrapper is fixed.
- The text utility class `.suppress-text-decoration` was added.

## [3.0.0-alpha.7] - 2018-10-18

## BREAKING CHANGES

- Button disabled theme vars have been replaced with the new state maps.

### Updated

- State maps added to buttons and alerts to allow granular overrides by theme
  color and state.
- Anchor styles updated to style active and disabled states.

## [3.0.0-alpha.6] - 2018-10-17

## BREAKING CHANGES

- Library no longer inserts CSS Variables by default, they can be used for SASS
  vars where needed.

### Updated

- Fix using `defaultProps` overriding context
- Add `btn-bg-states` config mechanism
- Add `Input component

## [3.0.0-alpha.5] - 2018-10-02

## Added

- `$icon-color` variable added to define default icon color.
- Active.Trigger components handle button style API props.

## [3.0.0-alpha.4] - 2018-10-01

## BREAKING CHANGES

- The Button `link` prop is renamed to `anchor`. This more closely reflects the
  use of classes `btn-link` and `btn-anchor`.
- The Icon component now adds class `icon-NAME` instead of `icon NAME`. This is
  to ensure icon classes are always properly scoped and prevent issues for icons
  with ids like `alert`.
- The library now uses size props `sm` and `lg` for all size classes. This is
  breaking for Button and Modal component.

## Added

- Components with mouse events can now be disabled with prop `mouseEvents`
- Button component now supports all typography props
- Close `$close-decoration` and `$close-hover-decoration`
- Modal `$enable-modal-transform`
- Type props added to Button and Type components

## Fixed

- `$btn-disabled-border` fixed to `$btn-disabled-border-color`

## Changed

- Modal header is now align to flex start instead of center

# [3.0.0-alpha.3] - 2018-09-24

## BREAKING CHANGES

- The active trigger factory no longer uses the `Button` component as the render
  element. This fixes issues with Button context being applied to incorrect
  elements, but also means you can no longer use Button api props directly with
  active triggers unless you use an `as={Button}`. Adding these props back is
  planned.
- Nav.Item classes have been updated to match List.Item classes. Previously the
  nav item classes were targeted at anchors, the new `nav-item-action` class is
  targeted at anchor and button elements.
- Tab component styles have been completely rewritten. They're more explicitly
  mapped to the Tab component, and have more theming variables available.

## Added

- Modal theming for header, title and footer

## Refactors

- Modal body clicks are now managed with a stop propagation handler on the modal
  body.

# [3.0.0-alpha.2] - 2018-09-18

## Added

* All library components now support space util props.
* The `Text` component has been added and shares the same API as the `Anchor`
  and `Header` compoents. These type components are considered stable enough to
  begin using and tracking changes against.
* Theme variables `background` and `foreground` added to simplify dynamic
  theming of type elements.

## Refactors

* Button custom mixins have been replaced with appropriate SASS variables
* Anchor styles have been moved out of `reboot.scss` into `Type/anchor.scss`
* Reboot styles have been condensed to only output one ruleset per element to
  clean up debugging.

## Fixed

* Packages `hoist-non-react-statics` and `prop-types` have been removed from
  project dependencies and peer-deps.

# [3.0.0-alpha.1] - 2018-09-06

## BREAKING CHANGES

* React 16.3 now required!
* Alert and Button outline classes refactored to work WITH color classes instead of REPLACING them.

## Refactors

* Use React context
* Component factories required for clarity and consistency
* Element factory refactored to only handle returning JSX
* Theme, Active, and Visible states/data separated into individual HOCs

# [3.0.0-alpha.0] - 2018-06-26

See the v3 migration doc for in progress updates.

## [2.2.0] - 2018-03-14

### Fixed

* Popover content alignment styles fixed for left direction popovers.

### Added

* Active.Trigger components now accept a `decoration` prop that is rendered
  after the component children. The ThemeProvider can be used to include a
  decoration in all instances of any trigger component by default.
* The ModalHeader component now accepts a `Close` prop of type component that
  will be passed an `onClick` that will call the modal instance's `deactivate`
  prop. The ThemeProvider can be used to set the Close component for all modal
  headers by default.

## [2.1.1] - 2018-03-07

### Fixed

* Ensure svg icons show in Safari with `xlinkHref`

## [2.1.0] - 2018-03-04

### Added

* Styles for right aligned menu added to the dropdown styles.
* Dropdown chevron icon flip added to Jetpack collection.

## [2.0.1] - 2018-03-03

### Fixed

* Corrected npm publish ignore files.
* Fix checking list group children props validation.

## [2.0.0] - 2018-02-17

### Componentry v2 🎉 🎉 🎉

Componentry v2 is the first stable release of the library _(lesson learned: be
cautious initializing packages at 1.0.0)_. Going forward any change to component
APIs or classes or any change to the Bootstrap styles will follow semver and be
considered breaking changes.

## Breaking Changes 💥

* All non-essential styles have been moved to the Jetpack collection. This
  collection allows us to provide useful enhancements and utility classes in an
  opt-in fashion.

### Added

* So. much. documentation. goodness. 📖 🎉 💯
* ✨ New `<Close />` component 🎉
* ✨ New `<Icon />` component 🎉
* Utility gray classes for backgrounds, borders and text added to
  `jetpack/grays`.
* Library `no-scroll` class added to replace `modal-open`, the `no-scroll` class
  can be used by any component that needs to freeze scroll (eg freeze scroll on
  mouseenter for scrollable dropdowns)

### Removed

* Modal `ariaTitle` is removed, the `Modal.Title` component should be used with
  class `sr-only` for modals without visual titles.

## [2.0.0-beta.5] - 2018-01-18

### Changed

* Update Bootstrap styles to v4 🎉

## [2.0.0-beta.4] - 2018-01-18

### Changed

* Poppers now use a content container to create a positioned ancestor with width
  equal to popper max, this allows removal of hacky width calculations inside
  the popper content component 🎉

### Fixed

* Props and context classNames passed through to `<NavItem />`

## [2.0.0-beta.3] - 2018-01-18

### Changed

* Bundled Bootstrap styles updated to Bootstrap v4 beta.3
* Modal component updated to better align with Bootstrap

### BREAKING CHANGES

* Update of Bootstrap styles includes all breaking changes made in the Bootstrap
  beta.3 update
* The modal component uses the `<Fragment />` component with the modal and
  modal-backdrop as siblings with no root. React with Fragments (^16.2) required

## [2.0.0-beta.2] - 2018-01-18

### Fixed

* Body is now frozen on modal open allowing long modals to scroll.

## [2.0.0-beta] - 2017-12-05

### Fixed

* `<Alert/>` components now render visible by default. The `withActive` HOC has
  been updated to accept a `defaultActive` configuration to enable this.

### Changed

* The `<State/>` component has been renamed to `<Active/>` for better semantics.
* The `withState` HOC is removed. The `<State>` component supports yielding
  active state and handlers through function as a child.

## [2.0.0-alpha.4] - 2017-11-20

### Fixed

* Display names for `Alert`, `Modal` and `ModalTitle` components fixed.
* Correctly handle passing active props directly to `withState`.
* Remove event listeners in `state-container` components on
  `componentWillUnmount`.
