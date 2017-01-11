gulp = require('gulp');

gulp.task('build', function () {
	gulp.src('content/src/**/*')
		.pipe(gulp.dest('content/build'))
});