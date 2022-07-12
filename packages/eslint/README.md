# @kopplin/eslint-config

[![npm version](https://badge.fury.io/js/%40kopplin%2Feslint-config.svg)](https://badge.fury.io/js/%40kopplin%2Feslint-config)

Kopplin's shared [ESLint](https://eslint.org/) configuration.

## Setup

1. Install the package.
```sh
npm install -D @kopplin/eslint-config eslint
```

2. Add to your .eslintrc
```json
{
  "extends": ["@kopplin/eslint-config"],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```
