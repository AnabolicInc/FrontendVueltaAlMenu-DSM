import React from 'react'
import { Text, View, Image, Pressable, TextInput } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import styles from './Styles';
import { useFonts } from 'expo-font';

interface Props extends StackScreenProps<RootStackParamList, 'Restore'> {}

export const RestorePasswordScreen = ({ navigation,route }: Props) => {

    const [fontsLoaded] = useFonts({
        Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return null; // Muestra un componente de carga mientras se carga la fuente
      }
      
    
      //console.log(LOCAL_HOST);
    
      return (
        
<View style={styles.forgotPasswordContainer}>
  <Text style={styles.loremIpsumText}>
    Ingrese su correo electrónico, si coincide con el
    de una cuenta registrada, recibirá un código en su
    bandeja de entrada.
  </Text>
  
  <TextInput style={styles.passwordResetInput} placeholder="Ingrese su correo electrónico" />
  
  <View style={styles.resetButtonContainer}>
    <Pressable onPress={() => {/* Aquí puedes añadir la lógica para reestablecer la contraseña */}}>
      <Text style={styles.resetButtonText}>Reestablecer Contraseña</Text>
    </Pressable>
  </View>
</View>

        
      )


}

export default RestorePasswordScreen;