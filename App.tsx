import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/Presentation/navigation/MainAppStack';



export default function App() {
  return (
    <NavigationContainer>
      <MainAppStack />
    </NavigationContainer>
  );
}

