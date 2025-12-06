import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../components/Header';
import StepIndicator from '../components/StepIndicator';
import ShipmentDetailsSection from '../components/ShipmentDetailsSection';
import RecipientSection from '../components/RecipientSection';
import DeliveryAddressSection from '../components/DeliveryAddressSection';
import SaveButton from '../components/SaveButton';

const NewShipmentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ShipmentDetailsSection />
          <RecipientSection />
          <DeliveryAddressSection />
          <SaveButton />
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 25,
    gap: 40,
  },
  spacer: {
    height: 1,
  },
});

export default NewShipmentScreen;
