import React, { useEffect, useState } from 'react'
import { Text, View, Image, Pressable, ScrollView, FlatList, ActivityIndicator, Keyboard, ImageBackground } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';


import { ModalPickImage } from '../../components/ModalPickImage';
import styles from './Styles';
import useViewModel from './ViewModel';
import RegisterInput from '../../components/RegisterInput';
import * as Font from 'expo-font';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> { }

export const RegisterScreen = ({ navigation, route }: Props) => {

    const [modalVisible, setMoldalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error

    const {

        register,
        onChange,
        loading,
        takePhoto,
        pickImage,
        image,
        hasEightChars,
        hasUppercase,
        hasNumber,
        hasSpecialChar,
        errorMessages,
        responseError

    } = useViewModel();

    const handleRegister = async () => {
        Keyboard.dismiss();
        await register();
    }
    //fonts
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
            'Poppins-Black': require('../../../../assets/fonts/Poppins-Black.ttf'),
        });
        setFontsLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, []);

    return (
        <View style={styles.registerContainer}>
            {/* <Image source={require('../../../../assets/images/backgroundRegister.jpg')} style={styles.backgroundImage}>
        </Image> */}

            <Text style={{ ...styles.registerMainTitle, fontFamily: 'Poppins-Black' }}>Registrarse</Text>


            <Image style={styles.backButton} source={require('../../../../assets/images/leftButton.png')} />
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()} />


            <ScrollView style={styles.registerInnerContainer} showsVerticalScrollIndicator={false}>

                {

                    (image == '')
                        ?
                        <Image style={styles.registerUserImage} source={require('../../../../assets/images/userIcon.png')} />
                        :
                        <Image style={styles.registerUserImage} source={{ uri: image }} />

                }

                <Pressable style={styles.uploadImageUserButton} onPress={() => setMoldalVisible(true)}>
                    <Text style={styles.uploadImageUserButtonText}>Subir imagen</Text>
                </Pressable>
                {errorMessages.image && <Text style={styles.errorText}>{errorMessages.image}</Text>}

                <RegisterInput fieldLabel="Nombres" onChangeText={(text) => onChange('name', text)} />
                {errorMessages.name && <Text style={styles.errorText}>{errorMessages.name}</Text>}

                <RegisterInput fieldLabel="Apellidos" onChangeText={(text) => onChange('lastName', text)} />
                {errorMessages.lastName && <Text style={styles.errorText}>{errorMessages.lastName}</Text>}

                <RegisterInput fieldLabel="Correo electrónico" keyboardType='email-address' onChangeText={(text) => onChange('email', text)} />
                {errorMessages.email && <Text style={styles.errorText}>{errorMessages.email}</Text>}

                <RegisterInput
                    fieldLabel="Télefono"
                    prefix='+56'
                    icon={require('../../../../assets/images/Flag_of_Chile.png')}
                    customStyle={{ width: 160, justifyContent: 'flex-start', marginLeft: 10 }}
                    onChangeText={(text) => onChange('phone', text)}
                    keyboardType='numeric'
                />
                {errorMessages.phone && <Text style={styles.errorText}>{errorMessages.phone}</Text>}

                <RegisterInput fieldLabel="Contraseña" secureTextEntry={true} onChangeText={(text) => onChange('password', text)} />
                {errorMessages.password && <Text style={styles.errorText}>{errorMessages.password}</Text>}

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

                <RegisterInput fieldLabel="Confirmar contraseña" secureTextEntry={true} onChangeText={(text) => onChange('confirmPassword', text)} />
                {errorMessages.confirmPassword && <Text style={styles.errorText}>{errorMessages.confirmPassword}</Text>}

                <Pressable style={styles.confirmButton} onPressIn={handleRegister}>

                    <Text style={styles.confirmButtonText} >Confirmar</Text>
                </Pressable>


            </ScrollView>

            <FlatList style={styles.errorContainer}
                scrollEnabled={true}
                data={responseError}
                renderItem={({ item, index }) => {
                    return (
                        <View key={`${index}-${item.path}`} >
                            <Text style={styles.errorText}>Por favor, verifique sus datos. {'\n'} {`\u2022 ${item.value}`}</Text>
                        </View>
                    );
                }}
            />



            <ModalPickImage
                modalUseState={modalVisible}
                setModalUseState={setMoldalVisible}
                openGallery={pickImage}
                openCamera={takePhoto}
            />
            {loading && (

                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#D17842" />
                </View>

            )}
        </View>
    )
}

export default RegisterScreen;