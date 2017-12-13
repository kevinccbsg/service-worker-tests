const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect', () => {
  connect.server({
    port: 3000,
  });
});

gulp.task('default', ['connect']);
