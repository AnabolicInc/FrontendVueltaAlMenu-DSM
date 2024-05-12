//generate styles for resetPassword screen
import { StyleSheet } from 'react-native';

import { COLORS, FONTSIZE } from '../../themes/Theme';

export const ResetPasswordStyles = StyleSheet.create({
    resetPasswordContainer: {
        flex: 1,
        backgroundColor: COLORS.generalBackgroundBlack,
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
      fontSize: FONTSIZE.size_20,
    },
    emailInputContainer: {
		position: 'relative',
        backgroundColor: COLORS.primaryWhite,
        width: 300,
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
    },
    buttomResetPassword: {
		position: 'relative',
        backgroundColor: COLORS.primaryOrange,
        width: 250,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttomResetPasswordText: {
		position: 'relative',
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_15,
    },
    backContainer: {
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
        width: 200,
		height: 50,
		backgroundColor: COLORS.primaryDarkGrey,
		borderColor: COLORS.primaryOrange,
		borderRadius: 10,
		borderWidth: 1,

    },
    backTextContainer: {
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_15,
    },
	errorText: {
		backgroundColor: COLORS.backgroundErrorBackendContainerRGBA,
		borderWidth: 1,
		borderColor: COLORS.borderErrorBackgroundBackendRed,
		color: COLORS.primaryWhite,
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

});

export default ResetPasswordStyles;