import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg from 'react-native-svg';
import rough from '../rough.rn.js';
import { renderRoughShape } from '../components/RoughRenderer';

export default function RectangleTest() {
  const rc = rough.reactNativeSvg();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Rectangle Tests</Text>
      
      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Basic rectangles with different fills</Text>
        <View style={styles.svgContainer}>
          <Svg width={600} height={120} style={styles.svg}>
            {renderRoughShape(rc.rectangle(10, 10, 80, 80))}
            {renderRoughShape(rc.rectangle(110, 10, 80, 80, { fill: 'red' }))}
            {renderRoughShape(rc.rectangle(210, 10, 80, 80, { fill: 'pink', fillStyle: 'solid' }))}
            {renderRoughShape(rc.rectangle(310, 10, 80, 80, { fill: 'red', fillStyle: 'cross-hatch' }))}
            {renderRoughShape(rc.rectangle(410, 10, 80, 80, { fill: 'red', fillStyle: 'zigzag', hachureGap: 8 }))}
            {renderRoughShape(rc.rectangle(510, 10, 80, 80, { fill: 'red', fillStyle: 'dots' }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Styled rectangles</Text>
        <View style={styles.svgContainer}>
          <Svg width={320} height={120} style={styles.svg}>
            {renderRoughShape(rc.rectangle(10, 10, 80, 80, { roughness: 2 }))}
            {renderRoughShape(rc.rectangle(110, 10, 80, 80, { fill: 'red', stroke: 'blue', hachureAngle: 0, strokeWidth: 3 }))}
            {renderRoughShape(rc.rectangle(210, 10, 80, 80, { fill: 'pink', fillWeight: 5, hachureGap: 10, hachureAngle: 90 }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Large rectangle with dots</Text>
        <View style={styles.svgContainer}>
          <Svg width={500} height={300} style={styles.svg}>
            {renderRoughShape(rc.rectangle(10, 10, 480, 280, { fill: 'red', fillStyle: 'dots', hachureGap: 20, fillWeight: 2 }))}
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
    marginBottom: 30,
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