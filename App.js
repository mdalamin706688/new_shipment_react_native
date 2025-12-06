import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import NewShipmentScreen from './src/screens/NewShipmentScreen';

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      // Set mobile viewport dimensions
      const root = document.getElementById('root');
      if (root) {
        root.style.maxWidth = '480px';
        root.style.margin = '0 auto';
      }
      document.body.style.maxWidth = '480px';
      document.body.style.margin = '0 auto';
      document.body.style.backgroundColor = '#f5f5f5';
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <NewShipmentScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    maxWidth: Platform.OS === 'web' ? 480 : '100%',
    width: '100%',
    alignSelf: 'center',
  },
});
