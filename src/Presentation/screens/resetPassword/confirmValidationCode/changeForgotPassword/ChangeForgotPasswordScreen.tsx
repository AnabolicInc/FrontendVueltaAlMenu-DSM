import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import ChangePasswordViewModel from './ViewModel';
import styles from './Styles';

const ChangePasswordScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const { 
    newPassword, 
    confirmPassword, 
    onChange, 
    changePassword, 
    loading, 
    errorMessages 
  } = ChangePasswordViewModel(email);
  
  const handleSubmit = async () => {
    const response = await changePassword();
    if (response.success) {
      navigation.navigate('ConfirmationScreen');
    } else if (response.message === 'No autorizado. Por favor, inicie sesión nuevamente.') {
      navigation.navigate('LoginScreen'); // Redirigir a la pantalla de inicio de sesión
    }
  };

  return (
    <View style={styles.resetPasswordContainer}>
      <View style={styles.resetPasswordInnerContainer}>
        <Text style={styles.resetPasswordText}>Cambiar contraseña</Text>

        <View style={styles.emailInputContainer}>
          <TextInput
            style={styles.emailInputContainer}
            value={newPassword}
            onChangeText={(text) => onChange('newPassword', text)}
            secureTextEntry
            placeholder="Nueva contraseña"
          />
        </View>
        {errorMessages.newPassword && <Text style={styles.errorText}>{errorMessages.newPassword}</Text>}

        <View style={styles.emailInputContainer}>
          <TextInput
            style={styles.emailInputContainer}
            value={confirmPassword}
            onChangeText={(text) => onChange('confirmPassword', text)}
            secureTextEntry
            placeholder="Confirmar nueva contraseña"
          />
        </View>
        {errorMessages.confirmPassword && <Text style={styles.errorText}>{errorMessages.confirmPassword}</Text>}

        <TouchableOpacity 
          style={styles.buttomResetPassword} 
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.buttomResetPasswordText}>Enviar</Text>
        </TouchableOpacity>
        
        {loading && <ActivityIndicator size="large" color="#D17842" />}
      </View>
    </View>
  );
};

export default ChangePasswordScreen;