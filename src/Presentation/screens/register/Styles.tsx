import { StyleSheet } from "react-native";


import { COLORS, FONTSIZE } from '../../themes/Theme'


const RegisterStyles = StyleSheet.create({
	
    registerContainer:{
		flex: 1,
		position: 'relative',
		backgroundColor: COLORS.generalBackgroundBlack,
		alignContent: 'center',
		alignItems: 'center',
		
    },
    
    scrollContainer: {
		flexGrow: 1,
		flexDirection: 'column',
		width: "100%",
		position: 'relative',
		top: "10%",
		marginHorizontal: 10

    },
    
	registerInnerContainer: {
		flex: 1,
		flexGrow: 1,
		width: "70%",
		height: "59%",
		position: 'absolute',
		top: "20%",
		
		borderRadius: 10,
	},
	
    registerMainTitle: {
		color: COLORS.primaryWhite,
		fontSize: FONTSIZE.size_24,
		textAlign: 'center',
		marginBottom: 20,
		fontFamily: 'Poppins',
		position: 'relative',
		top: "8%",
		left: "0%",
    },
	
    registerUserImage: {
		
		width: 100,
		height: 100,
		position: 'relative',
		top: "0%",
		alignSelf: 'center',
    },

    backButton: {
		width: 30,
		height: 30,
		position: 'absolute',
		top: "8%",
		left: "5%",
    },
    
    uploadImageUserButton: {
		fontFamily: 'Poppins',
		fontSize: 15,
		borderRadius: 10,
		width: 200,
		height: 40,
		backgroundColor: COLORS.primaryDarkGrey,
		borderColor: COLORS.primaryOrange,
		borderWidth: 1,
		position: 'relative',
		top: "5%",
		alignSelf: 'center',
		marginBottom: 70,
		justifyContent: 'center',
		alignItems: 'center',
    },

    uploadImageUserButtonText: {
		fontFamily: 'Poppins',
		fontSize: 15,
		color: COLORS.primaryOrange,
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
	},

   
    requerimientContainer: {
		fontFamily: 'Poppins',
		position: 'relative',
		alignSelf: 'center',
    },

    completed: {
		fontFamily: 'Poppins',
		color: COLORS.requirementCompletedGreen,
		position: 'relative',
		marginBottom: 10,
		alignContent: 'stretch',
    },

    uncompleted: {
		fontFamily: 'Poppins',
		color: COLORS.requirementUncompletedRed,
		position: 'relative',
		marginBottom: 10,
    },

    confirmButton: {
		fontFamily: 'Poppins',
		fontSize: FONTSIZE.size_15,
		borderRadius: 10,
		width: 200,
		height: 40,
		marginBottom: 50,
		backgroundColor: COLORS.backgroundButtonGreen,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		alignSelf: 'center',
    },

    confirmButtonText: {
		fontFamily: 'Poppins',
		fontSize: FONTSIZE.size_15,
		color: COLORS.primaryWhite,
    },

	errorText: {
		backgroundColor: COLORS.requirementUncompletedRed,
		borderRadius: 10,
		fontFamily: 'Poppins',
		fontSize: FONTSIZE.size_14,
		color: COLORS.primaryWhite,
		position: 'relative',
		top: "0%",
		alignSelf: 'flex-start',
		width: 250,
		marginBottom: 10,
		padding: 10,
	},
	errorContainer: {
		fontFamily: 'Poppins',
		position: 'relative',
		alignSelf: 'center',
		marginBottom: 10,
		zIndex: 1,
		top: "75%",
	},
	loadingContainer: {
		backgroundColor: COLORS.secondaryBlackRGBA,
		flex: 1,
		width: '100%',
		height: '100%',
		position: 'absolute',
		justifyContent: 'center',
		alignSelf: 'center',
		marginBottom: 10,
		zIndex: 1,
	},

})

export default RegisterStyles;