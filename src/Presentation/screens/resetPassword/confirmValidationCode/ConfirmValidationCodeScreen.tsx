import React, { useContext, useState } from 'react'
import styles from './Styles';
import { TextInput, Pressable, Keyboard } from 'react-native'
import { View, Text, Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/MainAppStack';
import { ApiDelivery } from '../../../../Data/sources/remote/api/ApiDelivery';
import useViewModel from './ViewModel';
import { ModalNotification } from '../../../components/ModalNotification';

interface Props extends StackScreenProps<RootStackParamList, 'ConfirmValidationCodeScreen'> { }



const ConfirmValidationCodeScreen = ({ navigation, route }: Props) => {
  const { email } = route.params
  const {
    onChange,
    validationCode,
    errorMessages,
    loading,
  } = useViewModel(email);

  const handleConfirmValidationCode = async () => {
    Keyboard.dismiss();
    const response = await validationCode();

    if (response.success) {
      navigation.navigate('ChangeForgotPasswordScreen', { email: email })


    }
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
              <Pressable onPressIn={handleConfirmValidationCode}
                disabled={loading}
              >
                <Text style={styles.buttomResetPasswordText}>Enviar</Text>
              </Pressable>
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
}

export default ConfirmValidationCodeScreen;

