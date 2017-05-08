var gulp = require('gulp'),
    compass = require('gulp-compass'),
    mincss=require('gulp-minify-css');

gulp.task('css', function() {
    // 编译css
    console.log("hello gulp-css");
    //压缩css
    gulp.src('./sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: './public/css',
            sass: 'sass'
        }))
        //css压缩
        .pipe(mincss())
        .pipe(gulp.dest('./public/css'));
});

// 合并压缩
gulp.watch('css/*.css', ['concatCss']);
gulp.watch('js/*.js', ['concatJs']);

gulp.task('watch',function(){
    gulp.watch('./sass/*.scss',['css'])
});

gulp.task('default', ['watch'],function() {
    // 将你的默认的任务代码放在这
    console.log("hello gulp");
});

//gulp.src(); 该方法用于返回我们匹配的文件