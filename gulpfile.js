var gulp = require('gulp');
var rename = require('gulp-rename');
var foreach = require('gulp-foreach');
var gm = require('gulp-gm');

var paths = {
    appicons:'src/appicons*.png',
    images:'src/images*.png'
};

// base size of iOSX s.t. X>=7
var size = {
    iPhone:{
        settings:29,
        spotlight:20,
        app:30,
        portrait:256
    }
}

// output size for iOSX s.t. X>=7
var icons = [
    {size:size.iPhone.settings*1,   name:"Settings1x"},
    {size:size.iPhone.settings*2,   name:"Settings2x"},
    {size:size.iPhone.settings*3,   name:"Settings3x"},
    {size:size.iPhone.spotlight*2,  name:"Spotlight2x"},
    {size:size.iPhone.spotlight*3,  name:"Spotlight3x"},
    {size:size.iPhone.app*2,        name:"App2x"},
    {size:size.iPhone.app*3,        name:"App3x"},
    {size:size.iPhone.portrait*2,   name:"Portrait2x"},
    {size:size.iPhone.portrait*4,   name:"Portrait4x"}
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

