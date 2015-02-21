gulp-iOS-icon-generator
=======================

- iOS's icon and launcimage generator. 
    - Generate app, tabbar, toolbar and navigationbar icons for iPhone 4s, 5, 6, 6 Plus.
    - Generate launch images for iPhone 4s, 5, 6, 6 Plus.

## Installation

1. Install GraphicsMagick

        brew install graphicsmagick

2. Install Gulp

        npm install -g gulp

3. Install this app

        git clone https://github.com/sl2/gulp-iOS-icon-generator.git
        cd gulp-iOS-icon-generator
        npm install

## Usage

1. Put an app icon into ./src/appicons.
 
    - Format : PNG
    - Size : 1024 x 1024

2. Put tabbar icons into ./src/tabbars

    - Format : PNG
    - Size : 3x (75 x 75)

3. Put toolbar and navigationbar icons into ./src/toolbars
    
    - Format : PNG
    - Size : 3x (66 x 66)

4. Put a launch image into ./src/launchimages
 
    - Format : PNG
    - Size : 2028 x 2028

5. Execute gulp
    
        gulp

6. Check under the `./dist` directory

    - `./dist/appicons`
        - icons for settings, spotlight, app and portrait
    - `./dist/tabbar`
        - 1x, 2x and 3x images
    - `./dist/toolbar`
        - 1x, 2x and 3x images

## Output Icons

### App icons

- Settings
- Spotlight
- App
- Portrait for App Store

### Tab bar icons

- 1x icons
- 2x icons
- 3x icons

### Toolbar icons / Navigation bar icons

- 1x icons
- 2x icons
- 3x icons

### Launch images (portrait only)

- iPhone4s
- iPhone5
- iPhone6
- iPhone6 Plus

## LICENSE

MIT LICENSE


