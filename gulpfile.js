'use strict';

const gulp     = require('gulp');
const sass     = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const del      = require('del');

const fractal  = require('./fractal.js');

gulp.task('fractal:start', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => {
        fractal.cli.error(err.message);
    });
    return server.start();
});

gulp.task('fractal:build', function(){
    const builder = fractal.web.builder();
    return builder.build().then(() => {
        fractal.cli.success('Fractal build completed!');
    });
});

gulp.task('css:process', function() {
  return gulp.src('theme/assets/css/main.scss')
    .pipe(sassGlob())
    .pipe(sass({
        includePaths: 'node_modules'
    }))
    .pipe(gulp.dest('theme/dist/css'));
});

gulp.task('css:clean', function() {
    return del(['theme/dist/css']);
});

gulp.task('css:watch', function () {
    gulp.watch([
        'theme/assets/css/**/*.scss',
    ], gulp.series('css'));
});

gulp.task('css', gulp.series('css:clean', 'css:process'));

gulp.task('default', gulp.parallel('css'));
gulp.task('watch', gulp.parallel('css:watch'));
