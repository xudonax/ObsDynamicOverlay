/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['ObsDynamicOverlay.Web/scripts/**/*.js', 'ObsDynamicOverlay.Web/scripts/**/*.ts', 'ObsDynamicOverlay.Web/scripts/**/*.map'],
};

gulp.task('clean', function () {
    return del(['ObsDynamicOverlay.Web/wwwroot/scripts/**/*']);
});

gulp.task('default', function () {
    return gulp.src(paths.scripts).pipe(gulp.dest('ObsDynamicOverlay.Web/wwwroot/scripts'));
});