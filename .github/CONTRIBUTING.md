# Contributing to Componentry

Contributions are welcome! This guide is a resource for navigating the package
structure and conventions.

## Code of Conduct

Please read the repository [Code of Conduct][coc], we take it seriously and
contributors are required to adhere to the guidelines.

## Development process

Get started developing Componentry with the following steps:

1. Fork and clone the repository.
1. Create a branch off of `develop`. The `master` branch is for releases,
   development and PRs should target develop branch, this will ensure you have
   all in flight work.
1. Install all dependencies with `npm install`. We use NPM ^5.6 to manage
   dependencies.
1. Start the development server for the documentation app with `npm start`. The
   documentation app is used for developing the library code.
1. Make your changes and add or update tests. Ensure the test suite still passes
   by running `npm test`.
1. Create a PR! Thank You 🎉!!!

#### Committing with Commitizen

[Commitizen][] is configured to provide consistent commit messages and enable
automatic semantic releases. Run `npm run commit` to be guided through a commit
message.

#### Style guide

This project follows the [Crystal Ball org style guide][eloquence]. Code
standards are enforced with ESLint and formatting is automated with Prettier.

<!-- Link -->

[commitizen]: https://commitizen.github.io/cz-cli/
[eloquence]: https://github.com/crystal-ball/eslint-config-eloquence
[coc]: ../CODE_OF_CONDUCT.md
