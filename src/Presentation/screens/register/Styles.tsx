import { StyleSheet } from "react-native";


const RegisterStyles = StyleSheet.create(
  {
    registerContainer:{
      position: 'relative',
      flex: 1,
      backgroundColor: '#0C1013',
      alignContent: 'center',
      alignItems: 'center',

    },
    registerInnerContainer: {
      width: 300,
      height: 300,
      borderRadius: 10,
      position: 'absolute',
      top: "25%",
      left: "10%",
    },

    registerMainTitle: {
      color: '#D17842',
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
      fontFamily: 'Poppins',
      position: 'absolute',
      top: "8%",
      left: "32%",
    },
    imageUserContainer: {
      width: 150,
      height: 150,
      borderRadius: 100,
      position: 'absolute',
      top: "20%",
      left: "25%",
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },

    registerUserImage: {
      width: 150,
      height: 150,
      position: 'absolute',
      top: "-25%",
      left: "25%",
  },
    backButton: {
      width: 30,
      height: 30,
      position: 'absolute',
      top: "-50%",
      left: "-6%",
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
      top: "5%",
      left: "18%",
    },
    uploadButtonText: {
      fontFamily: 'Poppins',
      fontSize: 15,
      color: 'white',
      position: 'absolute',
      top: "8%",
      left: "18%",

    },

    textInputContainer: {
      fontFamily: 'Poppins',
      width: 300,
      height: 500,
      position: 'relative',
      top: "0%", left: "6%",
      alignContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      paddingStart: 15,
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
      paddingStart: 15,
      paddingEnd: 15,
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
      paddingStart: 15,
      paddingEnd: 15,
      
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
      paddingStart: 15,
      paddingEnd: 15,
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
      paddingStart: 15,
      paddingEnd: 15,

    },
    passwordRequirements: {
      fontFamily: 'Poppins',
      paddingVertical: 10,

      color: 'white',
      position: 'absolute',
      top: 300,
      left: 5,
      marginBottom: 10,
    },
      

    confirmPasswordInput: {
      fontFamily: 'Poppins',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      width: 250,
      height: 40,
      position: 'absolute',
      top: 430,
      left: 5,
      borderRadius: 10,
      marginBottom: 10,
      paddingStart: 15,
      paddingEnd: 15,

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