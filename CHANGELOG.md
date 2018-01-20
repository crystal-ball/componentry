# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

#### [Unreleased]

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
