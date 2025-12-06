import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import NewShipmentScreen from './src/screens/NewShipmentScreen';

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'web' && typeof document !== 'undefined') {
      try {
        // Set mobile viewport dimensions safely
        const style = document.createElement('style');
        style.textContent = `
          body {
            max-width: 480px !important;
            margin: 0 auto !important;
            background-color: #f5f5f5 !important;
          }
          #root {
            max-width: 480px !important;
            margin: 0 auto !important;
          }
        `;
        document.head.appendChild(style);
      } catch (error) {
        console.error('Error setting mobile styles:', error);
      }
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
