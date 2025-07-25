# Rough React Native

A React Native port of [rough.js](https://roughjs.com/) - Create graphics with a hand-drawn, sketchy appearance for React Native applications using react-native-svg.

## Overview

This project is a fork and React Native adaptation of the excellent [rough.js](https://github.com/rough-stuff/rough) library by Preet Shihn. It enables you to create graphics with a sketchy, hand-drawn appearance in React Native applications.

## Features

- ✅ Hand-drawn, sketchy graphics
- ✅ React Native SVG support
- ✅ Expo compatibility
- ✅ Multiple fill styles (hachure, cross-hatch, dots, zigzag, etc.)
- ✅ Customizable roughness and styling options
- ✅ Visual test suite included

## Installation

```bash
npm install rough-react-native react-native-svg
```

For Expo projects:
```bash
npx expo install react-native-svg
```

## Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import rough from 'rough-react-native';
import { renderRoughShape } from 'rough-react-native/components/RoughRenderer';

export default function App() {
  const rc = rough.reactNativeSvg();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={200} height={200}>
        {renderRoughShape(rc.rectangle(10, 10, 150, 80, { 
          fill: 'red', 
          fillStyle: 'hachure',
          stroke: 'blue',
          strokeWidth: 2 
        }))}
        {renderRoughShape(rc.circle(100, 150, 60, { 
          fill: 'green', 
          fillStyle: 'dots' 
        }))}
      </Svg>
    </View>
  );
}
```

## Visual Tests

This project includes a comprehensive visual test suite demonstrating various shapes and styling options:

- Rectangle tests with different fills
- Circle and ellipse tests
- Line and curve tests
- Polygon tests
- Path tests
- Dashed line tests

To run the visual tests:

```bash
npm start
```

Then open the app in your preferred platform (iOS, Android, or Web).

## API

The API closely follows the original rough.js library:

### Available Methods

- `rectangle(x, y, width, height, options)`
- `circle(x, y, diameter, options)`
- `ellipse(x, y, width, height, options)`
- `line(x1, y1, x2, y2, options)`
- `linearPath(points, options)`
- `polygon(points, options)`
- `arc(x, y, width, height, start, stop, closed, options)`
- `curve(points, options)`
- `path(pathString, options)`

### Options

- `stroke`: Stroke color
- `strokeWidth`: Stroke width
- `fill`: Fill color
- `fillStyle`: 'hachure', 'solid', 'zigzag', 'cross-hatch', 'dots', 'dashed', 'zigzag-line'
- `roughness`: Roughness level (default: 1)
- `bowing`: Bowing level (default: 1)
- `hachureAngle`: Angle of hachure lines
- `hachureGap`: Gap between hachure lines
- And many more...

## Attribution

This project is based on [rough.js](https://github.com/rough-stuff/rough) by Preet Shihn, adapted for React Native by Alan Cyment. The migration to React Native was assisted by [Claude Code](https://claude.ai/code).

### Original rough.js

- **Author**: Preet Shihn
- **Repository**: https://github.com/rough-stuff/rough
- **Website**: https://roughjs.com/
- **License**: MIT

## License

MIT License - see [LICENSE](LICENSE) file for details.

This project maintains the same MIT license as the original rough.js library, with appropriate attribution to the original author.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Changelog

### v1.0.0
- Initial React Native port of rough.js
- Added React Native SVG rendering support
- Included comprehensive visual test suite
- Expo compatibility

## Links

- [Original rough.js](https://github.com/rough-stuff/rough)
- [react-native-svg](https://github.com/react-native-svg/react-native-svg)
- [Expo](https://expo.dev/)