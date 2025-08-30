const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
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


gulp.task('build-sass', function () {
    return gulp.src('./app/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(distFolder));
});


gulp.task('copy-api', function () {
    return gulp.src('./app/api/**/*.*')
        .pipe(gulp.dest(distFolder + '/api'));
});


gulp.task('copy-assets', function () {
    return gulp.src('./app/assets/**/*.*')
        .pipe(gulp.dest(distFolder + '/assets'));
});


gulp.task('watch', function () {
    gulp.watch('./app/src/index.html',
        gulp.parallel('copy-html'));
    
    gulp.watch('./app/assets/**/*.*',
        gulp.parallel('copy-assets'));
    
    gulp.watch('./app/api/**/*.*',
        gulp.parallel('copy-api'));
    
    gulp.watch('./app/scss/**/*.scss',
        gulp.parallel('build-sass'));
    
    gulp.watch('./app/src/**/*.*',
        gulp.parallel('build-js'));
});


gulp.task('build',
    gulp.parallel(
    'copy-html',
    'copy-assets',
    'copy-api',
    'build-sass',
    'build-js'));

    
gulp.task('default',
    gulp.parallel(
    'watch',
    'build',
));