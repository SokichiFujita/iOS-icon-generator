gulp-iOS-icon-generator
=======================

iOS icon generator with gulp. Many size icon for app, tabbar, toolbar and navigation bar will be generated.

## Output

### App icons

Generate app icon images for as follows from a 1024x1024 image.

- Settings
- Spotlight
- App
- Portrait for App Store

### Tab bar icons

Generate 1x, 2x and 3x images for tabbar icons from a 3x image.

### Toolbar icons / Navigation bar icons

Generate 1x, 2x and 3x images for tooblar or navigation bar icons from a 3x image.

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
    
    - Input Image Format : .png
    - Input Image Size : bigger than 1024 x 1024

2. Put tabbar icon images into ./src/tabbars

    - Input Image Format : .png
    - Input Image Size : for 3x

2. Put toolbar icon images into ./src/toolbars
    
    - Input Image Format : .png
    - Input Image Size : for 3x

3. Execute gulp
    
        cd gulp-ios-icon-generator
        gulp

4. Check under the `./dist` directory
    - `./dist/appicons`
        - App icon images for settings, spotlight, app and portrait.
    - `./dist/tabbar`
        - 25x25, 50x50 and 75x75 images.
    - `./dist/toolbar`
        - 22x22, 44x44 and 66x66 images.

## LICENSE

MIT




