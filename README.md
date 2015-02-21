gulp-iOS-icon-generator
=======================

- iOS's icon and launcimage generator with gulp. 

- Generate app, tabbar, toolbar and navigationbar icons and launch images for iPhone 4s, 5, 6, 6 plus.

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

1. Put an app icon image into ./src/appicons.
    
    - Format : PNG
    - Size : 1024 x 1024

2. Put tabbar icon images into ./src/tabbars

    - Format : PNG
    - Size : 3x

3. Put toolbar icon images into ./src/toolbars
    
    - Format : PNG
    - Size : for 3x

4. Put a launch image into ./src/launchimages
 
    - Format : PNG
    - Size : 2028 x 2028

5. Execute gulp
    
        gulp

6. Check under the `./dist` directory

    - `./dist/appicons`
        - icons for settings, spotlight, app and portrait
    - `./dist/tabbar`
        - 1x(25x25), 2x(50x50) and 3x(75x75) images
    - `./dist/toolbar`
        - 1x(22x22), 2x(44x44) and 3x(66x66) images

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



