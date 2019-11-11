var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

var jsSrc = 'src/js/*.js';
var jsWatch = 'src/js/*.js';
var jsDist = './dist/js/';
var styleWatch = 'src/scss/**/*.scss';
var styleDist = './dist/css/';
var styleSrc = 'src/scss/**/*.scss';

var rename = require('gulp-rename');
var autoPrefixer = require('gulp-autoprefixer');
var sourceMaps = require('gulp-sourcemaps');

gulp.task('browser-sync', ['sass'], function () {
    bs.init({
        server: {
            baseDir: "./",
            index: "ImageFlip.html"
        }
    });
});

gulp.task('style', function () {
    gulp.src(styleSrc)
        .pipe(sourceMaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(styleDist))
        .pipe(bs.stream({match: '**/*.css'}));
    // .pipe(browserSync.stream())
    // .pipe(browserSync.reload({
    //     stream: true
    // }));
});

gulp.task('js-watch', ['js'], function (done) {
    bs.reload();
    done();
});

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task('js', function () {
    gulp.src(jsSrc)
        .pipe(gulp.dest(jsDist));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch(jsWatch, ['js']);
    gulp.watch(styleWatch, ['style']);
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});