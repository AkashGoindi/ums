let gulp = require('gulp');
let browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('styles/*.css', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
});

gulp.task('default', ['serve']);
