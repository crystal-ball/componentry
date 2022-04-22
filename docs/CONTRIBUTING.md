# Contributing Guide for 🔮 Projects

_👋 Welcome and thank you for contributing, you are awesome 🎉_

## Code of Conduct

Please read the repository [Code of Conduct][], we take it seriously and
contributors are required to adhere to the guidelines.

## Code authoring

This project uses ESLint and Prettier to make writing consistent code easy.
Formatting and linting can be run with npm commands:

```sh
# Format the project with Prettier
npm run format

# Lint the project with ESLint
npm run test:lint
```

## Roadmap

_ℹ️ Roadmap items track long term project goals, see the [ZenHub board][] for
ready to work issues._

- Add experimental dark mode support to `<Media />`. There is basically no
  support for this media query yet... but these queries can be checked for
  truthy values to determine which mode to use
  - darkScheme: `window.matchMedia('(prefers-color-scheme: dark)')`
  - lightScheme: `window.matchMedia('(prefers-color-scheme: light)')`
- Add support for theming with an `$enable-themes` flag. Ideally theme colors
  would be css variables, but that would also mean the color calculations need
  to be replaced (which is probably fine)

<!-- Links -->
<!-- prettier-ignore-start -->
[Code of Conduct]:../CODE_OF_CONDUCT.md
<!-- prettier-ignore-end -->
