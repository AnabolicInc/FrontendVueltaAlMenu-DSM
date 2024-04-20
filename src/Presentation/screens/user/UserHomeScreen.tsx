import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { StyleSheet, TextInput, Pressable } from 'react-native'
import { Button } from 'react-native'
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';






const Tab = createBottomTabNavigator();


export default function UserHomeScreen() {
  
  const [fontsLoaded] = useFonts({
    Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Muestra un componente de carga mientras se carga la fuente
  }

  return (

    
    
    <View>
        <Text style={{color:'#000'}}>Home Screen</Text>
    </View>
    
  )
}


