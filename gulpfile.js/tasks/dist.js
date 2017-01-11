gulp = require('gulp');

gulp.task('dist', function () {
	gulp.src('content/src/**/*')
		.pipe(gulp.dest('content/dist'))
});