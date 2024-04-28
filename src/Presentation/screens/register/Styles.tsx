import { StyleSheet } from "react-native";


const RegisterStyles = StyleSheet.create(
  {

    registerContainer:{
		flex: 1,
		position: 'relative',
		backgroundColor: '#0C1013',
		alignContent: 'center',
		alignItems: 'center',

    },
    scrollContainer: {
      flexDirection: 'column',
      flexGrow: 1,
      width: "100%",
      position: 'relative',
      top: "10%",
      left: "15%",
      marginHorizontal: 10
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

    registerUserImage: {
      width: 100,
      height: 100,
      position: 'absolute',
      top: "16%",
      left: "37%",
    },
    backButton: {
      width: 30,
      height: 30,
      position: 'absolute',
      top: "8%",
      left: "5%",
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
    registerInnerContainer: {
      flex: 1,
      flexGrow: 1,
      flexDirection: 'column',
      width: "70%",
      height: "50%",
      position: 'absolute',
      top: "35%",
      left: "15%",
      alignContent: 'center',
      borderRadius: 10,
    },
    
    nameInput: {
      fontFamily: 'Poppins',
      //backgroundColor: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      width: 250,
      height: 40,
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
      position: 'relative',
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
      position: 'relative',
      borderRadius: 10,
      marginBottom: 10,
      paddingStart: 15,
      paddingEnd: 15,
    },

    phoneInput: {
      fontFamily: 'Poppins',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      width: 250,
      height: 40,
      position: 'relative',
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
      position: 'relative',
      borderRadius: 10,
      marginBottom: 10,
      paddingStart: 15,
      paddingEnd: 15,

    },
    passwordRequirements: {
      fontFamily: 'Poppins',
      paddingVertical: 10,
      color: 'white',
      position: 'relative',
      marginBottom: 10,
    },
      

    confirmPasswordInput: {
      fontFamily: 'Poppins',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      width: 250,
      height: 40,
      position: 'relative',
      borderRadius: 10,
      marginBottom: 10,
      paddingStart: 15,
      paddingEnd: 15,

    },
    requerimientContainer: {
      fontFamily: 'Poppins',
      position: 'relative',
    },

    completed: {
      fontFamily: 'Poppins',
      color: '#77dd77',
      position: 'relative',
      marginBottom: 10,
      alignContent: 'stretch',
    },

    uncompleted: {
      fontFamily: 'Poppins',
      color: '#ff6961',
      position: 'relative',
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
      position: 'relative',
      top: "0%",
      left: "10%",
    },

    confirmButtonText: {
      fontFamily: 'Poppins',
      fontSize: 15,
      color: 'white',
    },



})

export default RegisterStyles;