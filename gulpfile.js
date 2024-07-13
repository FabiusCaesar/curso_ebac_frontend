const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Função para compilar SASS
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

// Função para comprimir imagens
function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

// Função para comprimir JavaScript
function comprimeJavaScript() {
    return gulp.src('./source/scripts/*js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
    gulp.watch('./source/scripts/*js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
}