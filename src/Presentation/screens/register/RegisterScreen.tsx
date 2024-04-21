import React from 'react'
import styles from './Styles';
import { Text, View, Image, Pressable, TextInput } from 'react-native'
import { useFonts } from 'expo-font';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import ViewModel from './ViewModel';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParamList, 'Register'> {}

export const  RegisterScreen = ({ navigation,route }: Props) => {


    const [fontsLoaded] = useFonts({
        Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'),

    });
    
    if (!fontsLoaded) {
        return null; // Muestra un componente de carga mientras se carga la fuente
    }


  return (
    <View style={styles.registerContainer}>
        <Text style ={styles.registerMainTitle}>Registrarse</Text>

        <View style={styles.registerInnerContainer}>

            <Image style={styles.backButton} source={require('../../../../assets/images/leftButton.png')} />
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()} />
            
            <Image style={styles.registerUserImage} source={require('../../../../assets/images/userIcon.png')} />
            <Pressable style={styles.registerUserImage} onPress={() => console.log('User Image Pressed')} />                    
            <View style={styles.textInputContainer}>

                
                <TextInput
                    style={styles.nameInput}
                    placeholder="  Nombres"
                    placeholderTextColor={'#D17842'} 
                    onChangeText={(text) => console.log(text)}
                />

                <TextInput
                    style={styles.lastNameInput}
                    placeholder="  Apellidos"
                    placeholderTextColor={'#D17842'}
                    onChangeText={(text) => console.log(text)}
                />

                <TextInput
                    style={styles.emailInput}
                    placeholder="  Correo electrónico"
                    placeholderTextColor={'#D17842'}
                    onChangeText={(text) => console.log(text)}
                />

                <TextInput
                    style={styles.passwordInput}
                    placeholder="  Contraseña"
                    placeholderTextColor={'#D17842'}
                    secureTextEntry={true}
                    onChangeText={(text) => console.log(text)}
                />

                <TextInput
                    style={styles.confirmPasswordInput}
                    placeholder="  Confirmar contraseña"
                    placeholderTextColor={'#D17842'}
                    secureTextEntry={true}
                    onChangeText={(text) => console.log(text)}
                />

            </View>

            <Pressable style={styles.confirmButton} onPress={() => console.log('Confirm Button Pressed')}>
                <Text style={styles.confirmButtonText} >Confirmar</Text>
            </Pressable>
 


            
            
        </View>
    </View>
  )
}

export default RegisterScreen;