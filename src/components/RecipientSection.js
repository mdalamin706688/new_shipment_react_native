import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StepIndicator from './StepIndicator';
import DestinationOption from './DestinationOption';
import ShippingOption from './ShippingOption';
import ShipAndShipment from '../../assets/icons/ShipAndShipment';

const RecipientSection = () => {
  // here 3 image in container
  const anguillaFlag = require('../../assets/images/Anguilla.png');
  const dominicaFlag = require('../../assets/images/Dominica.png');
  const stLuciaFlag = require('../../assets/images/St_Lucia.png');
  const air = require('../../assets/images/Air.png');
  const Ocean = require('../../assets/images/Ocean.png');
  
  return (
    <View style={styles.container}>
      <StepIndicator step="2" title="Where is this shipment going?" />
      
      <View style={styles.content}>
        <View style={styles.shipsmartSection}>
          <View style={styles.shipsmartHeader}>
            {/* <View style={styles.yellowIcon} /> */}
            <View>
              <ShipAndShipment></ShipAndShipment>
            </View>
            <View style={styles.shipsmartInfo}>
              <Text style={styles.shipsmartTitle}>Ship with Shipsmart</Text>
              <Text style={styles.shipsmartSubtitle}>SHIP DIRECTLY TO YOUR ISLAND</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.destinationSection}>
          <Text style={styles.sectionTitle}>Select a destination</Text>
          
          <View style={styles.destinations}>
            <DestinationOption
              name="Anguilla"
              flagUri={anguillaFlag}
              isSelected={true}
            />
            <DestinationOption
              name="Dominica"
              flagUri={dominicaFlag}
              isSelected={false}
            />
            <DestinationOption
              name="St. Lucia"
              flagUri={stLuciaFlag}
              isSelected={false}
            />
          </View>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.shippingSection}>
          <Text style={styles.sectionTitle}>How do you want to ship?</Text>
          
          <View style={styles.shippingOptions}>
            <ShippingOption
              name="Via Ocean"
              iconType="ship"
              isSelected={true}
            />
            <ShippingOption
              name="Via Air"
              iconType="plane"
              isSelected={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  content: {
    backgroundColor: '#EFF7FF',
    borderRadius: 8,
    padding: 20,
    gap: 16,
  },
  shipsmartSection: {
    gap: 17,
  },
  shipsmartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  yellowIcon: {
    width: 42.5,
    height: 42.5,
    backgroundColor: '#F9E900',
    borderRadius: 21.25,
  },
  shipsmartInfo: {
    flex: 1,
  },
  shipsmartTitle: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 28,
    color: '#1B1B1B',
  },
  shipsmartSubtitle: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#1B1B1B',
  },
  divider: {
    height: 1,
    backgroundColor: '#BAC6D3',
  },
  destinationSection: {
    gap: 11,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize:16,
    lineHeight: 28,
    color: '#1B1B1B',
  },
  destinations: {
    gap: 20,
  },
  shippingSection: {
    gap: 11,
  },
  shippingOptions: {
    gap: 20,
  },
});

export default RecipientSection;
