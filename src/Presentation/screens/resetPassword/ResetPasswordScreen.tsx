import React, { useContext, useState } from 'react'
import styles from './Styles';
import { TextInput, Pressable } from 'react-native'
import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import ClientHomeScreen from '../../../../src/Presentation/screens/client/ClientHomeScreen';


interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}



export const ResetPasswordScreen = ({ navigation,route }: Props) => {
  const [email, setEmail] = useState<string>('');

  const [fontsLoaded] = useFonts({
    Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Muestra un componente de carga mientras se carga la fuente
  }

  const handleEmailChange = (email: string) => {
    setEmail(email);
  }

  const resetPassword = async () => {
    const res = await ApiDelivery.post('auth/reset-password', { email });
  };

  return (
    
    <View style={styles.loginContainer}>
      
      <Image source={require('../../../../assets/images/chicken-skewers-on-a-plate.png')} 
            style={styles.loginImage}
        />
        
        <Text style={styles.loginText}>Recuperar Password</Text>
        
        <TextInput style={styles.emailInputContainer} placeholder=" E-mail" value={email} onChangeText={handleEmailChange} />

        <View style={styles.buttomLogin}> 
          <Pressable onPress={resetPassword}>
            <Text style={styles.buttomLoginText}>Recuperar Password</Text>
          </Pressable>
        </View>
        
        <View style={styles.signUpContainer}>
          <Pressable  onPress={() => navigation.navigate('LoginScreen') }>
            <Text style={styles.signUpLink}>Volver a Login</Text>
          </Pressable>
        </View>
    </View>
    
  )
}

export default ResetPasswordScreen;