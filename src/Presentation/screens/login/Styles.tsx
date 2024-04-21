import { StyleSheet } from "react-native";


const LoginStyles = StyleSheet.create(

    {

      loginContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C1013',
      },

      loginImage: {
        backgroundColor: '#0C1013',
        position: 'absolute',
        top: "-10%",
        left: "-30%",
        width: 350,
        height: 350,
        opacity: 0.8
        
    },

      loginText: {
        position: 'absolute',
        top: "35%",
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,

      },


      emailInputContainer: {
        position: 'absolute',
        top: "50%",
        left: "15%",
        width: 250,
        height: 40,
        backgroundColor: 'white',
        fontFamily: 'Poppins',
        borderRadius: 10,
      },

      passwordInputContainer: {
        position: 'absolute',
        top: "57%",
        left: "15%",
        backgroundColor: 'white',
        fontFamily: 'Poppins',
        width: 250,
        height: 40,
        borderRadius: 10,
      },

      buttomLogin: {
        position: 'absolute',
        top: "65%",
        left: "30%",
        backgroundColor: '#D17842',
        borderRadius: 10,
        width: 150,
        height: 40,
      },
     
      buttomLoginText: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: 10,
      },

      signUpContainer: {
        position: 'absolute',
        top: "80%",
        alignItems: 'center',
        marginTop: 20,
      },
      
      signUpText: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 20,
      },

      signUpLink: {
        color: '#D17842',
        top: "-40%",
        fontSize: 18,
        fontFamily: 'Poppins',
        textAlign: 'center',
      },


})

export default LoginStyles;