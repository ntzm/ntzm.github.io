---
layout: base.njk
code: true
---

# Import .geojson files in TypeScript with webpack

## webpack config

In your webpack config, you must add a new rule to handle `.geojson` files.
This can come before or after your `ts-loader` rule.

There is no need to add `.geojson` to your `resolve.extensions` array.

```javascript
module.exports = {
  resolve: {
    module: {
      rules: [
        { test: /\.tsx?$/, use: ['ts-loader'] },
        { test: /\.geojson$/, type: 'json' },
      ],
    },
  },
}
```

## TypeScript config

Now TypeScript needs to be told what `.geojson` imports look like.
To do this, add this `declare` block to an existing type definition file (`.d.ts`) or create a new one.

```javascript
declare module '*.geojson' {
  const content: any
  export default content
}
```

TypeScript also has to be configured to allow JSON module imports.
Add this to your `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

## Usage

Now you will be able to import `.geojson` files in your TypeScript project.

```javascript
import * as shape from './file.geojson'
```

If you have `"esModuleInterop": true` in your `tsconfig.json`, then you import the file slightly differently.
Note that you can import it with any name.

```javascript
import shape from './file.geojson'
```
