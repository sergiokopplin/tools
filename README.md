### Packages

- `@kopplin/commitlint-config`: CommitLint Preset

### Useful commands

- `yarn build` - Build all packages
- `yarn dev` - Develop all packages
- `yarn lint` - Lint all packages
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

### How to Publish

```bash
# make changes
# commit changes
yarn changeset
# commit changest changes
git push
# check opened pull request
# merge changes
# wait for release
```
