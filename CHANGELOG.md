# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

#### [Unreleased]

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
