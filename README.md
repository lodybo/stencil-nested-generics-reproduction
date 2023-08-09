# Reproduction project for nested generics issue in Stencil 4

To see the issue firsthand, install the dependencies:

```shell
npm install
```

Then run the build in the `packages/core` folder.

```shell
cd packages/core
npm run build
```

Lastly, check the contents of the `packages/angular-lib/projects/ui-lib/lib/stencil-generated/components.ts` file.
