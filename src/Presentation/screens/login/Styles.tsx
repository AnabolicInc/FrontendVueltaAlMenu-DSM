import { StyleSheet } from "react-native";


const LoginStyles = StyleSheet.create(

    {
      loginContainer: {
        flex: 1,
		justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C1013',
      },
	  loginInnerContainer: {
		flexDirection: 'column',
		position: 'relative',
		justifyContent: 'center',
		alignContent: 'center',
		fontFamily: 'Poppins',
	  },

      loginInputContainer: {
		position: 'relative',
        justifyContent: 'center',
		alignItems: 'center',
        alignContent: 'center',
		alignSelf: 'center',
        marginBottom: 200,
		width: 250,
        height: 80,

      },

      loginImage: {
        backgroundColor: '#0C1013',
		position: 'relative',
		left: "-45%",
		top: "-20%",
        width: 350,
        height: 350,
        opacity: 0.8
        
    },

      loginText: {
		position: 'relative',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,

      },
	  forgetPasswordSection: {
		borderColor: 'rgba(255, 255, 255,0.3)',
		borderRadius: 10,
		borderWidth: 1,
		position: 'relative',
		top: "50%",
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		padding: 10,
	  },


      emailInputContainer: {
        position: 'relative',
        width: 250,
        height: 40,
        backgroundColor: 'white',
        fontFamily: 'Poppins',
        borderRadius: 10,
        paddingStart: 10,
        paddingEnd: 10,
      },

      passwordInputContainer: {
        position: 'relative',
        backgroundColor: 'white',
        fontFamily: 'Poppins',
        width: 250,
        height: 40,
        borderRadius: 10,
        paddingStart: 10,
        paddingEnd: 10,
      },
	  loginButton: {
		position: 'relative',
		backgroundColor: '#141921',
		borderWidth: 1,
		borderColor: '#146c43',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		width: 150,
		height: 45,
		borderRadius: 10,
		marginTop: 20,
	  },

	  registerSection: {
		position: 'relative',
		textAlign: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		marginTop: 30,
	  },
	  registerText: {
		fontFamily: 'Poppins',
		position: 'relative',
		textAlign: 'center',
		fontSize:18,
		color: 'white',
	  },

    buttomLoginText: {
		position: 'relative',
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'center',
    },
	errorText:{
		position: 'relative',
		color: 'red',
		fontFamily: 'Poppins',
		fontSize: 12,
		marginTop: 5,
		marginBottom: 5,
	}




})

export default LoginStyles;