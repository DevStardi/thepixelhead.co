const { src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const terser = require('gulp-terser');


function style() { 
    return src('./scss/**/*.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist'))
    .pipe(browserSync.stream());
}

// minify js
function jsmin(){
    return src('./scss/**/*.js') // change to your source directory
    .pipe(terser())
    .pipe(dest('./dist')) // change to your final/public directory
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

exports.style = style;
exports.jsmin = jsmin;
exports.dev = dev;