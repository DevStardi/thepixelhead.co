const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

const terser = require('gulp-terser');


function style() { 
    return src('./scss/**/*.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./tmp'))
    .pipe(browserSync.stream());
}
function jsmin(){
    return src('./scss/**/*.js') // change to your source directory
    .pipe(terser())
    .pipe(dest('./tmp')) // change to your final/public directory
    .pipe(browserSync.stream());
}

function dev() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch('./scss/**/*.scss', style);
    watch('./scss/**/*.js', jsmin);
    watch('./**/*.html').on('change', browserSync.reload);
}

function styleBuild() { 
    return src('./scss/**/*.scss') 
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('../web/styles'))
}
function jsminBuild(){
    return src('./scss/**/*.js') // change to your source directory
    .pipe(terser())
    .pipe(dest('../web/scripts')) // change to your final/public directory
}

const build = series(
    styleBuild,
    jsminBuild
);


exports.style = style;
exports.jsmin = jsmin;
exports.dev = dev;

exports.build = build;