import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StepIndicator from './StepIndicator';
import Svg, { Path } from 'react-native-svg';

const DeliveryAddressSection = () => {
  return (
    <View style={styles.container}>
      <StepIndicator step="3" title="Select delivery address" />

      <View style={styles.content}>
        <TouchableOpacity style={styles.addressSelector}>
          <View style={styles.addressInfo}>
            <Text style={styles.addressTitle}>My addresses</Text>
            <Text style={styles.addressSubtitle}>Tap to select an address</Text>
          </View>
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6666 6L7.99992 10.6667L3.33325 6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </Svg>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.addAddressButton}>
          <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.25C12.7282 2.25 15.75 5.27181 15.75 9C15.75 12.7274 12.7282 15.75 9 15.75C5.27181 15.75 2.25 12.7274 2.25 9C2.25 5.27181 5.27181 2.25 9 2.25Z" stroke="#004EF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.4742 9.00146H6.52441" stroke="#004EF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 6.52783V11.4725" stroke="#004EF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </Svg>
          <Text style={styles.addAddressText}>ADD NEW ADDRESS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  content: {
    gap: 18,
  },
  addressSelector: {
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 60,
    gap: 11,
  },
  addressInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  addressTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: '#1B1B1B',
    marginBottom: 2,
  },
  addressSubtitle: {
    fontSize: 14,
    color: '#636468',
  },
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 1,
  },
  addAddressText: {
    fontWeight: '500',
    fontSize: 12,
    letterSpacing: -0.24,
    textTransform: 'uppercase',
    color: '#004EF8',
  },
});

export default DeliveryAddressSection;
