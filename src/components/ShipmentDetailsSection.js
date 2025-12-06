import React from 'react';
import { View, StyleSheet } from 'react-native';
import StepIndicator from './StepIndicator';
import InputField from './InputField';

const ShipmentDetailsSection = () => {
  return (
    <View style={styles.container}>
      <StepIndicator step="1" title="Enter shipment details" />
      <View style={styles.inputs}>
        <InputField
          label="NAME YOUR SHIPMENT"
          value="Cyber Monday Items"
        />
        <InputField
          label="SHIPMENT DESCRIPTION"
          value="Electronics"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  inputs: {
    gap: 15,
  },
});

export default ShipmentDetailsSection;
