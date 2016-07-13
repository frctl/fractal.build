'use strict';

const gulp     = require('gulp');
const sass     = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const del      = require('del');
const bust     = require('gulp-buster');

/*
 * Fractal
 */

 gulp.task('fractal:start', function(){
     const fractal  = require('./fractal.js');
     const logger = fractal.cli.console;
     const server = fractal.web.server();
     server.on('error', err => logger.error(err.message));
     return server.start().then(() => {
         logger.success(`Fractal server is now running at ${server.url}`);
     });
 });

 gulp.task('fractal:build', function(){
     const fractal  = require('./fractal.js');
     const logger = fractal.cli.console;
     const builder = fractal.web.builder();
     builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
     builder.on('error', err => logger.error(err.message));
     return builder.build().then(() => {
         logger.success('Fractal build completed!');
         return gulp.src('./.htaccess').pipe(gulp.dest('dist'));
     });
 });

 gulp.task('fractal:debug', function(){
     const fractal  = require('./fractal.js');
     return fractal.load().then(() => {
         fractal.docs.flatten().each(page => {
             fractal.cli.console.dump(page.toJSON());
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
    .on('error', err => console.log(err.message))
    .pipe(gulp.dest('theme/dist/css'))
    .pipe(bust('cachebust.json'))
    .pipe(gulp.dest('.'));
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

gulp.task('dev', gulp.series('default', 'fractal:start', 'watch'));
