# Electon-forge Vue3 template

<center>

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

</center>

The boilerplate for making electron applications built with vue (pretty much what it sounds like).

## How to use:

### Clone the repository:
```bash
git clone https://github.com/Viiprogrammer/electron-forge-vue3-javascript
```

### Install modules:

```bash
# For Yarn
yarn install

# For NPM
npm i
```

### Start dev

```bash
# For Yarn
yarn run start

# For NPM
npm run start
```

# Overview

The aim of this project is to remove the need of manually setting up electron-forge + vue apps.

Things you'll find in this boilerplate:

- Basic project structure with a single package.json setup
- Ready to use vue-router
- Preconfigured webpack:
  - `babel-loader` for `.js`
  - `vue-loader` for `.vue`
  - `css-loader` for `.css`
  - main / renderer configs
  - [devContentSecurityPolicy](https://www.electronforge.io/config/plugins/webpack#devcontentsecuritypolicy)
  - [Native Node modules](https://www.electronforge.io/config/plugins/webpack#native-node-modules)
- Preconfigured ESLint:
  - [`vue/vue3-recommended`](https://eslint.vuejs.org/rules/)
  - [`security/recommended`](https://github.com/eslint-community/eslint-plugin-security)
  - [Code style standard](https://standardjs.com/)
  - [no-secrets/no-secrets](https://www.npmjs.com/package/eslint-plugin-no-secrets)
  - [unicorn/prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md)
  - [unicorn/prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md)
  - [unicorn/prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md)
  - [unicorn/prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md)
  - [unicorn/prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md)
  - [unicorn/prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md)
  - [unicorn/prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md)
  - [unicorn/prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md)
  - [unicorn/no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md)
  - [unicorn/no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md)
  - [unicorn/no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md)
  - [unicorn/no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md)
  - [unicorn/no-nested-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md)
  - [unicorn/no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md)
  - [unicorn/error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md)
  - [unicorn/consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md)
  - [unicorn/catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md)
- Preconfigured [Context Bridge](https://www.electronjs.org/docs/latest/api/context-bridge)

## Contributing:

We welcome any contributions that improve the quality of our project.
