import React, { useContext, useState } from 'react'
import styles from './Styles';
import { TextInput, Pressable } from 'react-native'
import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/MainAppStack';
import { ApiDelivery } from '../../../../Data/sources/remote/api/ApiDelivery';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import useViewModel from '../ViewModel';
import { error } from 'console';
import { ModalNotification } from '../../../components/ModalNotification';

interface Props extends StackScreenProps<RootStackParamList, 'ForgotPasswordScreen'> {}



const ConfirmValidationCodeScreen = () => {
  return (
    <View style={styles.resetPasswordContainer}>
      
      

        <View style={styles.resetPasswordInnerContainer}>

          <Text style={styles.resetPasswordText}>Confirmar Código de Validación</Text>
          
          <TextInput 
            style={styles.emailInputContainer} 
            placeholder="Código de validación" 

          />
		      

          <View style={styles.buttomResetPassword}> 
            <Pressable>
              <Text style={styles.buttomResetPasswordText}>Enviar</Text>
            </Pressable>
          </View>
          
          <View style={styles.backContainer}>
            <Pressable>
				<Text style={styles.backTextContainer}>Volver</Text>
            </Pressable>
          </View>
          

        </View>
    </View>
  )
}

export default ConfirmValidationCodeScreen;

