# TODO

## Breaking

1. Rename Trigger -> Action (This needs to be done before moving any of the
   Active components to published)

## Housekeeping

1. Update className to cx everywhere
1. Move factories into /factories
1. Setup emoji className prefixes for all components
1. Rename doc block 'components' that are actually subcomponents, eg Table.Cell

## Small upgrades

- Add System props for `flex-grow`, and `flex-shrink`.
- Add fullWidth prop that sets a `.min-w-full` class for 100% width

## Testing

- Can the `to` for Button/Link be overridden to allow things like:
  `to={{ path: '/path' params: { status: 'rad' }}}`

## Types

- Can the `propsDefaults` in `element` be more defined?
