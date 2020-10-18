let gulp = require('gulp');
let scss = require('gulp-sass');
let scsso = require('gulp-csso');
 
gulp.task('default', function() {
return gulp.src('scss/*.scss')
 .pipe(scss())
 .pipe(gulp.dest('css'))
 .pipe(scsso())
 .pipe(gulp.dest('Minified'));
 
});