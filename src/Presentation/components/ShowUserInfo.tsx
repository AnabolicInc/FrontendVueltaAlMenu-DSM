import React,{ useContext, useState } from "react";

// import { AuthContext } from "../../../context/auth/AuthContext";
// import { RemoveUserUseCase } from "../../../../Domain/useCases/UserLocal/RemoveUserLocal";
// import { UpdateUserUseCase } from "../../../../Domain/useCases/User/UpdateUserUseCase";
// import { UpdateFileUseCase } from "../../../../Domain/useCases/File/UpdateFileUseCase";
// import { ResponseAPIDelivery } from "../../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { showMessage } from "react-native-flash-message";
import {Image, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context/auth/AuthContext";

interface Props {
    
    fieldType: string;
    textCard: string;
    dataUser?: string;
    userImage?: string;
}
interface ResponseErrorData{
	
	path: string;
	value: string;

}


export const UserInfo = ({ fieldType,textCard, dataUser,userImage }: Props) => {
    const {status, user} = useContext(AuthContext);


    return (
        <View style={styles.userInfoContainer}>

            <Text style= {styles.titleText}>{textCard}</Text>
            {
                //If the fieldType is image, show the image
                fieldType === 'image' 
                ?
                <Image 
                    style = {{
                        width: 90, 
                        height: 90,
                        borderRadius: 50, 
                        position: 'relative',
                        top: "-40%",
                        right: "5%",
                        alignSelf: 'flex-end',
                        marginLeft: 20,
                        marginTop: -10
                    }} 
                    source={{uri:user?.image}}
                />  
                : <Text style= {styles.dataText}>{dataUser}</Text>
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
        color: 'grey',
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
        marginLeft: 20,

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