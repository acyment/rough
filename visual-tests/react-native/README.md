# RoughJS React Native Visual Tests

This directory contains visual tests for RoughJS React Native implementation using Expo. The tests verify that `rough.reactNativeSvg()` renders correctly across different platforms including React Native, iOS, Android, and Web (via Expo Web).

## Features

- **Cross-platform testing**: Tests run on React Native, iOS, Android, and Web
- **Comprehensive coverage**: All major RoughJS drawing primitives are tested
- **Visual verification**: Interactive test runner for manual visual inspection
- **Expo integration**: Uses Expo for universal app development

## Test Coverage

The visual tests include:

### Core Drawing Primitives
- **Rectangle**: Basic rectangles with various fill styles and stroke options
- **Line**: Straight lines with different styles, weights, and dash patterns
- **Ellipse**: Circles and ellipses with various dimensions and fills
- **Polygon**: Triangles, pentagons, stars, and custom polygons
- **Curve**: Bezier curves with different fill styles
- **Path**: SVG path commands including arcs and complex shapes

### Fill Styles
- `solid` - Solid color fills
- `hachure` - Default hatching pattern (diagonal lines)
- `cross-hatch` - Perpendicular hatching lines
- `dots` - Dotted fill pattern
- `zigzag` - Zigzag fill pattern

### Style Options
- **Stroke**: Color, width, dash patterns
- **Fill**: Colors, transparency, patterns
- **Roughness**: Control over sketch-like appearance
- **Hachure**: Gap, angle, and weight customization

## Prerequisites

1. **RoughJS Build**: Ensure `bundled/rough.rn.js` exists
   ```bash
   # From project root
   npm run build:rn
   ```

2. **Node.js**: Version 16 or higher
3. **Expo CLI**: Install globally
   ```bash
   npm install -g @expo/cli
   ```

## Installation

```bash
cd visual-tests/react-native
npm install
```

## Running Tests

### Automated Test Runner

The test runner automatically installs dependencies and starts the appropriate platform:

```bash
# Web tests (default)
npm test
# or
npm run test:web

# iOS tests (requires iOS simulator/device)
npm run test:ios

# Android tests (requires Android emulator/device)
npm run test:android

# Custom port for web
node test-runner.js web 3001
```

### Manual Testing

```bash
# Start Expo development server
npm start

# Then press:
# 'w' for web
# 'i' for iOS simulator
# 'a' for Android emulator
```

### Web Testing

For web tests, navigate to `http://localhost:3000` (or specified port) after starting the server.

## Test Structure

```
react-native/
├── App.js                 # Main app with test navigation
├── screens/              # Test screen components
│   ├── RectangleTest.js  # Rectangle drawing tests
│   ├── LineTest.js       # Line drawing tests
│   ├── EllipseTest.js    # Ellipse/circle tests
│   ├── PolygonTest.js    # Polygon drawing tests
│   ├── CurveTest.js      # Curve drawing tests
│   ├── PathTest.js       # SVG path tests
│   └── DashedTest.js     # Dashed pattern tests
├── test-runner.js        # Automated test runner
└── package.json          # Dependencies and scripts
```

## Platform-Specific Notes

### Web (Expo Web)
- Uses `react-native-web` to render React Native components in browser
- SVG rendering via `react-native-svg` web implementation
- Fastest testing environment for development

### iOS
- Requires Xcode and iOS Simulator or physical device
- Native SVG rendering performance
- Test touch interactions and native feel

### Android
- Requires Android Studio and emulator or physical device
- Native Android SVG rendering
- Test Android-specific behaviors

### React Native
- Universal testing across all platforms
- Consistent API regardless of platform
- Platform-specific optimizations automatically applied

## Visual Verification

Since these are visual tests, verification is manual:

1. **Launch the test runner** for your target platform
2. **Navigate through test categories** using the horizontal tabs
3. **Compare output** with expected results from original HTML tests
4. **Verify cross-platform consistency** by running on multiple platforms

## Expected Results

Each test should render rough, hand-drawn style graphics with:
- Appropriate fill patterns and colors
- Correct stroke styles and weights
- Proper roughness and sketch-like appearance
- Consistent behavior across platforms

## Troubleshooting

### Missing rough.rn.js
```bash
# From project root
npm run build:rn
```

### Expo Dependencies
```bash
cd visual-tests/react-native
rm -rf node_modules package-lock.json
npm install
```

### Platform-Specific Issues
- **iOS**: Ensure Xcode is installed and iOS Simulator is available
- **Android**: Ensure Android Studio is installed with emulator
- **Web**: Check that port 3000 (or specified port) is available

## Contributing

When adding new tests:

1. Create a new screen component in `screens/`
2. Add the component to `App.js` imports and tests array
3. Follow existing patterns for styling and layout
4. Test on all platforms before submitting

## Integration with Main Project

These tests are part of the RoughJS visual test suite:
- Located in `/visual-tests/react-native/`
- Complements existing Canvas and SVG HTML tests
- Uses the same test patterns adapted for React Native
- Verifies React Native migration functionality