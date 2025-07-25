import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import rough from '../rough.rn.js';

export default function CurveTest() {
  const rc = rough.reactNativeSvg();
  
  const renderRoughShape = (shape) => (
    <G key={Math.random()}>
      {shape.children.map((child, index) => (
        <Path key={index} {...child.props} />
      ))}
    </G>
  );

  const curvePoints = [
    [10, 10],
    [200, 10],
    [100, 100],
    [100, 50],
    [300, 100],
    [60, 200]
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Curve Tests</Text>
      
      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Basic curve with different fills</Text>
        <View style={styles.svgContainer}>
          <Svg width={650} height={220} style={styles.svg}>
            {renderRoughShape(rc.curve(curvePoints, { stroke: 'black', strokeWidth: 2, fill: 'red', hachureAngle: 90 }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Curve with solid fill</Text>
        <View style={styles.svgContainer}>
          <Svg width={650} height={220} style={styles.svg}>
            {renderRoughShape(rc.curve(curvePoints.map(([x, y]) => [x, y + 10]), { fill: 'red', fillStyle: 'solid' }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Curve with dots fill</Text>
        <View style={styles.svgContainer}>
          <Svg width={650} height={220} style={styles.svg}>
            {renderRoughShape(rc.curve(curvePoints.map(([x, y]) => [x, y + 10]), { fill: 'red', fillStyle: 'dots', hachureGap: 16, fillWeight: 2 }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Curve with cross-hatch fill</Text>
        <View style={styles.svgContainer}>
          <Svg width={650} height={220} style={styles.svg}>
            {renderRoughShape(rc.curve(curvePoints.map(([x, y]) => [x, y + 10]), { fill: 'red', fillStyle: 'cross-hatch', hachureGap: 8 }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Curve with zigzag fill</Text>
        <View style={styles.svgContainer}>
          <Svg width={650} height={220} style={styles.svg}>
            {renderRoughShape(rc.curve(curvePoints.map(([x, y]) => [x, y + 10]), { fill: 'red', fillStyle: 'zigzag', hachureGap: 8 }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Curve with thick stroke</Text>
        <View style={styles.svgContainer}>
          <Svg width={650} height={220} style={styles.svg}>
            {renderRoughShape(rc.curve(curvePoints.map(([x, y]) => [x, y + 10]), { stroke: 'orange', strokeWidth: 5 }))}
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  testGroup: {
    marginBottom: 20,
  },
  testLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  svgContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  svg: {
    backgroundColor: 'white',
    borderRadius: 4,
  },
});