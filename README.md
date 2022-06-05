<h1 align="center">React lib template 📦</h1>

A simple React lib template based on [Parcel](https://parceljs.org/) and [Jest](https://jestjs.io/).

## Usage

use this template for your next React lib, modify it and run `npm run dev` to see it in action.

## Commands

This library has some built-in commands, like: `dev`, `build`, `lint` and `format`.

### `dev`

This command will start a development server with hot reloading and [React Fast Refresh](https://reactnative.dev/docs/fast-refresh).

### `build`

This command will build the library for production, but before, it's run the TypeScript type checking.

### `lint`

This command will run the [ESLint](https://eslint.org/) linter on the code and check for errors.

### `lint:fix`

This command will run the [ESLint](https://eslint.org/) linter on the code and check for errors, and if there are any, it will fix them.

### `format`

This command will run the [prettier](https://prettier.io/) formatter on the code and check for errors.

## JavaScript module formats

Parcel is configured to export a CJS and ESModule. See more on [Parcel's documentation](https://parceljs.org/features/targets/).

## Continuous Integration

### GitHub Actions

- `CI` with installs deps and runs `yarn run lint`, `yarn run build`.
- `size` witch comments const comparation of your library on every pull request.

## Sponsors

[![Sponsors](https://github.com/raisiqueira/headless-stepper-monorepo/raw/HEAD/sponsorkit/sponsors.svg)](https://headless-stepper.netlify.app/sponsors)

## License

MIT
