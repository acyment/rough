import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import rough from '../rough.rn.js';

export default function PathTest() {
  const rc = rough.reactNativeSvg();
  
  const renderRoughShape = (shape) => (
    <G key={Math.random()}>
      {shape.children.map((child, index) => (
        <Path key={index} {...child.props} />
      ))}
    </G>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Path Tests</Text>
      
      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Rectangle paths with different fills</Text>
        <View style={styles.svgContainer}>
          <Svg width={600} height={200} style={styles.svg}>
            {renderRoughShape(rc.path('M10 20 h 90 v 90 h -90z', {
              stroke: 'red',
              strokeWidth: '3',
              fill: 'rgba(0,0,255,0.2)',
              fillStyle: 'solid'
            }))}
            {renderRoughShape(rc.path('M120 20 h 90 v 90 h -90z', {
              fill: 'rgba(0,0,255,0.6)'
            }))}
            {renderRoughShape(rc.path('M230 20 h 90 v 90 h -90z', {
              fill: 'red',
              fillStyle: 'dots'
            }))}
            {renderRoughShape(rc.path('M340 20 h 90 v 90 h -90z', {
              fill: 'green',
              fillStyle: 'cross-hatch'
            }))}
            {renderRoughShape(rc.path('M450 20 h 90 v 90 h -90z', {
              fill: 'blue',
              fillStyle: 'zigzag'
            }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Complex nested paths</Text>
        <View style={styles.svgContainer}>
          <Svg width={400} height={120} style={styles.svg}>
            {renderRoughShape(rc.path('M37,17v15H14V17z M50,5H5v50h45z', {
              stroke: 'red',
              strokeWidth: '1',
              fill: 'blue'
            }))}
            {renderRoughShape(rc.path('M87,17v15H64V17z M100,5H55v50h45z', {
              fill: 'blue',
              fillStyle: 'dots'
            }))}
            {renderRoughShape(rc.path('M137,17v15H114V17z M150,5H105v50h45z', {
              fill: 'blue',
              fillStyle: 'cross-hatch'
            }))}
            {renderRoughShape(rc.path('M187,17v15H164V17z M200,5H155v50h45z', {
              fill: 'blue',
              fillStyle: 'zigzag'
            }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Arc paths</Text>
        <View style={styles.svgContainer}>
          <Svg width={500} height={200} style={styles.svg}>
            {renderRoughShape(rc.path('M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z', { fill: 'green' }))}
            {renderRoughShape(rc.path('M180 80 A 45 45, 0, 1, 0, 225 125 L 225 80 Z', { 
              fill: 'purple', 
              hachureAngle: 60, 
              hachureGap: 5 
            }))}
            {renderRoughShape(rc.path('M280 80 A 45 45, 0, 0, 1, 325 125 L 325 80 Z', { fill: 'red' }))}
            {renderRoughShape(rc.path('M380 80 A 45 45, 0, 1, 1, 425 125 L 425 80 Z', { fill: 'blue' }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Complex path with multiple segments</Text>
        <View style={styles.svgContainer}>
          <Svg width={400} height={150} style={styles.svg}>
            {renderRoughShape(rc.path('M50 20 Q 100 5 150 20 T 250 20 L 300 50 Q 280 80 250 80 L 200 80 Q 150 90 100 80 L 50 80 Z', {
              fill: 'lightblue',
              fillStyle: 'cross-hatch',
              stroke: 'blue',
              strokeWidth: 2,
              hachureGap: 8
            }))}
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
    marginBottom: 25,
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