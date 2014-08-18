var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

var coffee = require('gulp-coffee');
var imagemin = require('gulp-imagemin');

var paths = {
    scripts: ['build/scripts/**/*.coffee'],
    images: ['build/images/**/*', '!build/images/*.+(psd|psde)'],
    less: ['build/styles/**/*.less'],
    styles: ['build/styles/**/*.css'],
    html: ['build/html/**/*.html']
}

gulp.task('images', function(){
    gulp.src(paths.images)
     .pipe(plugins.imagemin({optimizationLevel: 5}))
     .pipe(gulp.dest('dist/images'))
});

gulp.task('styles', function(){
    gulp.src(paths.styles)
     .pipe(plugins.cssmin())
     .pipe(plugins.rename({suffix: '.min'}))
     .pipe(gulp.dest('dist/styles'))
});

gulp.task('html', function(){
    gulp.src(paths.html)
     .pipe(plugins.htmlhint())
     .pipe(plugins.htmlhint.reporter())
     .pipe(gulp.dest('dist/html'))
});

gulp.task('watch', function(){
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', function(){
    //default task
});
