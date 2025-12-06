import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InputField = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 4,
    paddingVertical: 11,
    paddingHorizontal: 12,
    gap: 3,
    height: 60,
  },
  label: {
    fontSize: 10,
    fontWeight: 450,
    textTransform: 'uppercase',
    color: '#636468',
    textAlign: 'left',
  },
  value: {
    fontSize: 16,
    fontWeight:450,
    color: '#1B1B1B',
    textAlign: 'left',
  },
});

export default InputField;
