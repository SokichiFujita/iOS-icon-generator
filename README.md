gulp-iOS-icon-generator
=======================

- Generate icon images of app, tabbar, toolbar and navigationbar for iPhone and iPad.
- Generate launch images for iPhone and iPad.

## Installation

1. Install GraphicsMagick

        brew install graphicsmagick

2. Clone this app

        git clone https://github.com/sl2/gulp-iOS-icon-generator.git
        cd gulp-iOS-icon-generator
        npm install

3. Execute
        
        npx gulp

## Usage

1. Put an app icon into ./src/appicons.
 
    - Format : PNG
    - Size : 1024 x 1024 is recommended

2. Put tabbar icons into ./src/tabbars

    - Format : PNG
    - Size : 3x (75 x 75) is recommended

3. Put toolbar and navigationbar icons into ./src/toolbars
    
    - Format : PNG
    - Size : 3x (66 x 66) is recommended

4. Put a launch image into ./src/launchimages
 
    - Format : PNG
    - Size : 2028 x 2028 is recommended 

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
- iPhoneX
- iPhoneXS Max / XR
- iPad mini
- iPad
- iPad mini (Retina)
- iPad (Retina)


## LICENSE

MIT LICENSE


