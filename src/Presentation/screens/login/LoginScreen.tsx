import React, { useContext, useState } from 'react'
import { TextInput, Pressable } from 'react-native'
import { View, Text, Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import { FlatList } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';


import styles from './Styles';
import { useFonts } from 'expo-font';
import useViewModel from './ViewModel';
import {COLORS, FONTSIZE} from '../../themes/Theme'


interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> { }



export const LoginScreen = ({ navigation, route }: Props) => {

	const {
		email,
		password,
		onChange,
		login,
		errorMessages,
		responseError
	} = useViewModel();

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

			<View style={styles.loginInnerContainer}>


				<View style={styles.loginInputContainer}>


					<Text style={styles.loginText}>INICIAR SESIÓN</Text>

					{
						responseError.length > 0 && (
							<View style={styles.errorContainer}>
								<Text style={{ color: COLORS.primaryWhite, marginLeft: 10 }}>
									Por favor revise de nuevo sus datos
								</Text>
								<FlatList
									scrollEnabled={false}
									data={responseError}
									renderItem={({ item, index }) => {
										return (
											<View key={`${index}-${item.path}`} style={{ marginBottom: 10 }}>
												<Text style={{
													color: COLORS.primaryWhite,
													fontSize: FONTSIZE.size_14,
													paddingVertical: 0,
													marginVertical: 2,
													borderLeftWidth: 0
												}}>{`\u2022  ${item.value}`}</Text>
											</View>
										);
									}}
								/>
							</View>
						)
					}

					<TextInput
						style={styles.emailInputContainer}
						keyboardType='default'
						value={email}
						onChangeText={text => onChange('email', text)}
						placeholder=" E-mail"
					/>
					{errorMessages.email && <Text style={styles.errorText}>{errorMessages.email}</Text>}


					<TextInput
						style={{ ...styles.passwordInputContainer, marginTop: 10 }}
						value={password}
						onChangeText={text => onChange('password', text)}
						placeholder="*******"
						secureTextEntry={true}
					/>
					{errorMessages.password && <Text style={styles.errorText}>{errorMessages.password}</Text>}

					<Pressable style={styles.loginButton} onPressIn={login}>
						<Text style={styles.buttomLoginText}>Iniciar sesión</Text>
					</Pressable>

					<View style={{ ...styles.registerSection }}>

						<Text style={styles.registerText}> ¿Aún no tiene una cuenta?</Text>

						<Pressable onPress={() => navigation.navigate('RegisterScreen')}>
							<Text
								style={
									{
										color: COLORS.primaryOrange,
										fontFamily: 'Poppins',
										fontSize: FONTSIZE.size_18,
									}
								}
							>Regístrese
							</Text>
						</Pressable>

					</View>

					<View style={styles.forgetPasswordSection}>

						<Text
							style={{ color: COLORS.primaryWhite, fontFamily: 'Poppins', fontSize: FONTSIZE.size_15, }}
						>¿Olvidaste tu contraseña?
						</Text>

						<Pressable onPress={() => navigation.navigate('ResetPasswordScreen')}>

							<Text
								style={{
									color: COLORS.primaryOrange,
									fontFamily: 'Poppins',
									fontSize: FONTSIZE.size_15,
								}}
							>Recuperar contraseña
							</Text>
						</Pressable>

					</View>

				</View>

			</View>

		</View>

	)
}

export default LoginScreen;