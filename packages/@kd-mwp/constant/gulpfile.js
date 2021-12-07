const gulp = require('gulp')
const uglify = require('gulp-uglify')
gulp.task('min', function () {
  return gulp.src(['./lib/index.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./lib'))
})