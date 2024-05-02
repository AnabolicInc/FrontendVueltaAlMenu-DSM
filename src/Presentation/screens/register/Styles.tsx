import { StyleSheet } from "react-native";


const RegisterStyles = StyleSheet.create({

    registerContainer:{
		flex: 1,
		position: 'relative',
		backgroundColor: '#0C1013',
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
		color: '#D17842',
		fontSize: 24,
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
		backgroundColor: '#141921',
		borderColor: '#D17842',
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
		color: '#D17842',
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
		marginBottom: 50,
		backgroundColor: '#94c58c',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		top: "40%",
		alignSelf: 'center',
    },

    confirmButtonText: {
		fontFamily: 'Poppins',
		fontSize: 15,
		color: 'white',
    },

	errorText: {
		fontFamily: 'Poppins',
		fontSize: 15,
		color: '#ff6961',
		position: 'relative',
		top: "0%",
		alignSelf: 'center',
		marginBottom: 10,
	},
	errorContainer: {
		fontFamily: 'Poppins',
		position: 'relative',
		alignSelf: 'center',
		marginBottom: 10,
	},



})

export default RegisterStyles;