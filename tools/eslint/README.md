# @kopplin/eslint

[![npm version](https://badge.fury.io/js/%40kopplin%2Feslint.svg)](https://badge.fury.io/js/%40kopplin%2Feslint)

Kopplin's shared [ESLint](https://eslint.org/) configuration.

## Setup

1. Install the package.

```sh
npm install -D @kopplin/eslint eslint
```

2. Add to your .eslintrc

```json
{
  "extends": ["@kopplin/eslint"],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```
