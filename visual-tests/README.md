# RoughJS Visual Tests

This directory contains comprehensive visual tests for RoughJS across different rendering platforms and environments.

## Test Suites

### Canvas Tests (`canvas/`)
Traditional HTML Canvas API tests for browser environments:
- Rectangle, line, ellipse, polygon, and curve primitives
- Various fill styles: solid, hachure, cross-hatch, zigzag, dots
- Stroke customization and dashed patterns
- Path rendering and complex shapes
- **Usage**: Open HTML files directly in web browser

### SVG Tests (`svg/`)
DOM SVG tests for browser environments:
- Basic shapes with SVG rendering
- Fill pattern variations
- Dashed stroke patterns
- **Usage**: Open HTML files directly in web browser

### React Native Tests (`react-native/`)
Cross-platform React Native/Expo tests:
- **Platforms**: React Native, iOS, Android, Web (via Expo Web)
- **Features**: All RoughJS primitives using `rough.reactNativeSvg()`
- **Interactive**: Navigation between test categories
- **Automated**: Test runner with dependency management
- **Usage**: See `react-native/README.md` for detailed instructions

## Platform Support Matrix

| Feature | Canvas | SVG | React Native | iOS | Android | Web (Expo) |
|---------|--------|-----|--------------|-----|---------|------------|
| Rectangle | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Line | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Ellipse | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Polygon | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Curve | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Path | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Fill Styles | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Dashed Lines | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## Quick Start

### Web Tests (Canvas/SVG)
```bash
# Open any HTML file in your browser
open visual-tests/canvas/rectangle.html
open visual-tests/svg/rectangle.html
```

### React Native Tests
```bash
cd visual-tests/react-native
npm install
npm test  # Starts web version on localhost:3001
```

For other platforms:
```bash
npm run test:ios     # iOS simulator
npm run test:android # Android emulator
```

## Test Categories

### Basic Shapes
- **Rectangle**: Various fill styles, stroke options, dimensions
- **Line**: Different angles, weights, dash patterns
- **Ellipse**: Circles, ovals, different aspect ratios
- **Polygon**: Triangles, pentagons, stars, irregular shapes

### Advanced Features
- **Curve**: Bezier curves with control points
- **Path**: Complex SVG path commands and arcs
- **Dashed**: Comprehensive dash pattern testing

### Style Variations
- **Fill Styles**: solid, hachure, cross-hatch, zigzag, dots
- **Stroke Options**: color, width, dash patterns
- **Roughness**: Control sketch-like appearance
- **Hachure Settings**: gap, angle, weight customization

## Development Workflow

### Adding New Tests

1. **Web Tests**: Create HTML file in appropriate directory
2. **React Native Tests**: 
   - Add new screen component in `react-native/screens/`
   - Update `react-native/App.js` to include new test
   - Follow existing patterns for consistency

### Testing Process

1. **Visual Verification**: All tests require manual visual inspection
2. **Cross-Platform**: Test React Native components on all platforms
3. **Consistency**: Compare output across different rendering methods
4. **Regression**: Ensure new changes don't break existing functionality

## Architecture

### Canvas Tests
- Direct HTML Canvas API usage
- `rough.canvas(canvasElement)` initialization
- Immediate mode rendering

### SVG Tests  
- DOM SVG element manipulation
- `rough.svg(svgElement)` initialization
- Declarative SVG generation

### React Native Tests
- `rough.reactNativeSvg(SvgComponent)` initialization
- React component-based architecture
- Cross-platform compatibility layer
- Expo for universal development

## Migration Notes

The React Native tests represent a complete migration of the original Canvas/SVG tests to the React Native ecosystem:

- **API Compatibility**: Same RoughJS API across all platforms
- **Visual Parity**: React Native output matches Canvas/SVG output
- **Platform Optimization**: Automatic optimizations for each platform
- **Development Experience**: Unified development workflow with Expo

## Troubleshooting

### Build Issues
```bash
# Ensure RoughJS is built for React Native
npm run build:rn
```

### Missing Dependencies
```bash
cd visual-tests/react-native
rm -rf node_modules
npm install
```

### Platform-Specific Problems
- **iOS**: Requires Xcode and iOS Simulator
- **Android**: Requires Android Studio and emulator setup
- **Web**: Check port availability (default: 3000/3001)

## Contributing

When contributing new visual tests:

1. **Test Coverage**: Ensure tests cover new features comprehensively
2. **Platform Parity**: Test on all supported platforms
3. **Documentation**: Update README files with new test descriptions
4. **Consistency**: Follow existing code patterns and naming conventions