'use strict';

const gulp     = require('gulp');
const sass     = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const del      = require('del');

const fractal  = require('./fractal.js');
const logger = fractal.cli.console;

/*
 * Fractal
 */

 gulp.task('fractal:start', function(){
     const server = fractal.web.server();
     server.on('error', err => logger.error(err.message));
     return server.start().then(() => {
         logger.success(`Fractal server is now running at ${server.url}`);
     });
 });

 gulp.task('fractal:build', function(){
     const builder = fractal.web.builder();
     builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
     builder.on('error', err => logger.error(err.message));
     return builder.build().then(() => {
         logger.success('Fractal build completed!');
     });
 });

 gulp.task('fractal:debug', function(){
     return fractal.load().then(() => {
         fractal.docs.flatten().each(page => {
             logger.dump(page.toJSON());
         });
     });
 });

/*
 * Fonts
 */

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

/*
 * Fonts
 */

gulp.task('fonts:clean', function() {
    return del(['theme/dist/fonts']);
});

gulp.task('fonts:copy', function() {
   return gulp.src('theme/assets/fonts/**/*').pipe(gulp.dest('theme/dist/fonts'));
});

gulp.task('fonts:watch', function () {
    gulp.watch([
        'theme/assets/fonts/**/*',
    ], gulp.series('fonts'));
});

gulp.task('fonts', gulp.series('fonts:clean', 'fonts:copy'));

gulp.task('default', gulp.parallel('css', 'fonts'));
gulp.task('watch', gulp.parallel('css:watch', 'fonts:watch'));

gulp.task('dev', gulp.parallel('default', 'watch', 'fractal:start'));
