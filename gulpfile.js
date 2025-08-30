

const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const distFolder = './dist';


gulp.task('copy-html', function () {
    return gulp.src('./app/src/index.html')
        .pipe(gulp.dest(distFolder));
});

gulp.task('build-js', function () {
    return gulp.src('./app/src/main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(distFolder));
});