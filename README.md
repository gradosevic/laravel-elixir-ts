# laravel-elixir-ts
Laravel Elixir Typescript Extension


This is TypeScript extension for Laravel 5 Elixir. It is a wrapper for gulp-typescript tested with Laravel 5.3 and Angular 2.0.

####Installation
```
npm i laravel-elixir-ts --save-dev
```

####Default source & destination
- Put all your source .ts files in **resources/assets/typescript**
- Transpiled files will be stored to **public/app**

####Usage
```js
mix.typescript();
//or
mix.typescript(options);
```

####Example of minimal gulpfile.js used with Angular 2 
```js

const elixir = require('laravel-elixir');
require('laravel-elixir-ts');

elixir(mix => {
    mix.typescript();
});
```

####Default options:
```js
{
  source: "/**/*.ts",
  destination: "public/app",
  target: "es5",
  module: "commonjs",
  moduleResolution: "node",
  sourceMap: true,
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  removeComments: false,
  noImplicitAny: false
}
```

####Running
Run **"gulp"** or **"gulp watch"** command in console in the root folder.

####Additional options

For the list of all default options and values, please check:
https://github.com/ivogabe/gulp-typescript#options

Or check all available TypeScript options:
https://www.typescriptlang.org/docs/handbook/compiler-options.html




