const gulp = require('gulp'),
	nodemon = require('gulp-nodemon'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload');


gulp.task('develop', () => {
	livereload.listen();
	nodemon({
		script: 'app.js',
		ext: 'js ejs',
		stdout: false
	}).on('readable', () => {
		this.stdout.on('data', (chunk) => {
			if (/^Express server listening on port/.test(chunk)) {
				livereload.changed(__dirname);
			}
		});
		this.stdout.pipe(process.stdout);
		this.stderr.pipe(process.stderr);
	});
});

gulp.task('default', [
	'develop'
]);
