import { StyleSheet } from "react-native";


const LoginStyles = StyleSheet.create(
    {loginImage: {
        width: 350,
        height: 350,
        position: 'absolute',
        top: -380,
        left: -300,
        opacity: 0.7
        
    },

    loginContainer: {
      flex:0,
      alignContent: 'center',
      alignItems: 'center',
    },

    loginText: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
      fontFamily: 'Poppins',
    },

    subContainer: {
      backgroundColor: 'white',
      width: 200,
      alignContent: 'center',
      alignItems: 'center',
    },

    emailInputContainer: {
      backgroundColor: 'white',
      fontFamily: 'Poppins',
      width: 250,
      height: 40,
      position: 'absolute',
      top: 0,
      left: -20,
      borderRadius: 10,
    },

    passwordInputContainer: {
      backgroundColor: 'white',
      fontFamily: 'Poppins',
      width: 250,
      height: 40,
      position: 'absolute',
      top: 50,
      left: -20,
      borderRadius: 10,
    },

    buttomLogin: {
      fontFamily: 'Poppins',
      borderRadius: 10,
      backgroundColor: '#D17842',
      width: 150,
      height: 40,
      position: 'absolute',
      top: 160,
      left: 35,
    },

    signUpContainer: {
      position: 'absolute',
      top: 200,
      alignItems: 'center',
      marginTop: 20,
    },
    signUpText: {
      color: 'white',
      fontFamily: 'Poppins',
      textAlign: 'center',
      marginBottom: 20,
    },

    signUpLink: {
      color: '#D17842',
      fontFamily: 'Poppins',
      textAlign: 'center',
    },


})

export default LoginStyles;