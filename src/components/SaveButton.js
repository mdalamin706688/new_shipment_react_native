import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native-web';

const SaveButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Save shipment</Text>
      <View style={styles.svg}>
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#004EF8',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    height: 48,
    gap: 6,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  svg: {
    marginTop: 5
  }
});

export default SaveButton;
