import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootAdminBottomTabParamList } from '../../../navigation/tabs/admin/AdminBottomTab';
import ChangePasswordStyles from './Styles';
import useViewModel from './ViewModel';

interface Props extends StackScreenProps<RootAdminBottomTabParamList, 'ChangePasswordScreen'> {}

const ChangePasswordScreen = ({ navigation }: Props) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { onChange, applyNewPassword, isValidForm, loading, hasEightChars, hasUppercase, hasNumber, hasSpecialChar, errorMessages } = useViewModel();

  const handleChangePassword = async () => {
    await applyNewPassword();
  };

  return (
    <View style={ChangePasswordStyles.changePasswordContainer}>
      <Text style={ChangePasswordStyles.mainText}>Cambiar contraseña</Text>
      <View style={ChangePasswordStyles.fieldContainer}>
        <TextInput
          style={ChangePasswordStyles.textInputContainer}
          placeholder="Nueva contraseña"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={(text) => {
            setNewPassword(text);
            onChange('newPassword', text);
          }}
        />
        {errorMessages.newPassword && <Text style={ChangePasswordStyles.errorText}>{errorMessages.newPassword}</Text>}
        <View style={ChangePasswordStyles.passwordRequerimentContainer}>
          <Text style={hasEightChars ? ChangePasswordStyles.completed : ChangePasswordStyles.uncompleted}>
            * Al menos 8 caracteres
          </Text>
          <Text style={hasUppercase ? ChangePasswordStyles.completed : ChangePasswordStyles.uncompleted}>
            * Al menos una mayúscula
          </Text>
          <Text style={hasNumber ? ChangePasswordStyles.completed : ChangePasswordStyles.uncompleted}>
            * Al menos un número
          </Text>
          <Text style={hasSpecialChar ? ChangePasswordStyles.completed : ChangePasswordStyles.uncompleted}>
            * Al menos un caracter especial
          </Text>
        </View>
        <TextInput
          style={ChangePasswordStyles.textInputContainer}
          placeholder="Confirmar Contraseña"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            onChange('confirmNewPassword', text);
          }}
        />
        {errorMessages.confirmNewPassword && <Text style={ChangePasswordStyles.errorText}>{errorMessages.confirmNewPassword}</Text>}
      </View>
      <Pressable onPress={handleChangePassword} disabled={loading}>
        <Text style={ChangePasswordStyles.buttomChangePassword}>Cambiar contraseña</Text>
      </Pressable>
      {errorMessages.general && <Text style={ChangePasswordStyles.errorText}>{errorMessages.general}</Text>}
    </View>
  );
};

export default ChangePasswordScreen;
