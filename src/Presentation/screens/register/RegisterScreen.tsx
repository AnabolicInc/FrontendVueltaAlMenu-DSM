import React, { useState } from 'react'
import { Text, View, Image, Pressable, TextInput,ScrollView } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';

import { ModalPickImage } from '../../components/ModalPickImage';
import styles from './Styles';
import useViewModel from './ViewModel';
import RegisterInfo from '../../components/RegisterInfo';

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
 

        <ScrollView style={styles.registerInnerContainer} showsVerticalScrollIndicator = {false}>

            {
                (image == '')
                ?
                <Image style={styles.registerUserImage} source={require('../../../../assets/images/userIcon.png')} />
                :
                <Image style={styles.registerUserImage} source={{uri:image}} />

            }
            
            <Pressable style={styles.uploadImageUserButton} onPress={() => setMoldalVisible(true)}>
                <Text style={styles.uploadImageUserButtonText}>Subir imagen</Text>
            </Pressable>

            <RegisterInfo fieldLabel="Nombres" onChangeText={(text) => console.log(text)} />

            <RegisterInfo fieldLabel="Apellidos" onChangeText={(text) => console.log(text)} />

            <RegisterInfo fieldLabel="Correo electrónico" onChangeText={(text) => console.log(text)} />

            <RegisterInfo fieldLabel="Telefono" onChangeText={(text) => console.log(text)} />

            <RegisterInfo fieldLabel="Contraseña" onChangeText={handlePasswordChange} />

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

            <RegisterInfo fieldLabel="Confirmar contraseña" onChangeText={(text) => console.log(text)} />

            
        </ScrollView>

        <Pressable style={styles.confirmButton} onPress={() => console.log('Pressed')}>
            <Text style={styles.confirmButtonText} >Confirmar</Text>
        </Pressable>

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