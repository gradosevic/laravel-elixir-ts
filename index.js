const elixir = require('laravel-elixir');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const extName = 'typescript';

elixir.extend(extName, function (source, destination, options) {
    const tsFiles = 'resources/assets/typescript' + source;
    new elixir.Task(extName, function () {
        return gulp.src(tsFiles)
            .pipe(ts(options))
            .pipe(gulp.dest(destination));
    }).watch(tsFiles);
});