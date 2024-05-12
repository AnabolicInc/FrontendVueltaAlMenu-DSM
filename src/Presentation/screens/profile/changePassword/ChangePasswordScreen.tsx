import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootAdminBottomTabParamList } from '../../../navigation/tabs/admin/AdminBottomTab';
import ProfileInfoStyles from './Styles';

interface Props extends StackScreenProps<RootAdminBottomTabParamList, 'ChangePasswordScreen'> {}

const ChangePasswordScreen = ({ navigation }: Props) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // Función para manejar el cambio de contraseña
  const handleChangePassword = () => {
    // Aquí puedes añadir la lógica para cambiar la contraseña
  };

  return (
    <View style={ProfileInfoStyles.profileContainer}>
      <Text style={ProfileInfoStyles.mainText}>Cambiar contraseña</Text>
      <View style={ProfileInfoStyles.fieldContainer}>
        <TextInput
          style={ProfileInfoStyles.textInputContainer}
          placeholder="Nueva contraseña"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
        <TextInput
          style={ProfileInfoStyles.textInputContainer}
          placeholder="Confirmar contraseña"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <Pressable onPress={handleChangePassword}>
        <Text style={ProfileInfoStyles.buttomChangePassword}>Cambiar contraseña</Text>
      </Pressable>
    </View>
  );
};

export default ChangePasswordScreen;
