import React, { useContext } from 'react'
import styles from './Styles';
import { TextInput, Pressable } from 'react-native'
import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import { AdminBottomTab } from '../../navigation/tabs/admin/AdminBottomTab';


interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}



export const LoginScreen = ({ navigation,route }: Props) => {

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
        
        <TextInput style={styles.emailInputContainer} placeholder=" E-mail" />
        <TextInput style={styles.passwordInputContainer} placeholder=" Contraseña"/>

        <View style={styles.buttomLogin}> 
        {/* FIXME: CHANGE NAVEGATE SCREEN */}
          <Pressable onPress={() => navigation.navigate('ClientBottomTab')}>
            <Text style={styles.buttomLoginText}>Iniciar Sesión</Text>
          </Pressable>
        </View>
        
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}> ¿Aún no tiene una cuenta?</Text>

          <Pressable  onPress={() => navigation.navigate('RegisterScreen') }>
            <Text style={styles.signUpLink}>Regístrese</Text>
          </Pressable>
        </View>
    </View>
    
  )
}

export default LoginScreen;