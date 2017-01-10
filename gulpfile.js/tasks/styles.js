gulp = require('gulp');

gulp.task('styles', function () {
	gulp.src('dev/themes/*.scss')
		.pipe(gulp.dest('build/styles'))
});