import React, { useContext, useState } from 'react'
import styles from './Styles';
import { TextInput, Pressable } from 'react-native'
import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { MaterialCommunityIcons } from 'react-native-vector-icons';


interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}



const ResetPasswordScreen = ({ navigation,route }: Props) => {

  return (
    
    <View style={styles.resetPasswordContainer}>
      
      <Image source={require('../../../../assets/images/chicken-skewers-on-a-plate.png')} 
            style={styles.resetPasswordImage}
        />

        <View style={styles.resetPasswordInnerContainer}>

          <Text style={styles.resetPasswordText}>Recuperar contraseña</Text>
          
          <TextInput style={styles.emailInputContainer} placeholder="E-mail" value={"email"}  />

          <View style={styles.buttomResetPassword}> 
            <Pressable>
              <Text style={styles.buttomResetPasswordText}>Recuperar contraseña</Text>
            </Pressable>
          </View>
          
          <View style={styles.backContainer}>
            <Pressable  onPressIn={() => navigation.navigate('LoginScreen') }>
				<Text style={styles.backTextContainer}>Volver</Text>
            </Pressable>
          </View>

        </View>
    </View>
    
  )
}

export default ResetPasswordScreen;