import { StyleSheet } from "react-native";


const RegisterStyles = StyleSheet.create(
    {
      registerContainer:{
        height: 700,
        width: 400,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        top: 300,
      },
      registerInnerContainer: {
        //backgroundColor: 'white',
        width: 300,
        height: 400,
        borderRadius: 10,
        position: 'absolute',
        top: 0,
        left: 50,
      },

      registerMainTitle: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Poppins',
        position: 'absolute',
        top: -180,
        left: 130,
      },
  
      registerUserImage: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: -140,
        left: 80,
    },
    
    uploadButtonUserImage: {
      fontFamily: 'Poppins',
      fontSize: 15,
      borderRadius: 10,
      width: 200,
      height: 40,
      backgroundColor: '#D17842',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 20,
      left: 55,
    },
    uploadButtonUserImageText: {
      fontFamily: 'Poppins',
      fontSize: 15,
      color: 'white',
    },

    textInputContainer: {
      fontFamily: 'Poppins',
      width: 300,
      height: 200,
      position: 'absolute',
      top: 0,
      left: 20,
      alignContent: 'center',
      alignItems: 'center',
    },


    nameInput: {
      fontFamily: 'Poppins',
      //backgroundColor: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      width: 250,
      height: 40,
      position: 'absolute',
      top: 80,
      left: 5,
      borderRadius: 10,
      marginBottom: 10,
      //borderBottomWidth: 1,
      //borderBottomColor: 'white',
      alignSelf: 'stretch',
      
    },

    lastNameInput: {
      fontFamily: 'Poppins',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      width: 250,
      height: 40,
      position: 'absolute',
      top: 140,
      left: 5,
      borderRadius: 10,
      marginBottom: 10,
    },

    emailInput: {
      fontFamily: 'Poppins',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      width: 250,
      height: 40,
      position: 'absolute',
      top: 200,
      left: 5,
      borderRadius: 10,
      marginBottom: 10,
    },

    
    passwordInput: {
      fontFamily: 'Poppins',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      width: 250,
      height: 40,
      position: 'absolute',
      top: 260,
      left: 5,
      borderRadius: 10,
      marginBottom: 10,

    },

    confirmPasswordInput: {
      fontFamily: 'Poppins',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      width: 250,
      height: 40,
      position: 'absolute',
      top: 320,
      left: 5,
      borderRadius: 10,
      marginBottom: 10,

    },

    confirmButton: {
      fontFamily: 'Poppins',
      fontSize: 15,
      borderRadius: 10,
      width: 200,
      height: 40,
      backgroundColor: '#94c58c',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 380,
      left: 50,
    },

    confirmButtonText: {
      fontFamily: 'Poppins',
      fontSize: 15,
      color: 'white',
    },



})

export default RegisterStyles;