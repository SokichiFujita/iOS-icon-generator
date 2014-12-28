var gulp = require('gulp');
var rename = require('gulp-rename');
var foreach = require('gulp-foreach');
var gm = require('gulp-gm');

var paths = {
    appicons:'src/appicons*.png',
    images:'src/images*.png'
};

var icons = [
    {size:58,   name:"Settings"},
    {size:80,   name:"Spotlight"},
    {size:120,  name:"App"},
    {size:512,  name:"iPhonePortrait2x"},
    {size:1024, name:"iPhonePortrait4x"}
];

var images = [
    {size:50,  name:"1x"},
    {size:100, name:"2x"},
    {size:150, name:"3x"}
];

gulp.task('default', function () {
    icons.forEach(function(icon){
        gulp.src('src/appicons/*.png')
            .pipe(foreach(function(stream, file){ 
                return stream
                .pipe(gm(function(src) {
                    return src.resize(icon.size, icon.size); 
                 }))
                .pipe(rename(function(path){
                    path.basename = 
                        path.basename + "_" + 
                        icon.size + "x" + icon.size + "_" + 
                        icon.name
                 }))
             }))
            .pipe(gulp.dest('dist/appicons'));
    });

    images.forEach(function(icon){
        gulp.src('src/images/*.png')
            .pipe(foreach(function(stream, file){ 
                return stream
                .pipe(gm(function(src) {
                    return src.resize(icon.size, icon.size); 
                 }))
                .pipe(rename(function(path){
                    path.basename = 
                        path.basename + "_" + 
                        icon.size + "x" + icon.size + "_" + 
                        icon.name
                 }))
             }))
            .pipe(gulp.dest('dist/images'));
    });
});

