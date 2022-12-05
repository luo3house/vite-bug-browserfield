# vite-bug-browserfield

## Step to reproduce

- `pnpm i`

- `pnpm run build`

- Checkout dist files.


## Overview

`./packages/rollup-starter/dist/index.js`

```ts
const current = 'browser';
```

`./packages/vite-starter/dist/index.js`

```ts
const current = "node";
```

`./packages/webpack-starter/dist/index.js`

```ts
const current = 'browser'
```
