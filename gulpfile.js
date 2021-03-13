let gulp = require('gulp');
let scss = require('gulp-sass');
let scsso = require('gulp-csso');
let rename = require('gulp-rename');

gulp.task('default', function () {
  return gulp
    .src('scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('css'))
    .pipe(scsso())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('Minified'));
});
