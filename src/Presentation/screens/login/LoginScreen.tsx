import React, { useContext, useState } from 'react'
import styles from './Styles';
import { TextInput, Pressable } from 'react-native'
import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';


import useViewModel from './ViewModel';


interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}



export const LoginScreen = ({ navigation,route }: Props) => {

  const { email, password, handleEmailChange, handlePasswordChange, login } = useViewModel();

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

		
			<View style = {styles.loginInputContainer}>
			
				<Text style={styles.loginText}>INICIAR SESIÓN</Text>
				
				<TextInput style={styles.emailInputContainer} placeholder=" E-mail" value={email} onChangeText={handleEmailChange} />

				<TextInput 
					style={{...styles.passwordInputContainer,marginTop: 10}} 
					placeholder=" Contraseña" 
					secureTextEntry={true} 
					value={password} 
					onChangeText={handlePasswordChange} 
				/>

				<Pressable style = {styles.loginButton} onPress={login}>
					<Text style={styles.buttomLoginText}>Iniciar sesión</Text>
				</Pressable>

				<View style = {{...styles.registerSection}}>

					<Text style = {styles.registerText}> ¿Aún no tiene una cuenta?</Text>

					<Pressable  onPress={() => navigation.navigate('RegisterScreen') }>
						<Text 
							style={
								{
									color:'#D17842',
									fontFamily: 'Poppins',
									fontSize: 18,
								}
							}
							>Regístrese
						</Text>	
					</Pressable>

				</View>

				<View style = {styles.forgetPasswordSection}>
					
					<Text
						style ={{color:'white',fontFamily: 'Poppins',fontSize: 15,}}
						>¿Olvidaste tu contraseña?
					</Text>
					
					<Pressable  onPress={() => navigation.navigate('ResetPasswordScreen') }>

						<Text
							style = {{
								color:'#D17842',
								fontFamily: 'Poppins',
								fontSize: 15,
							}}
							>Recuperar Contraseña
						</Text>
					</Pressable>
					
				</View>
					



			
			</View>


			
		</View>
        
        
    </View>
    
  )
}

export default LoginScreen;