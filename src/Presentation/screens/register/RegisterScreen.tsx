import React, { useState } from 'react'
import { Text, View, Image, Pressable, TextInput,ScrollView,TouchableOpacity, SafeAreaView } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';

import { ModalPickImage } from '../../components/ModalPickImage';
import styles from './Styles';
import useViewModel from './ViewModel';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}

export const  RegisterScreen = ({ navigation,route }: Props) => {

    const [modalVisible, setMoldalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error

    const  {
        register, 
        onChange, 
        isValidForm, 
        takePhoto,
        pickImage,
        image,  
        loadFonts,
        handlePasswordChange,
        hasEightChars,
        hasUppercase,
        hasNumber,
        hasSpecialChar,
        password,
    } = useViewModel();

    const handleRegister = async () => {
        await register();
    }



  return (
    <View style={styles.registerContainer}>

        <Text style ={styles.registerMainTitle}>Registrarse</Text>
        <Image style= {styles.backButton} source={require('../../../../assets/images/leftButton.png')} />
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()} />
        
        {
            (image == '')
            ?
            <Image style={styles.registerUserImage} source={require('../../../../assets/images/userIcon.png')} />
            :
            <Image style={styles.registerUserImage} source={{uri:image}} />


        }

        <Pressable style={styles.registerUserImage} onPress={() => setMoldalVisible(true)} />

  

        <ScrollView style={styles.registerInnerContainer} showsVerticalScrollIndicator = {false}>

            <TextInput 
                style={styles.nameInput}
                placeholder="Nombres"
                placeholderTextColor={'#D17842'} 
                onChangeText={(text) => console.log(text)}
            />

            <TextInput
                style={styles.lastNameInput}
                placeholder="Apellidos"
                placeholderTextColor={'#D17842'}
                onChangeText={(text) => console.log(text)}
            />

            <TextInput
                style={styles.emailInput}
                placeholder="Correo electrónico"
                placeholderTextColor={'#D17842'}
                onChangeText={(text) => console.log(text)}
            />

            <TextInput
                style={styles.phoneInput}
                placeholder="Telefono"
                
                placeholderTextColor={'#D17842'}
                onChangeText={(text) => console.log(text)}
            />

            <TextInput
                style={styles.passwordInput}
                placeholder="Contraseña"
                placeholderTextColor={'#D17842'}
                secureTextEntry={true}
                onChangeText={handlePasswordChange}
                value={password}
            />
            <View style={styles.requerimientContainer}>

                <Text style={hasEightChars ? styles.completed : styles.uncompleted}>
                    * Al menos 8 caracteres
                </Text>
                <Text style={hasUppercase ? styles.completed : styles.uncompleted}>
                    * Al menos una mayúscula
                </Text>
                <Text style={hasNumber ? styles.completed : styles.uncompleted}>
                    * Al menos un número
                </Text>
                <Text style={hasSpecialChar ? styles.completed : styles.uncompleted}>
                    * Al menos un caracter especial
                </Text>
            </View>


            <TextInput
                style={styles.confirmPasswordInput}
                placeholder="Confirmar contraseña"
                placeholderTextColor={'#D17842'}
                secureTextEntry={true}
                onChangeText={(text) => console.log(text)}
            />
            
            <Pressable style={styles.confirmButton} onPress={() => console.log('Pressed')}>
                <Text style={styles.confirmButtonText} >Confirmar</Text>
            </Pressable>
        </ScrollView>

        <ModalPickImage 
            modalUseState = {modalVisible} 
            setModalUseState={setMoldalVisible} 
            openGallery={pickImage}
            openCamera={takePhoto}
        />


    </View>
  )
}

export default RegisterScreen;