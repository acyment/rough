import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import rough from '../rough.rn.js';

export default function SimpleTest() {
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
      <Text style={styles.sectionTitle}>Simple Rectangle Test</Text>
      
      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Basic Rectangle</Text>
        <View style={styles.svgContainer}>
          <Svg width={300} height={150} style={styles.svg}>
            {renderRoughShape(rc.rectangle(10, 10, 80, 80))}
            {renderRoughShape(rc.rectangle(110, 10, 80, 80, { fill: 'red' }))}
            {renderRoughShape(rc.rectangle(210, 10, 80, 80, { fill: 'blue', fillStyle: 'solid' }))}
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