const elixir = require('laravel-elixir');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const extName = 'typescript';
const sourcemaps = require('gulp-sourcemaps');
const _lodash = require('lodash');
const config = require('./config.json');

const ElixirTS = {
    _stream: null,
    _options: null,
    _typescriptRouteDir: 'resources/assets/typescript',
    _generateSourceMap: false,
    sourceFiles:'',
    mergeConfig: function (newConfig) {
        newConfig = newConfig || {};
        return this._options = (0, _lodash.mergeWith)(config, newConfig, function (objValue, srcValue) {
            if ((0, _lodash.isArray)(objValue)) {
                return objValue.concat(srcValue);
            }
        });
    },
    init: function (source, destination, options) {
        this._options = this.mergeConfig(options);
        this.sourceFiles = this._typescriptRouteDir + source;

        //TODO: Add support for regular source maps files
        this._generateSourceMap = this._options.sourceMap || this._options.inlineSourceMap;
    },
    pipe: function (action) {
        return this._stream = this._stream.pipe(action);
    },
    getStream: function () {
        return this._stream;
    }
};

elixir.extend(extName, function (source, destination, options) {
    const _ts = ElixirTS;
    _ts.init(source, destination, options);
    new elixir.Task(extName, function () {
        this._stream = gulp.src(this.sourceFiles);

        if (this._generateSourceMap) {
            this.pipe(sourcemaps.init());
        }

        this.pipe(ts(this._options));

        if (this._generateSourceMap) {
            this.pipe(sourcemaps.write());
        }

        this.pipe(gulp.dest(destination));

        return this.getStream();
    }.bind(_ts)).watch(_ts.sourceFiles);
});