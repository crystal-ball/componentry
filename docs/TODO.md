# TODO

## Breaking

...

## Housekeeping

1. Update className to cx everywhere
1. Move factories into /factories
1. Setup emoji className prefixes for all components
1. Rename doc block 'components' that are actually subcomponents, eg Table.Cell

## Small upgrades

- Add utility props for `flex-grow`, and `flex-shrink`.
- Add fullWidth prop that sets a `.min-w-full` class for 100% width
- Rename direction props to `placement-<direction>`

## Testing

- Can the `to` for Button/Link be overridden to allow things like:
  `to={{ path: '/path' params: { status: 'rad' }}}`

## Types

- Can the `defaultProps` in `element` be more defined?
