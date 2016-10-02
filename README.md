# laravel-elixir-ts
Laravel Elixir Typescript Extension


This is TypeScript extension for Laravel 5 Elixir. It is a wrapper for gulp-typescript tested with Laravel 5.3 and Angular 2.0.

####Usage
```js
mix.typescript(source, destination, options);
```

####Example gulpfile.js used with Angular 2 
```js

const elixir = require('laravel-elixir');
require('laravel-elixir-ts');

elixir(mix => {
    mix
    .typescript("/**/*.ts", "public/app", {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false,
    });
});
```


