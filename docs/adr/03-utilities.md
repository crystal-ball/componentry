# Library Utilities

- Date: 1/17/22

## Context and Problem Statement

Componentry should provide a helpful set of utilities for making small style
adjustments.

## Decision Drivers

- Utilities can add significant maintenance overhead to the repo, we want to
  focus on high ROI.
- Tailwind utility classes are configurable, so we don't know all classes
  upfront.
- Although all utility values are technically strings, it's desireable to use
  numbers for values like spacing/sizing classes.

## Decision Outcome

Beginning in V4 Componentry will narrow utilities support to only create
classNames from utility prop values. This is intended to "lean in" to
Componentry helping drive alignment by encouraging use of a predefined set of
utility classes based on the design system theme. Removing ad-hoc styles support
encourages class usage, and helps highlight where custom values are being used.

## Considered Options

### Ad-hoc styles support

Option: Consider supporting ad-hoc styles for utility prop values that don't
match the user's theme values.

This option was rejected because it's convenient, but it also "encourages" using
any value and makes it difficult to track where one-off values have been used.
Going forward Componentry is focused on design system alignment across teams.

### Positive Consequences

- Sets a good direction on Componentry integrating closely with Tailwind, and
  providing the "guardrails" that will help teams stay consistent to a
  predefined theme.

### Negative Consequences

- Removes convenience feature of ad-hoc styles. Values not matching a theme
  value now have to be defined separately in a class.

## Links <!-- optional -->

_none_
