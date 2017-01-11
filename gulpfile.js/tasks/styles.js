gulp = require('gulp');

gulp.task('styles', function () {
	gulp.src('dev/themes/**/*.scss')
		.pipe()
		.pipe(gulp.dest('build/styles'))
});