import React, { useContext, useState } from 'react'
import styles from './Styles';
import { TextInput, Pressable } from 'react-native'
import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';

import { AdminBottomTab } from '../../navigation/tabs/admin/AdminBottomTab';

import useViewModel from './ViewModel';


interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}



export const LoginScreen = ({ navigation,route }: Props) => {

  const { email, password, handleEmailChange, handlePasswordChange, login } = useViewModel();

  const [fontsLoaded] = useFonts({
    Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Muestra un componente de carga mientras se carga la fuente
  }
  
  return (
    
    <View style={styles.loginContainer}>
      
      <Image source={require('../../../../assets/images/chicken-skewers-on-a-plate.png')} 
            style={styles.loginImage}
        />
        
        <Text style={styles.loginText}>INICIAR SESIÓN</Text>
        
        <TextInput style={styles.emailInputContainer} placeholder=" E-mail" value={email} onChangeText={handleEmailChange} />
        <TextInput style={styles.passwordInputContainer} placeholder=" Contraseña" secureTextEntry={true} value={password} onChangeText={handlePasswordChange} />

        <View style={styles.buttomLogin}> 

        {/* FIXME: CHANGE NAVEGATE SCREEN */}


          <Pressable onPress={login}>

            <Text style={styles.buttomLoginText}>Iniciar Sesión</Text>
          </Pressable>
        </View>
        
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}> ¿Aún no tiene una cuenta?</Text>

          <Pressable  onPress={() => navigation.navigate('RegisterScreen') }>
            <Text style={styles.signUpLink}>Regístrese</Text>
          </Pressable>

          <Pressable  onPress={() => navigation.navigate('ResetPasswordScreen') }>
            <Text style={styles.signUpLink}>Recuperar Password</Text>
          </Pressable>
        </View>
    </View>
    
  )
}

export default LoginScreen;