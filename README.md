### Tools

- `@kopplin/commitlint`: CommitLint shared Config
- `@kopplin/eslint`: Eslint shared Config
- `@kopplin/prettier`: Prettier shared Config
- `@kopplin/tsconfig`: TS shared Config

### Useful commands

- `yarn build` - Build all tools
- `yarn dev` - Develop all tools
- `yarn lint` - Lint all tools
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each tools's clean script)

### How to Publish

```bash
# make changes & commit
yarn release-local
# make commit & push
```
