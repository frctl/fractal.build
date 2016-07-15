'use strict';

const gulp       = require('gulp');
const sass       = require('gulp-sass');
const sassGlob   = require('gulp-sass-glob');
const del        = require('del');
const uglify     = require('gulp-uglify');
const browserify = require('browserify');
const watchify   = require('watchify');
const babel      = require('babelify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');
const bust       = require('gulp-buster');
const sourcemaps        = require('gulp-sourcemaps');

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

/*
 * JS
 */

gulp.task('js:compile', (done) => compileJS(false, done));
gulp.task('js:watch', (done) => compileJS(true, done));

gulp.task('js:clean', function() {
    return del(['./dist/js']);
});

gulp.task('js', gulp.series('js:clean', 'js:compile'));

/*
 * Combos
 */

gulp.task('default', gulp.parallel('css', 'fonts', 'js'));
gulp.task('watch', gulp.parallel('css:watch', 'fonts:watch', 'js:watch'));

gulp.task('dev', gulp.series('default', 'fractal:start', 'watch'));


function compileJS(watch, done) {

    let bundler = browserify('theme/assets/js/main.js', {
        debug: true
    }).transform(babel, {
        presets: ["es2015"]
    });

    if (watch) {
        bundler = watchify(bundler);
        bundler.on('update', function () {
            console.log('Rebundling JS....');
            rebundle();
        });
    }

    function rebundle() {
        let bundle = bundler.bundle()
            .on('error', function (err) {
                console.error(err.message);
                // this.emit('end');
            })
            .pipe(source('main.js'))
            .pipe(buffer());

        if (!watch) {
            bundle.pipe(uglify());
        }

        bundle.pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('theme/dist/js'))
            .pipe(bust('cachebust.json'))
            .pipe(gulp.dest('.'));

        if (!watch) {
            done();
        }
        return bundle;
    }

    rebundle();
}
