# TAILWIND

Problem: Tailwind really wants to scan files for generated classNames, but
Componentry uses generated classNames, eg `flex-${direction}`. This is a problem
for utility classes and a harder problem for generated color classes, eg theme
color "love" for font `text-love`

### SOLUTIONS

1. Use safelist in config: Requires user safelist all classes, kind of tedious
2. Scan .ts files and include all classes in a type, kind of clever, but what
   about colors?? eg font-love?
3.

Recap: Starting in v3 Tailwind is JIT by default for everything. How to get the
styles we need included?

Ideally: we include the styles that the library will generate.

- Future: will require thinking through media queries for layout
  flex/grid/padding styles...
