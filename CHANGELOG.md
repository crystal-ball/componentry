# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

#### [Unreleased]

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
