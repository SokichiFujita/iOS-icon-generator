var gulp = require('gulp');
var rename = require('gulp-rename');
var foreach = require('gulp-foreach');
var gm = require('gulp-gm');

// base size of iOSX s.t. X>=7
var size = {
    iPhone:{
        settings:29,
        spotlight:40,
        app:60,
        portrait:256,
        tabbar:25,
        toolbar:22
    },
    iPad:{
        spotlight:40,
        app:76
    }
}

// output size for iOSX s.t. X>=7
var icons = [
    {size:size.iPhone.settings*1,   name:"Settings1x"},
    {size:size.iPhone.settings*2,   name:"Settings2x"},
    {size:size.iPhone.settings*3,   name:"Settings3x"},
    {size:size.iPhone.spotlight*2,  name:"Spotlight2x"},
    {size:size.iPhone.spotlight*3,  name:"Spotlight3x"},
    {size:size.iPad.spotlight*1,    name:"iPad_Spotlight1x"},
    {size:size.iPad.spotlight*2,    name:"iPad_Spotlight2x"},
    {size:size.iPhone.app*2,        name:"App2x"},
    {size:size.iPhone.app*3,        name:"App3x"},
    {size:size.iPad.app*1,          name:"iPad_App1x"},
    {size:size.iPad.app*2,          name:"iPad_App2x"},
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

var launchimages = [
    {sizeW:640, sizeH:960, name:"iPhone4s"},
    {sizeW:640, sizeH:1136, name:"iPhone5"},
    {sizeW:750, sizeH:1334, name:"iPhone6"},
    {sizeW:1242, sizeH:2208, name:"iPhone6+"},
    {sizeW:768, sizeH:1024, name:"iPad"},
    {sizeW:1536, sizeH:2048, name:"iPadRetina"}
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
                        path.basename = path.basename + "_" + icon.size + "x" + icon.size + "_" + icon.name
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

    launchimages.forEach(function(icon){
        gulp.src('src/launchimages/*.png')
            .pipe(foreach(function(stream, file){ 
                return stream
                .pipe(gm(function(src) {
                    return src.resize(icon.sizeH, icon.sizeH); 
                 }))
                .pipe(gm(function(src) {
                    return src.crop(icon.sizeW, icon.sizeH, (icon.sizeH-icon.sizeW)/2, 0); 
                 }))
                .pipe(rename(function(path){
                    path.basename = 
                        path.basename + "_" + 
                        icon.sizeW + "x" + icon.sizeH + "_" + 
                        icon.name
                 }))
             }))
            .pipe(gulp.dest('dist/launchimages'));
    });


});

