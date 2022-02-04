let project_folder = `dist`
let source_folder = "src"

let fs = require(`fs`);

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        css: source_folder + "/scss/*.scss",
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.{ttf,woff,woff2,otf,eot,svg}",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.{ttf,woff,woff2,otf,eot,svg}",
    },
    clean: "./" + project_folder + "/"
}

let {src , dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require("gulp-file-include"),
    del = require("del"),
    scss = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    clean_css = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    // webp = require('gulp-webp'),
    // webphtml = require('gulp-webp-html'),
    // webpcss = require("gulp-webpcss"),
    ttf2woff = require("gulp-ttf2woff"),
    ttf2woff2 = require("gulp-ttf2woff2"),
    fonter = require("gulp-fonter"),
    mode = require("gulp-mode")(),
    sourcemaps = require("gulp-sourcemaps");
    // postcss = require('gulp-postcss')


function browserSync(){
    browsersync.init({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        index: `index.html`,
        port:3000,
        notify:false
    })
}

function html(){
    return src(path.src.html)
    .pipe(fileinclude())
    // .pipe(webphtml())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css(){
    return src(path.src.css)
    .pipe(mode.development( sourcemaps.init() ) )
        .pipe(
            scss({ outputStyle: 'expanded' }).on('error', scss.logError))
        
        .pipe(
            group_media()
        )        
        // .pipe(webpcss(
        //     // {webpClass: '.webp',noWebpClass: '.no-webp'}
        // ))
        .pipe(mode.development( sourcemaps.write() ) )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 5 versions'],
                cascade: true
            })
            
        )
        .pipe(
            clean_css()
        )
        
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

function js(){
    return src(path.src.js)
    .pipe(browsersync.stream())
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
        rename({
            extname: ".min.js"
        })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images(){
    return src(path.src.img)
    // .pipe(
    //     webp({
    //         quality: 70
    //     })
    // )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
        imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
        })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream());
}

gulp.task(`otf2ttf`, function(){
    return src([source_folder + `/fonts/*.otf`])
    .pipe(fonter({
        formats: [`ttf`]
    }))
    .pipe(dest(source_folder + `/fonts/`));
})

function fonts(){
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
}

function fontStyle() {
	let file_content = fs.readFileSync(source_folder + '/scss/scss_parts/fonts.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/scss_parts/fonts.scss', '', cb);
		fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname !== fontname) {
						fs.appendFile(source_folder + '/scss/scss_parts/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		})
	}
	return src(path.src.html);
}
function cb() {
    
}


function watchFiles(){
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.img], images)

}

function clean(){
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js,css, html, images, fonts),fontStyle);

let watch  = gulp.parallel(build, watchFiles, browserSync);

if(process.env.NODE_ENV === 'production') {
    exports.default  = gulp.parallel(build, watchFiles);
} else {
    exports.default  = gulp.parallel(build, watchFiles, browserSync);
}



exports.fontStyle = fontStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
// exports.default = watch;




