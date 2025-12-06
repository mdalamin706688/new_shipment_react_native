import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ShippingOption = ({ name, iconType, isSelected }) => {

  const renderIcon = () => {
    if (iconType === 'ship') {
      return (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.5" cy="12.5" r="12" fill="white" stroke="black" />
          <path d="M17.1582 17.0959L18.1504 12.2298C18.17 12.1338 18.1168 12.0378 18.025 12.0035C14.462 10.6727 10.5384 10.6727 6.97542 12.0035C6.88361 12.0378 6.83041 12.1338 6.84998 12.2298L7.84836 17.1273" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.2416 11.3192L9.24146 9.06204C9.24145 8.9642 9.30556 8.87792 9.39924 8.84968C11.4196 8.24086 13.5746 8.24086 15.595 8.84968C15.6887 8.87792 15.7528 8.9642 15.7528 9.06204L15.753 11.3192" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12.5005 17.1081V11.0298" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10.9254 8.37684L10.9253 7.13528C10.9253 7.06465 10.9715 7.00235 11.0392 6.98197C11.9899 6.69546 13.004 6.69546 13.9548 6.98197C14.0225 7.00235 14.0687 7.06465 14.0688 7.13528L14.0688 8.37684" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6.97314 17.5784C7.28514 17.3523 7.5561 17.0952 8.17126 17.0952C9.2702 17.0952 9.27146 17.915 10.3704 17.915C11.4687 17.915 11.47 17.0952 12.5689 17.0952C13.6685 17.0952 13.6685 17.915 14.7681 17.915C15.8683 17.915 15.8683 17.0952 16.9685 17.0952C17.4908 17.0952 17.7643 17.2796 18.0264 17.4729M17.1605 17.1015V17.0952" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
      );
    } else {
      return (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.5" cy="12.5" r="12" fill="white" stroke="black" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62503 13.8049L11.0912 12.041C10.0672 11 9.06486 9.98139 8.02184 8.92073C8.38059 8.60131 8.69323 8.27173 9.05673 8.01198C9.4799 7.70952 9.97022 7.75835 10.4388 7.92043C11.5124 8.29275 12.5859 8.66777 13.6499 9.06654C13.9185 9.16759 14.0806 9.12215 14.2725 8.92344C14.8252 8.35311 15.3807 7.78344 15.9707 7.25312C16.5783 6.70651 17.662 6.23315 18.3503 6.92217C19.0387 7.60983 18.566 8.69355 18.0194 9.30119C17.4884 9.89119 16.9188 10.4466 16.3484 11C16.1504 11.1913 16.1043 11.3533 16.2053 11.6226C16.6047 12.6866 16.9791 13.7595 17.3514 14.8337C17.5141 15.3023 17.5623 15.7927 17.2599 16.2158C17.0001 16.5786 16.6712 16.8919 16.3511 17.2507C15.2911 16.207 13.2309 14.1806 13.2309 14.1806L11.4581 15.638L11.6466 17.4616L10.6877 18.4212L9.24865 16.0232L6.85132 14.5841L7.81025 13.6252L9.62503 13.8049Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
      );
    }
  };

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

      <View>
        {renderIcon()}
      </View>
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
  iconContainer: {

  },
});

export default ShippingOption;
