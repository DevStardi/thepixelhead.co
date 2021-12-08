const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const prefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();


// SCSS Stuff
function CSS() {
    return src('./scss/**/*.scss') 
    .pipe(sass().on('error', sass.logError))
}
function CSSstream() {
    return(CSS())
    .pipe(dest('./tmp'))
    .pipe(browserSync.stream());
}
function CSSbuild() {
    return(CSS())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('../web/styles'));
}

// JS stuff
function jsmin(){
    return src('./scss/**/*.js')
    .pipe(terser());
}
function JSstream(){
    return (jsmin())
    .pipe(dest('./tmp'))
    .pipe(browserSync.stream());
}
function JSbuild(){
    return (jsmin())
    .pipe(dest('../web/scripts'));
}

// Browser Sync stuff
function sync() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch('./scss/**/*.scss', CSSstream);
    watch('./scss/**/*.js', JSstream);
    watch('./**/*.html').on('change', browserSync.reload);
}

const dev = series(
    CSSstream,
    JSstream,
    sync
)
const build = series(
    CSSbuild,
    JSbuild
)

exports.dev = dev;
exports.build = build;