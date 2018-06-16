# v3 Migration Guide

This guide contains an overview of changes that would impact consumers of Componentry.

## Todo:

* Make the `close` svg a little smaller, it's a little big

## Breaking changes

* The `$include-icons` variable is defaulted to `false` now.
* Drawer and Accordion toggle no longer have default margin bottom, see the demo
  for an example of using the Drawer and Card component together.


## Updates

* The Bootstrap mixins have been separated based on if they are used as utility mixins
  in multiple places, or in a single component file.
* The Bootstrap files have been extracted into Componentry styles file, there is now a
  single entry for the library! The new entry is: `componentry.scss`
  1. `theme.scss`: includes functions/mixins/variables (old Bootstrap)
  1. `initialize`: includes css variables and reboot
  1. `content`: optional include for type, forms, images, tables, code
  1. `components`: includes each of the component styles
  1. `atomics`: includes all of the utility styles
* An `outline` style has been added to the `Alert` component.


## Deprecated

* The `$colors` variables and `$colors` map. The library doesn't use these colors, only the theme-colors.
  Apps that would like to set their own colors map can continue to do so.
