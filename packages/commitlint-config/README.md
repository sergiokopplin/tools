# @kopplin/commitlint-config

[![npm version](https://badge.fury.io/js/%40kopplin%2Fcommitlint-config.svg)](https://badge.fury.io/js/%40kopplin%2Fcommitlint-config)

Kopplin's shared [CommitLint](https://commitlint.js.org/) configuration.

## Setup

1. Install the packages

```sh
npm i -D @kopplin/commitlint-config @commitlint/cli husky
```

2. Install Husky
```sh
npx husky install
```

3. Add Hook

```sh
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
```

4. Setup config file

After installing it, apply the config to commitlint by running the following command:

```bash
echo "module.exports = { extends: ['@kopplin/commitlint-config'] };" > .commitlintrc.js
```
