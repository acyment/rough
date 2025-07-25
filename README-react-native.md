# RoughJS for React Native & Expo

This library has been migrated to support React Native (including web) and Expo while maintaining full backward compatibility with existing web applications.

## Installation

### For Expo (SDK 49+)
```bash
npx expo install roughjs react-native-svg
```

### For React Native CLI
```bash
npm install roughjs react-native-svg
# iOS additional step:
cd ios && pod install
```

### For Web
```bash
npm install roughjs
```

## Usage in React Native & Expo

```javascript
import React from 'react';
import { View } from 'react-native';
import rough from 'roughjs';
import { Svg, Path, G } from 'react-native-svg';

// Create a rough React Native SVG renderer
const roughSvg = rough.reactNativeSvg();

// Generate rough shapes
const rectangle = roughSvg.rectangle(10, 10, 100, 100, {
  fill: 'red',
  stroke: 'blue',
  strokeWidth: 2
});

// Use in your React Native/Expo component
const MyComponent = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Svg width="200" height="200">
      <G>
        {rectangle.children.map((child, index) => (
          <Path key={index} {...child.props} />
        ))}
      </G>
    </Svg>
  </View>
);

export default MyComponent;
```

### Expo Web Support

The library automatically works with Expo's web target without any additional configuration. The same code runs on iOS, Android, and web.

## Usage in Web (unchanged)

```javascript
import rough from 'roughjs';

// Canvas
const canvas = document.getElementById('canvas');
const rc = rough.canvas(canvas);
rc.rectangle(10, 10, 100, 100);

// SVG
const svg = document.getElementById('svg');
const rc = rough.svg(svg);
const rect = rc.rectangle(10, 10, 100, 100);
svg.appendChild(rect);
```

## Platform Detection

The library automatically detects the platform and provides appropriate error messages if you try to use incompatible methods:

- `rough.canvas()` and `rough.svg()` will throw errors in React Native
- `rough.reactNativeSvg()` works in both React Native and web environments

## Available Methods

All drawing methods are available in React Native:
- `line(x1, y1, x2, y2, options)`
- `rectangle(x, y, width, height, options)`
- `ellipse(x, y, width, height, options)`
- `circle(x, y, diameter, options)`
- `linearPath(points, options)`
- `polygon(points, options)`
- `arc(x, y, width, height, start, stop, closed, options)`
- `curve(points, options)`
- `path(d, options)`

## React Native SVG Output

The React Native renderer returns objects with this structure:

```javascript
{
  props: {}, // Props for the container
  children: [
    {
      props: {
        d: "M10,10 L110,10 L110,110 L10,110 Z", // SVG path data
        stroke: "blue",
        strokeWidth: 2,
        fill: "red"
        // ... other SVG attributes
      }
    }
  ]
}
```

This structure maps directly to react-native-svg components.

## Expo SDK Compatibility

- **Expo SDK 49+**: Fully supported
- **Expo SDK 47-48**: Supported (use `expo install react-native-svg@13.4.0`)
- **Expo SDK 46 and below**: Not recommended (use roughjs@4.5.x)

## Example Expo App

```javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import rough from 'roughjs';
import { Svg, Path, G } from 'react-native-svg';

const roughSvg = rough.reactNativeSvg();

export default function App() {
  const shapes = [
    roughSvg.rectangle(20, 20, 160, 80, { fill: 'lightblue', stroke: 'blue' }),
    roughSvg.circle(100, 150, 60, { fill: 'lightgreen', stroke: 'green' }),
    roughSvg.ellipse(100, 220, 120, 40, { fill: 'pink', stroke: 'red' })
  ];

  return (
    <View style={styles.container}>
      <Svg width="200" height="300">
        {shapes.map((shape, shapeIndex) => (
          <G key={shapeIndex}>
            {shape.children.map((child, childIndex) => (
              <Path key={childIndex} {...child.props} />
            ))}
          </G>
        ))}
      </Svg>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```