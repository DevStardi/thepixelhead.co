const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const prefix = require('gulp-autoprefixer');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const del = require('del');


// clear tmp folder
function ResetTmp() {
    return del('tmp/**/*');
}

// SCSS Stuff
function CSS() {
    return src('./scss/**/*.scss') 
    .pipe(sass().on('error', sass.logError))
}
function CSSstream() {
    return(CSS())
    .pipe(dest('./tmp/styles/'))
    .pipe(browserSync.stream());
}
function CSSbuild() {
    return(CSS())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('../web/styles'));
}

// JS stuff
function JSmin(){
    return src('./scss/**/*.js')
}
function JSstream(){
    return (JSmin())
    .pipe(dest('./tmp/scripts/'))
    .pipe(browserSync.stream());
}
function JSbuild(){
    return (JSmin())
    .pipe(terser())
    .pipe(dest('../web/scripts'));
}

// JS browserify

// function JSbrowserify(){
//     return browserify({
// 		entries: config.paths.root + 'scripts/main.js',
//     })
//     .pipe(dest('../web/scripts'));
// }
// exports.JSbrowserify = JSbrowserify;

// IMG stuff
function IMG(){
    return src('./img/**/*');
}
function IMGstream() {
    return(IMG())
    .pipe(dest('./tmp/img'))
    .pipe(browserSync.stream());
}
function IMGbuild() {
    return(IMG())
    .pipe(dest('../web/img'));
}

// FONT stuff
function FONTS(){
    return src('./fonts/**/*');
}
function FONTSstream() {
    return(FONTS())
    .pipe(dest('./tmp/fonts'))
    .pipe(browserSync.stream());
}
function FONTSbuild() {
    return(FONTS())
    .pipe(dest('../web/fonts'));
}

// HTML stuff
function HTML(){
    return src('./*.html');
}
function HTMLstream() {
    return(HTML())
    .pipe(dest('./tmp/'))
    .pipe(browserSync.stream());
}
function HTMLbuild() {
    return(HTML())
    .pipe(dest('../web/'));
}

// Browser Sync stuff
function BrowserWatch() {
    browserSync.init({
        server: {
            baseDir: './tmp/'
        }
    });
    watch('./scss/**/*.scss', CSSstream);
    watch('./scss/**/*.js', JSstream);
    watch('./**/*.html', HTMLstream).on('change', browserSync.reload);
}

// reset Web folder
function ResetWeb() {
	return del([
        '../web/styles/**/*',
        '../web/scripts/**/*',
        '../web/img/**/*',
        '../web/fonts/**/*'],
        {force:true}
    );
}

const dev = series(
    ResetTmp,
    HTMLstream,
    CSSstream,
    JSstream,
    IMGstream,
    FONTSstream,
    BrowserWatch
)
const build = series(
    ResetWeb,
    HTMLbuild,
    CSSbuild,
    JSbuild,
    IMGbuild,
    FONTSbuild
)

exports.dev = dev;
exports.build = build;