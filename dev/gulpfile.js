const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const autoprefixer = require('autoprefixer');
const useref = require('gulp-useref');
const browserSync = require('browser-sync').create();
const del = require('del');

const cssnanoOptions = {
	calc: true,
	colormin: true,
	convertValues: false,
	discardDuplicates: true,
	mergeLonghand: true,
	mergeRules: true,
	normalizeWhitespace: true,
	orderedValues: true,
	svgo: {
		plugins: [{
			removeDoctype: true
		}, {
			removeComments: true
		}, {
			cleanupNumericValues: {
				floatPrecision: 2
			}
		}, {
			convertColors: {
				names2hex: true,
				rgb2hex: true
			}
		}]
	},
	discardComments: {
		removeAll: true,
	}
};


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
    let plugins = [
        autoprefixer(),
        cssnano({
            preset: ['default', cssnanoOptions]
        })
    ];

    return(CSS())
    .pipe(postcss(plugins))
    // .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('../web/styles'));
}

// JS stuff
function JS(){
    // return src('./scripts/**/*.js')
    return src(['./scripts/**/*.js', '!./scripts/globals/**/*.js'])
}
function JSstream(){
    return (JS())
    .pipe(dest('./tmp/scripts/'))
    .pipe(browserSync.stream());
}
function JSbuild(){
    return (JS())
    .pipe(terser())
    .pipe(dest('../web/scripts'));
}

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

// HTML & vendor stuff
function HTML(){
    return src('./*.html')
    // claims the linked vendor files & exports them
    .pipe(useref());
}
function HTMLstream() {
    return(HTML())
    .pipe(dest('./tmp/'))
    .pipe(browserSync.stream());
}
function HTMLbuild() {
    return(HTML())
    .pipe(dest('../web/'))
}

// Vendor Stuff 
function VendorStuff(){
    return(HTML())
    .pipe(useref())
    .pipe(dest('./tmp/scripts/v'));
}
exports.VendorStuff = VendorStuff;

// Browser Sync stuff
function BrowserWatch() {
    browserSync.init({
		// notify: false,
        server: {
            baseDir: './tmp/'
        }
    });
    watch('./scss/**/*.scss', CSSstream);
    watch('./scripts/**/*.js', JSstream);
    watch('./img/**/*', IMGstream);
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

function removeBundlerWeb() {
    return del(
        '../web/bundler.html',
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
    BrowserWatch,
)
const build = series(
    ResetWeb,
    HTMLbuild,
    CSSbuild,
    JSbuild,
    IMGbuild,
    FONTSbuild,
    removeBundlerWeb
)

exports.dev = dev;
exports.build = build;