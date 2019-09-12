const gp = require('gulp-load-plugins')();
const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');

gulp.task('sass', function() {
  return gulp
    .src('./scss/**/*.scss')
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError('Error: <%= error.message %>'),
      })
    )
    .pipe(
      gp.sass({
        errLogToConsole: true,
        includePaths: ['./node_modules/tachyons-sass'],
      })
    )
    .pipe(cleanCss())
    .pipe(gp.autoprefixer())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function(callback) {
  watching = true;

  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./fonts/**/*', ['fonts']);
  gulp.watch('./img/**/*', ['images']);
});
