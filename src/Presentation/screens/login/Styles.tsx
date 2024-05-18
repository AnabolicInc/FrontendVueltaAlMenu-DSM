import { StyleSheet } from "react-native";


import {COLORS, FONTSIZE} from '../../themes/Theme'

const LoginStyles = StyleSheet.create(

    {
      loginContainer: {
        flex: 1,
		justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.generalBackgroundBlack,
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
        backgroundColor: COLORS.generalBackgroundBlack,
		position: 'relative',
		left: "-45%",
		top: "-20%",
        width: 350,
        height: 350,
        opacity: 0.8
    },

      loginText: {
		position: 'relative',
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        marginBottom: 20,

      },
	  forgetPasswordSection: {
		borderColor: COLORS.borderContainerGrayRGBA,
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
        backgroundColor: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        borderRadius: 10,
        paddingStart: 10,
        paddingEnd: 10,
      },

      passwordInputContainer: {
        position: 'relative',
        backgroundColor: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        width: 250,
        height: 40,
        borderRadius: 10,
        paddingStart: 10,
        paddingEnd: 10,
      },
	  loginButton: {
		position: 'relative',
		backgroundColor: COLORS.primaryDarkGrey,
		borderWidth: 1,
		borderColor: COLORS.borderSuccessGreen,
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
		fontSize: FONTSIZE.size_18,
		color: COLORS.primaryWhite,
	  },

    buttomLoginText: {
		position: 'relative',
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'center',
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
	errorContainer: {
		backgroundColor: COLORS.backgroundErrorBackendContainerRGBA,
		borderWidth: 1,
		borderColor: COLORS.borderErrorBackgroundBackendRed,
		borderRadius: 10,
		padding: 8,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		fontFamily: 'Poppins',
		position: 'relative',
		marginBottom: 10,
		zIndex: 1,
	},

      forgotPasswordContainer: {
        position: 'absolute',
        top: "73%", // Ajusta esta posición según tu diseño
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      forgotPasswordText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_14,
        marginRight: 5,
      },
      
      resetPasswordLink: {
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_14,
      },
      


})

export default LoginStyles;