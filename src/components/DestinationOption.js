import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DestinationOption = ({ name, flagUri, isSelected }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
          {isSelected && (
            <Svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="13" fill="#004EF8" />
              <path d="M16.8675 10.3838L11.6588 15.5925L9.29126 13.2249" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </Svg>
          )}
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>

      {flagUri && (
        <Image source={typeof flagUri === 'string' ? { uri: flagUri } : flagUri} style={styles.flag} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 28,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#1B1B1B',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#004EF8',
    borderColor: '#004EF8',
  },
  name: {
    fontSize: 16,
    color: '#1B1B1B',
  },
  flag: {
    width: 35,
    height: 27,
    borderRadius: 2,
  },
});

export default DestinationOption;
