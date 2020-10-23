const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass'); 
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const jsmin = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const babel = require('gulp-babel');


function copyHtml(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
}
function fnHtmlmin(){
    return gulp.src('./src/pages/*.html')
        .pipe(htmlmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/pages'));
}
function fnCss(){
    return gulp.src('./src/sass/*')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'));
}

function fnJs(){
    return gulp.src('./src/js/*.js')
     .pipe(babel({
         presets: ['@babel/env']
     }))
     .pipe(jsmin())
     .pipe(rename({suffix:'.min'}))
     .pipe(gulp.dest('./dist/js'));
}

function fnImg(){
    return gulp.src('./src/img/*')
     .pipe(imagemin())
     .pipe(gulp.dest('./dist/img'));
}
function fnWatch(){
    gulp.watch('./src/index.html',copyHtml);
    gulp.watch('./src/pages/*.html',fnHtmlmin);
    gulp.watch('./src/sass/*.scss',fnCss);
    gulp.watch('./src/js/*.js',fnJs);
    gulp.watch('./src/img/*',fnImg);
}
exports.img = fnImg;
exports.js = fnJs;
exports.css = fnCss;
exports.html = fnHtmlmin;
exports.copyIndex = copyHtml;
exports.default = fnWatch;