// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
 
// Compile Our Sass
gulp.task('css', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    ])
    .pipe(concat('lib.css'))
    .pipe(gulp.dest('src/build/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        'node_modules/handlebars/dist/handlebars.min.js',
        'js/*.js'
    ])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('src/build/js'));
});
 
gulp.task('bootstrap', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/fonts/**/*'
    ])
    .pipe(gulp.dest('src/build/fonts'));
});

gulp.task('templates', function() {
    return gulp.src([
        'templates/*'
    ])
    .pipe(gulp.dest('src/build/templates'));
});

// Watch Files For Changes
// gulp.task('watch', function() {
//     gulp.watch('js/*.js', ['lint', 'scripts']);
//     gulp.watch('scss/*.scss', ['sass']);
// });

// Default Task
gulp.task('default', ['css', 'scripts', 'bootstrap', 'templates']);