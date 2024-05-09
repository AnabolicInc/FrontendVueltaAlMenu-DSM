//generate styles for resetPassword screen
import { StyleSheet } from 'react-native';

export const ResetPasswordStyles = StyleSheet.create({
    resetPasswordContainer: {
        flex: 1,
        backgroundColor: '#0C1013',
        alignItems: 'center',
        justifyContent: 'center',
		alignContent: 'center',
    },
    resetPasswordInnerContainer: {
      flexDirection: 'column',
      position: 'relative',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
	  top: '-20%',
  	},
    resetPasswordImage: {
      position: 'relative',
      left: '-45%',
      top: '-20%',
      width: 350,
      height: 350,
    },
    resetPasswordText: {
      position: 'relative',
      marginBottom: 20,
      color: 'white',
      fontFamily: 'Poppins',
      fontSize: 20,
    },
    emailInputContainer: {
		position: 'relative',
        backgroundColor: 'white',
        width: 300,
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
    },
    buttomResetPassword: {
		position: 'relative',
        backgroundColor: '#D17842',
        width: 250,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttomResetPasswordText: {
		position: 'relative',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 15,
    },
    backContainer: {
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
        width: 200,
		height: 50,
		backgroundColor: '#141A1E',
		borderColor: '#D17842',
		borderRadius: 10,
		borderWidth: 1,

    },
    backTextContainer: {
        color: '#D17842',
        fontFamily: 'Poppins',
        fontSize: 15,
    },

});

export default ResetPasswordStyles;