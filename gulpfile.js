var gulp=require('gulp'),
    minihtml=require('gulp-minify-html'),
    minicss=require('gulp-minify-css');
gulp.task('myminihtml',function(){
    gulp.src('*.html')
        .pipe(minihtml())
        .pipe(gulp.dest('dist/'))
});
gulp.task('myminicss',function(){
    gulp.src('css/*.css')
        .pipe(minicss())
        .pipe(gulp.dest('dist/css'))
});
gulp.task('default',['myminihtml','myminicss']);