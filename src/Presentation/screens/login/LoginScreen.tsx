import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { StyleSheet, TextInput, Pressable } from 'react-native'
import { Button } from 'react-native'
import { useFonts } from 'expo-font';
import styles from './Styles';
import {LOCAL_HOST} from '@env';



export default function LoginScreen() {
  
  const [fontsLoaded] = useFonts({
    Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Muestra un componente de carga mientras se carga la fuente
  }

  console.log(LOCAL_HOST);

  return (
    
    <View style={styles.loginContainer}>
        <View>
          <Image source={require('../../../../assets/images/chicken-skewers-on-a-plate.png')} 
              style={styles.loginImage}
          />
        </View>
        
        <Text style={styles.loginText}>INICIAR SESIÓN</Text>

        <View style={styles.subContainer}>
          <TextInput style={styles.emailInputContainer} placeholder=" E-mail"/>
          <TextInput style={styles.passwordInputContainer} placeholder=" Contraseña"/>
        </View>

        <View style={styles.buttomLogin}> 
          <Button title="Iniciar Sesión" color="#D17842" />
        </View>
        
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            ¿Aún no tiene una cuenta? {"\n"} 
           <Text style={styles.signUpLink}>Regístrese aquí</Text>
          </Text>
        </View>

        
    </View>
    
  )
}

