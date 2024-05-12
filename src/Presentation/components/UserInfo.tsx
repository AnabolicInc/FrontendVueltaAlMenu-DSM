import { StyleSheet, Text, View,TouchableOpacity, Pressable, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { ModalChangeInfo } from './ModalChangeInfo';
import useViewModel from '../screens/profile/update/ViewModel';
import { ModalPickImage } from './ModalPickImage';
import { AuthContext } from '../context/auth/AuthContext';


interface Props {
    fieldType?: string;
    image?: string;
    textCard: string;
    dataUser: string;
    onPress?: () => void;
}


export const UserInfo = ({ fieldType,textCard, dataUser }: Props) => {
    const {status, user} = useContext(AuthContext);

	const [modalVisible, setMoldalVisible] = useState<boolean>(false);

    const {image,pickImage,takePhoto} = useViewModel();

    return (
        <View style={styles.userInfoContainer}>

            <Text style= {styles.titleText}>{textCard}</Text>
            {
                //If the fieldType is image, show the image
                fieldType === 'image' 
                ?
                <Image 
                    style = {{
                        width: 50, 
                        height: 50,
                        borderRadius: 50, 
                        position: 'relative',
                        alignSelf: 'flex-start',
                        marginLeft: 20,
                        marginTop: -10
                    }} 
                    source={{uri:image}}
                />  
                : <Text style= {styles.dataText}>{dataUser}</Text>

            }

            {
                fieldType === 'image'
                ? 
                <ModalPickImage
                    openGallery={pickImage}
                    openCamera={takePhoto}
                    modalUseState = {modalVisible}
                    setModalUseState = {setMoldalVisible}
                />
                :
                <ModalChangeInfo 
                    changeInfoLabel = {textCard}
                    modalUseState = {modalVisible}
                    setModalUseState = {setMoldalVisible}
                />
            }

            
            
        </View>
    )

}



const styles = StyleSheet.create({
    userInfoContainer: {
        backgroundColor: 'rgba(255,255,255, 0.1)',
        width: 320,
        height: 100,
        borderRadius: 15,
        marginBottom: 10,
        position: 'relative',
        alignSelf: 'center',
    },
    titleText: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#ffffff',
        marginBottom: 20,
        position: 'relative',
        alignSelf: 'flex-start',
        marginTop: 12,
        marginLeft: 15,
    },
    dataText: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#ffffff',
        marginBottom: 20,
        position: 'relative',
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    editFieldButton: {
        backgroundColor:'#141921',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: '#D17842',
        borderWidth: 2,
        borderRadius: 5,
        position: 'relative',
        alignSelf: 'flex-end',
        marginEnd: 20,
        marginTop: -75,
        width:"27%",
        alignItems:"center",
    },
})