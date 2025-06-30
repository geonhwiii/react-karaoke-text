# Contributing to React Karaoke Text

We love your input! We want to make contributing to React Karaoke Text as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with GitHub

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Development Setup

### Prerequisites

- Node.js (18+)
- Bun (recommended) or npm/yarn/pnpm

### Setup

```bash
# Clone your fork
git clone https://github.com/your-username/react-karaoke-text.git
cd react-karaoke-text

# Install dependencies
bun install

# Start development server
bun run dev

# Run tests
bun run test

# Run linting
bun run lint

# Build library
bun run build:lib
```

## Project Structure

```
src/
├── components/
│   ├── KaraokeText.tsx      # Main component
│   └── __tests__/           # Component tests
├── styles/
│   └── karaoke.css          # Component styles
├── index.ts                 # Library entry point
└── App.tsx                  # Demo application
```

## Code Style

We use [Biome](https://biomejs.dev/) for linting and formatting. The configuration is in `biome.json`.

- Run `bun run lint` to check for issues
- Run `bun run lint:fix` to auto-fix issues
- Run `bun run format` to format code

## Testing

We use [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/) for testing.

- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for good test coverage

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting, missing semicolons, etc
- `refactor:` code change that neither fixes a bug nor adds a feature
- `test:` adding tests
- `chore:` updating build tasks, package manager configs, etc

Examples:
```
feat: add support for custom animation easing
fix: resolve text overflow issue on mobile
docs: update API documentation
```

## Any Contributions You Make Will Be Under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report Bugs Using GitHub's [Issue Tracker](https://github.com/username/react-karaoke-text/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/username/react-karaoke-text/issues/new).

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Feature Requests

We welcome feature requests! Please:

1. Check if the feature has already been requested
2. Provide a clear description of the problem you're solving
3. Describe the solution you'd like
4. Consider if this fits with the library's scope and philosophy

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md). 