import React, { useContext, useState } from 'react'
import styles from './Styles';
import { TextInput, Pressable, Keyboard } from 'react-native'
import { View, Text, Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';


import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { RootStackParamList } from '../../navigation/MainAppStack';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import useViewModel from './ViewModel';
import { error } from 'console';
import { ModalNotification } from '../../components/ModalNotification';
import { useFonts } from 'expo-font';



interface Props extends StackScreenProps<RootStackParamList, 'ForgotPasswordScreen'> { }



const ForgotPasswordScreen = ({ navigation, route }: Props) => {
	const [modalVisible, setMoldalVisible] = useState<boolean>(false);

	const {
		email,
		onChange,
		forgotPassword,
		errorMessages,
		loading,
		responseError: errorsResponse,

	} = useViewModel();

	const handleForgotPassword = async () => {
		Keyboard.dismiss();
		try {
			
			const response = await forgotPassword();
			if (response.success) {
				navigation.navigate('ConfirmValidationCodeScreen', { email: email })
			}
		} catch (error) {
			console.log('error', error);
			
			
		}
	}
	return (

		<View style={styles.resetPasswordContainer}>

			<Image source={require('../../../../assets/images/chicken-skewers-on-a-plate.png')}
				style={styles.resetPasswordImage}
			/>

	

			<Text style={styles.resetPasswordText}>Recuperar contraseña</Text>

			<TextInput
				style={styles.emailInputContainer}
				placeholder="Correo electrónico"
				value={email}
				onChangeText={text => onChange('email', text)}
				editable={!loading}

			/>
			{errorMessages.email && <Text style={styles.errorText}>{errorMessages.email}</Text>}

			<View style={styles.buttomResetPassword}>
				<Pressable onPressIn={handleForgotPassword}
					disabled={loading}
				>
					<Text style={styles.buttomResetPasswordText}>Enviar</Text>
				</Pressable>
			</View>

			<View style={styles.backContainer}>
				<Pressable onPressIn={() => navigation.navigate('LoginScreen')}>
					<Text style={styles.backTextContainer}>Volver</Text>
				</Pressable>
			</View>

			<ModalNotification
				email={email}
				modalUseState={modalVisible}
				setModalUseState={setMoldalVisible}
			/>
		</View>

	)
}

export default ForgotPasswordScreen;