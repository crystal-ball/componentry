# Contributing to Componentry

Contributions are welcome! This guide is a resource for navigating the project
structure and conventions.

## Code of Conduct

Please read the repository [Code of Conduct][coc], we take it seriously and
contributors are required to adhere to the guidelines.

## Development process

Development work in the project is done inside Storybook stories. The stories
for each component are colocated in the component folder.

Get started developing Componentry with the following steps:

1. Fork and clone the repository.
1. Install all dependencies with `npm install`. _(We use NPM ^5.6 to manage
   dependencies.)_
1. Start the Storybook development server with `npm start`.
1. Make your changes and add or update tests. Ensure the test suite still passes
   by running `npm test`.
1. Create a PR! Thank You 🎉!!!

#### Committing with Commitizen

[Commitizen][] is configured to provide consistent commit messages and enable
automatic semantic releases. A Husky pre-commit hook will start an interactive
terminal session to help build a commit message.

#### Style guide

This project follows the [Crystal Ball org style guide][eloquence]. Code
standards are enforced with ESLint and formatting is automated with Prettier.

<!-- Link -->

[commitizen]: https://commitizen.github.io/cz-cli/
[eloquence]: https://github.com/crystal-ball/eslint-config-eloquence
[coc]: ../CODE_OF_CONDUCT.md
