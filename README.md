iOS-icon-generator
=======================

Generate multiple size of icons for iPhone (4s - 11 / 11pro) and iPad app from an image. Launch image is also supported.

- Icon: app, tabbar, toolbar, navigation bar
- launch images

## Usage

1. Install Node.js v6.x - v10.x

2. Install GraphicsMagick

        brew install graphicsmagick

3. Clone this app

        git clone https://github.com/sl2/gulp-iOS-icon-generator.git
        cd gulp-iOS-icon-generator
        npm install

4. Put an app icon into ./src/appicons.
 
    - Format : PNG
    - Size : 1024 x 1024 is recommended

5. Put tabbar icons into ./src/tabbars

    - Format : PNG
    - Size : 3x (75 x 75) is recommended

6. Put toolbar and navigationbar icons into ./src/toolbars
    
    - Format : PNG
    - Size : 3x (66 x 66) is recommended

7. Put a launch image into ./src/launchimages
 
    - Format : PNG
    - Size : 2028 x 2028 is recommended 

8. Execute gulp
    
        npx gulp

9. Check under the `./dist` directory

    - `./dist/appicons`
        - icon images for settings, spotlight, app and portrait
    - `./dist/tabbars`
        - 1x, 2x and 3x images
    - `./dist/toolbars`
        - 1x, 2x and 3x images
    - `./dist/launchimages`
        - launch images for iOS and iPad

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

- iPhone 4s
- iPhone 5
- iPhone 6
- iPhone 6 Plus
- iPhone 7
- iPhone 7 Plus
- iPhone 8
- iPhone 8 Plus
- iPhone SE
- iPhone X / XS
- iPhone XR
- iPhone XS Max
- iPhone 11
- iPhone 11 Pro
- iPad mini
- iPad
- iPad mini (Retina)
- iPad (Retina)
- iPad Pro

## LICENSE

MIT LICENSE


