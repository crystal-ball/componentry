# v3 Migration Guide

This guide contains an overview of changes that would impact consumers of Componentry.

## Breaking changes

* The `$include-icons` variable is defaulted to `false` now.


## Updates

* An `outline` style has been added to the `Alert` component.


## Deprecated

* The `$colors` variables and `$colors` map. The library doesn't use these colors, only the theme-colors.
  Apps that would like to set their own colors map can continue to do so.
