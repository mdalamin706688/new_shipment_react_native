import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New shipment</Text>
        <TouchableOpacity style={styles.closeButton}>
          <View style={styles.closeButtonBackground}>
            <Svg width={20} height={20} viewBox="0 0 20 20">
              <Path
                d="M15 5L5 15M5 5l10 10"
                stroke="#931146"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    letterSpacing: -0.48,
    color: '#000000',
  },
  closeButton: {
    width: 32,
    height: 32,
  },
  closeButtonBackground: {
    width: 32,
    height: 32,
    backgroundColor: '#FCEDF1',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default Header;
