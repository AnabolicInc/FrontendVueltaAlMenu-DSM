import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import UserHomeScreen from './src/Presentation/screens/UserHomeScreen';
import LoginScreen from './src/Presentation/screens/login/LoginScreen';





export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C1013',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

