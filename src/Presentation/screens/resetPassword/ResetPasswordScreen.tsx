import React, { useContext, useState } from 'react'
import styles from './Styles';
import { TextInput, Pressable } from 'react-native'
import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import useViewModel from './ViewModel';
import { error } from 'console';
import { ModalNotification } from '../../components/ModalNotification';


interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}



const ResetPasswordScreen = ({ navigation,route }: Props) => {
    const [modalVisible, setMoldalVisible] = useState<boolean>(false); 

	const {
		email, 
		onChange,
		resetPassword,
		errorMessages,
		responseError: errorsResponse,

	} = useViewModel();
	

  return (
    
    <View style={styles.resetPasswordContainer}>
      
      <Image source={require('../../../../assets/images/chicken-skewers-on-a-plate.png')} 
            style={styles.resetPasswordImage}
        />

        <View style={styles.resetPasswordInnerContainer}>

          <Text style={styles.resetPasswordText}>Recuperar contraseña</Text>
          
          <TextInput 
            style={styles.emailInputContainer} 
            placeholder="Correo electrónico" 
			value={email}  
            onChangeText={text => onChange('email', text)}
          />
		  {errorMessages.email && <Text style={styles.errorText}>{errorMessages.email}</Text>}

          <View style={styles.buttomResetPassword}> 
            <Pressable onPressIn={resetPassword} >
              <Text style={styles.buttomResetPasswordText}>Recuperar contraseña</Text>
            </Pressable>
          </View>
          
          <View style={styles.backContainer}>
            <Pressable  onPressIn={() => navigation.navigate('LoginScreen') }>
				<Text style={styles.backTextContainer}>Volver</Text>
            </Pressable>
          </View>

        </View>
		<ModalNotification
            email={email}
            modalUseState={modalVisible}
            setModalUseState={setMoldalVisible}
        />
    </View>
    
  )
}

export default ResetPasswordScreen;