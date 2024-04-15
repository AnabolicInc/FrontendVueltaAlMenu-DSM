import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { StyleSheet, TextInput, Pressable } from 'react-native'
import { Button } from 'react-native'
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';






const Tab = createBottomTabNavigator();


export default function LoginScreen() {
  
  const [fontsLoaded] = useFonts({
    Poppins: require('../../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Muestra un componente de carga mientras se carga la fuente
  }

  return (

    
    
    <View style={styles.loginContainer}>
        <Text style={{color:'white'}}>Home Screen</Text>
    </View>
    
  )
}

const styles = StyleSheet.create(
    {loginImage: {
        //ajust the image size
        width: 350,
        height: 350,
        //set the image position on top left of the screen
        position: 'absolute',
        top: -380,
        left: -300,
        //set the image opacity
        opacity: 0.7
        
    },

    loginContainer: {
      flex:0,
      alignContent: 'center',
      alignItems: 'center',
    },

    loginText: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
      fontFamily: 'Poppins',
    },

    subContainer: {
      backgroundColor: 'white',
      width: 200,
      alignContent: 'center',
      alignItems: 'center',
    },

    emailInputContainer: {
      backgroundColor: 'white',
      fontFamily: 'Poppins',
      width: 250,
      height: 40,
      position: 'absolute',
      top: 0,
      left: -20,
      borderRadius: 10,
    },

    passwordInputContainer: {
      backgroundColor: 'white',
      fontFamily: 'Poppins',
      width: 250,
      height: 40,
      position: 'absolute',
      top: 50,
      left: -20,
      borderRadius: 10,
    },

    buttomLogin: {
      fontFamily: 'Poppins',
      borderRadius: 10,
      backgroundColor: 'D17842',
      width: 150,
      height: 40,
      position: 'absolute',
      top: 160,
      left: 35,
    },

    signUpContainer: {
      position: 'absolute',
      top: 200,
      alignItems: 'center',
      marginTop: 20,
    },
    signUpText: {
      color: 'white',
      fontFamily: 'Poppins',
      textAlign: 'center',
      marginBottom: 20,
    },

    signUpLink: {
      color: '#D17842',
      fontFamily: 'Poppins',
      textAlign: 'center',
    },


})