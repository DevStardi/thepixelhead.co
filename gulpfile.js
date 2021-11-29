const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


function style() { 
    return gulp.src('./src/scss/**/*.scss') 
    // 2. pass that fiLe through sass compiLer
    .pipe(sass().on('error', sass.logError))
    // 3. where do I save the compiled CSS? 
    .pipe(gulp.dest('./src/dist'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/**/*.html').on('change', browserSync.reload);
    gulp.watch('./src/**/*.js').on('change', browserSync.reload);

}


exports.style = style;
exports.watch = watch;