var
// modules
    gulp = require('gulp'),
    htmlclean = require('gulp-htmlclean'),

    // development mode?
    devBuild = (process.env.NODE_ENV !== 'production'),

    // folders
    folder = {
        src: '/',
        build: '/'
    };

gulp.task('html', function() {
    var
        out = folder.build + '/',
        page = gulp.src(folder.src + '/**/*')
        .pipe(newer(out));

    if (!devBuild) {
        page = page.pipe(htmlclean());
    }

    return page.pipe(gulp.dest(out));
})