# Theme definition

- Date: 1/7/22

## Context and Problem Statement

A good theme structure is a critical resource for implementing design system
component libraries. Users need to be able to define their design tokens in an
organized, semantic structure.

Like most design system requirements, creating a system that is both flexible
enough for customization, but useful out of the box is really tricky. Some users
will prefer a range of values (similar to the default theme in Tailwind), while
others will prefer to use semantic naming conventions to constrain usage.

## Decision Drivers

- Theme should be defined by a set of design tokens, meaning the final theme is
  a set of values only.
- The default theme structure should be concise to improve maintainability.
- Theme structure should be flexible, users should be able to add theme
  namespaces and values that are contextual to their systems.
- Theme should follow common patterns defined by other design systems when
  possible.

## Decision Outcome

_Summary: The Componentry default theme uses generic theme names and doesn't
attempt to define a semantic naming system._

The default theme structure matches the Tailwind theme structure. This meets the
goal of a set of common, familiar, descriptive names for the generic values
while also making it extremely easy to use a single theme value for Componentry
styles and Tailwind utilities.

ℹ️️ Notes: Early iterations attempted to provide helpful semantic names for
theme values, eg a specific `borderColor` namespace for constraining a defined
set of border colors, but this quickly started to feel prescriptive in a
non-helpful way. These semantic namespaces can be great improvements to a design
system, but defining them in Componentry is too hard to get right for everyone.

ℹ️️ Notes: This is a big departure from the early days of this library which
used a large set of individual variables matching Bootstrap. This theme
definition was difficult to document and understand relationships in.

### Positive Consequences

- Theme surface area is small, so it is easy for consumers to customize.
- Componentry isn't boxing users into conventions that aren't right for their
  systems.

### Negative Consequences

- Users will need to define their own semantic namespaces for themes (eg decide
  if the `colors` namespace should have a `text` sub-namespace).
- Library utility classes will be for all colors which makes consistency across
  larger teams more difficult.

## Background

Naming choices considered:

- `theme.breakpoints` vs `theme.screens`
- `theme.colors` vs `theme.palette`
- `theme.text` vs `theme.typography`

Survey of names used by other design systems:

| System          | Screens           | Colors       | Text       |
| --------------- | ----------------- | ------------ | ---------- |
| Primer          | breakpoints+sizes | colorSchemes | n/a        |
| Polaris         | ??                | colors       | typography |
| Atlassian       | ??                | color        | typography |
| Tailwind        | screens           | colors       | n/a        |
| ChakraUI        | breakpoints       | colors       | n/a        |
| Material UI     | breakpoints       | palette      | typography |
| Material Design | ??                | color        | typography |
| Spectrum        | breakpoints       | color        | typography |

- "Breakpoints" is a very familiar term, Tailwind seems to be the only library
  that refers to them as "screens".
- "Color(s)" is the most common way to define color in design system (eg Polaris
  and Atlassian), MUI seems to be the only one to use "palette".
- Although most libraries don't have a namespace for their tokens, "Typography"
  is the most common way to group styles for text in design systems (eg Polaris
  and Atlassian)

## Links

- Example DS matching Componentry structure:
  [Polaris](https://polaris.shopify.com/design/design)
- Example DS matching Componentry structure:
  [Atlassian](https://atlassian.design/)
