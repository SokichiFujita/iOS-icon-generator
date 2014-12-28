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
        portrait:256,
        tabbar:25,
        toolbar:22
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

var tabbars = [
    {size:size.iPhone.tabbar*1,  name:"tabbar1x"},
    {size:size.iPhone.tabbar*2,  name:"tabbar2x"},
    {size:size.iPhone.tabbar*3,  name:"tabbar3x"}
];

var toolbars = [
    {size:size.iPhone.toolbar*1,  name:"toolbar1x"},
    {size:size.iPhone.toolbar*2,  name:"toolbar2x"},
    {size:size.iPhone.toolbar*3,  name:"toolbar3x"}
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

    tabbars.forEach(function(icon){
        gulp.src('src/tabbars/*.png')
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
            .pipe(gulp.dest('dist/tabbars'));
    });

    toolbars.forEach(function(icon){
        gulp.src('src/toolbars/*.png')
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
            .pipe(gulp.dest('dist/toolbars'));
    });

});

