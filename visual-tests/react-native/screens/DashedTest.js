import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import rough from '../rough.rn.js';

export default function DashedTest() {
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
      <Text style={styles.sectionTitle}>Dashed Styles Tests</Text>
      
      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Dashed rectangles</Text>
        <View style={styles.svgContainer}>
          <Svg width={500} height={120} style={styles.svg}>
            {renderRoughShape(rc.rectangle(10, 10, 80, 80, { strokeLineDash: [5, 5] }))}
            {renderRoughShape(rc.rectangle(110, 10, 80, 80, { fill: 'red', strokeLineDash: [10, 5] }))}
            {renderRoughShape(rc.rectangle(210, 10, 80, 80, { fill: 'pink', fillStyle: 'solid', strokeLineDash: [15, 10, 5, 10] }))}
            {renderRoughShape(rc.rectangle(310, 10, 80, 80, { fill: 'blue', fillStyle: 'cross-hatch', strokeLineDash: [8, 8] }))}
            {renderRoughShape(rc.rectangle(410, 10, 80, 80, { stroke: 'green', strokeWidth: 3, strokeLineDash: [12, 6] }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Dashed ellipses</Text>
        <View style={styles.svgContainer}>
          <Svg width={500} height={120} style={styles.svg}>
            {renderRoughShape(rc.ellipse(50, 60, 80, 80, { strokeLineDash: [5, 5] }))}
            {renderRoughShape(rc.ellipse(150, 60, 80, 80, { fill: 'yellow', strokeLineDash: [10, 5] }))}
            {renderRoughShape(rc.ellipse(250, 60, 80, 80, { fill: 'lightblue', fillStyle: 'zigzag', strokeLineDash: [8, 4, 2, 4] }))}
            {renderRoughShape(rc.ellipse(350, 60, 80, 80, { fill: 'lightgreen', fillStyle: 'dots', strokeLineDash: [15, 10] }))}
            {renderRoughShape(rc.ellipse(450, 60, 80, 80, { stroke: 'purple', strokeWidth: 4, strokeLineDash: [20, 10] }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Dashed polygons</Text>
        <View style={styles.svgContainer}>
          <Svg width={500} height={120} style={styles.svg}>
            {renderRoughShape(rc.polygon([[30, 20], [10, 80], [50, 80]], { strokeLineDash: [5, 5] }))}
            {renderRoughShape(rc.polygon([[130, 20], [110, 80], [150, 80]], { fill: 'orange', strokeLineDash: [10, 5] }))}
            {renderRoughShape(rc.polygon([[230, 20], [210, 80], [250, 80]], { fill: 'cyan', fillStyle: 'cross-hatch', strokeLineDash: [8, 8] }))}
            {renderRoughShape(rc.polygon([[330, 20], [310, 80], [350, 80]], { fill: 'pink', fillStyle: 'zigzag', strokeLineDash: [12, 6] }))}
            {renderRoughShape(rc.polygon([[430, 20], [410, 80], [450, 80]], { stroke: 'red', strokeWidth: 3, strokeLineDash: [15, 5, 5, 5] }))}
          </Svg>
        </View>
      </View>

      <View style={styles.testGroup}>
        <Text style={styles.testLabel}>Mixed dashed patterns</Text>
        <View style={styles.svgContainer}>
          <Svg width={400} height={200} style={styles.svg}>
            {renderRoughShape(rc.line(10, 20, 300, 20, { strokeLineDash: [5, 5], stroke: 'black', strokeWidth: 2 }))}
            {renderRoughShape(rc.line(10, 40, 300, 40, { strokeLineDash: [10, 5, 2, 5], stroke: 'red', strokeWidth: 3 }))}
            
            {renderRoughShape(rc.rectangle(50, 70, 100, 60, { 
              fill: 'lightblue', 
              fillStyle: 'dots', 
              strokeLineDash: [8, 8], 
              stroke: 'blue', 
              strokeWidth: 2 
            }))}
            
            {renderRoughShape(rc.ellipse(250, 100, 80, 60, { 
              fill: 'lightgreen', 
              fillStyle: 'zigzag', 
              strokeLineDash: [15, 10, 5, 10], 
              stroke: 'green', 
              strokeWidth: 3 
            }))}
            
            {renderRoughShape(rc.polygon([[320, 80], [300, 130], [340, 130]], { 
              fill: 'yellow', 
              fillStyle: 'cross-hatch', 
              strokeLineDash: [12, 4], 
              stroke: 'orange', 
              strokeWidth: 2 
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