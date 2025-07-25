import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';

// Import all test components
import SimpleTest from './screens/SimpleTest';
import RectangleTest from './screens/RectangleTest';
import LineTest from './screens/LineTest';
import EllipseTest from './screens/EllipseTest';
import PolygonTest from './screens/PolygonTest';
import CurveTest from './screens/CurveTest';
import PathTest from './screens/PathTest';
import DashedTest from './screens/DashedTest';

export default function App() {
  const [selectedTest, setSelectedTest] = useState(null);

  const tests = [
    { name: 'Simple', component: SimpleTest },
    { name: 'Rectangle', component: RectangleTest },
    { name: 'Line', component: LineTest },
    { name: 'Ellipse', component: EllipseTest },
    { name: 'Polygon', component: PolygonTest },
    { name: 'Curve', component: CurveTest },
    { name: 'Path', component: PathTest },
    { name: 'Dashed', component: DashedTest },
  ];

  if (selectedTest) {
    const TestComponent = selectedTest.component;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => setSelectedTest(null)}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{selectedTest.name} Test</Text>
        </View>
        <ScrollView style={styles.testContainer}>
          <TestComponent />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>RoughJS React Native Visual Tests</Text>
        <Text style={styles.subtitle}>Platform: {Platform.OS}</Text>
      </View>
      
      <ScrollView style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Select a test to run:</Text>
        {tests.map((test, index) => (
          <TouchableOpacity
            key={index}
            style={styles.testButton}
            onPress={() => setSelectedTest(test)}
          >
            <Text style={styles.testButtonText}>{test.name} Test</Text>
            <Text style={styles.testButtonArrow}>→</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    flex: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    position: 'absolute',
    right: 20,
    top: 8,
  },
  menuContainer: {
    flex: 1,
    padding: 20,
  },
  testContainer: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  testButton: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dee2e6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  testButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  testButtonArrow: {
    fontSize: 16,
    color: '#666',
  },
});