import { StyleSheet, TextInputComponent } from "react-native";

const ProfileUpdateStyles = StyleSheet.create(
    {

        profileContainer: {
            flex: 1,
            backgroundColor: '#0C1013',
            alignItems: 'center',
            justifyContent: 'center',
        },


        profileInnerContainer: {
            flexGrow: 1,
            flexDirection: 'column',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
        },
        buttonContainer: {
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 30,
        },

        backButton: {
            width: 30,
            height: 30,
            position: 'absolute',
            top: "10%",
            left: "8%",
        },

        mainText: {
            
            fontFamily: 'Poppins',
            fontSize: 20,
            color: '#D17842',
            position: 'relative',
            top: "10%",
        },
        userText: {
            fontFamily: 'Poppins',
            fontSize: 20,
            color: '#D17842',
            marginBottom: 20,
        },
        userButton: {
            backgroundColor: '#D17842',
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
        },
        userButtonText: {
            fontFamily: 'Poppins',
            fontSize: 20,
            color: '#F6F6F6',
        },
        titleText: {
            fontFamily: 'Poppins',
            fontSize: 15,
            color: '#ffffff',
            marginBottom: 20,
            position: 'absolute',
            top: "30%",
            left: "10%",
        },

        
        fieldContainer: {
            marginTop: 20,
        },

        editButton: {
            backgroundColor: '#141921',
            borderWidth: 2,
            borderColor: '#D17842',
            padding: 10,
            marginTop: 20,
            borderRadius: 5,
            width: 151,
            alignSelf: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',

        },
        editButtonText: {
            fontFamily: 'Poppins',
            fontSize: 15,
            color: '#F6F6F6',
        },

        errorText:{
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 10,
            padding: 5,
            marginStart: 5,
            marginEnd: 5,
            position: 'relative',
            color: 'red',
            fontFamily: 'Poppins',
            fontSize: 12,
            marginTop: 8,
            marginBottom: 5,
        },

        inputContainer: {
            position: 'relative',
            alignSelf: 'stretch',
            alignItems: 'flex-start',
        },

        textInputContainer: {
            alignSelf: 'center',
            textAlign: 'left',
            color: '#F6F6F6',
            fontSize: 16,
            width: '60%',
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#D17842',
        },

        profileUpdateUserImageContainer: {
            position: 'relative',
            alignSelf: 'center',
            marginBottom: '5%',
        },

        profileUpdateUserImage: {
		
            width: 150,
            height: 150,
            position: 'relative',
            alignSelf: 'center',
        },
        
        userImageText: {
            fontFamily: 'Poppins',
            fontSize: 14,
            color: '#D17842',
            alignSelf: 'center',
            marginTop: 10,
            
        },

        logo: {
            marginTop: 50,
            width: 120,
            height: 120,
        },

        loading: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        }
    }
);

export default ProfileUpdateStyles;