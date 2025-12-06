import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const  StepIndicator = ({ step, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepCircle}>
        <Text style={styles.stepNumber}>{step}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  stepCircle: {
    width: 30,
    height: 30,
    backgroundColor: '#EFF7FF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumber: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 18,
    color: '#004EF8',
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: -0.4,
    color: '#000000',
  },
});

export default StepIndicator;
