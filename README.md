gulp-iOS-icon-generator
=======================

iOS icon generator with gulp

## Caution

This is a work in progress repository. Currently, it is itended for limited use case.


## Installation

1. GraphicsMagick

        brew install graphicsmagick

2. Gulp

        npm install -g gulp

3. This app

        git clone https://github.com/sl2/gulp-iOS-icon-generator.git
        cd gulp-ios-icon-generator
        npm install

## Usage

1. Put an app icon image into ./src/appicons.
    
    - Image Format : .png
    - Image Size : greater than 1024 x 1024

2. Put app resource images into ./src/images

    - Image Format : .png
    - Image Size : for 3x

3. Execute gulp
    
    cd gulp-ios-icon-generator
    gulp

4. Check under the ./dist directory
    - ./dist/appicons
        - App icon images
    - ./dist/images
        - 50x50, 100x100 and 150x150 images


## LICENSE

MIT




