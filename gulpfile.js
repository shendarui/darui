var gulp = require("gulp");
var pug = require("gulp-pug");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var clearCss = require("gulp-clear-css");
var autoPrefixer = require("gulp-autoprefixer");
console.log("hello");
gulp.task("sdr",function(){
	console.log("我是美女，火锅美女");
})

gulp.task("myPug",function(){
	// 找到pug文件
	// 编译pug文件成html
	// 把html放在另外一个目录下
	gulp.src("pug/*.pug").pipe(plumber()).pipe(pug()).pipe(gulp.dest("html/"));
})
gulp.task("myLess",function(){
	// 找到less文件
	// 编译less文件成css
	// 把css放在另外一个目录下
	gulp.src("less/*.less").pipe(plumber()).pipe(less()).pipe(autoPrefixer()).pipe(gulp.dest("css/"));
})
gulp.task("myWatch",function(){
	gulp.watch("pug/*.pug",["myPug"])
	gulp.watch("less/*.less",["myLess"])
})