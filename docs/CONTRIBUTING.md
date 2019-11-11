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

Commit messages are generated with [Commitizen][] to make writing consistent
commit messages easy. On commit a Husky pre-commit hook will start an
interactive terminal session to step through each part of the commit message
with prompts.

> ℹ️ Commitizen commit messages make it possible to use Semantic Release to
> automatically publish packages on change to master.

## Roadmap

_ℹ️ Roadmap items track long term project goals, see the [ZenHub board][] for
ready to work issues._

- ...

<!-- Links -->
<!-- prettier-ignore-start -->
[Commitizen]:https://commitizen.github.io/cz-cli/
[Code of Conduct]:../CODE_OF_CONDUCT.md
[ZenHub board]:https://github.com/crystal-ball/crystal-ball.github.io#workspaces/-projects-5b88b5c9af3c0a2186966767/board?repos=131720045
<!-- prettier-ignore-end -->
