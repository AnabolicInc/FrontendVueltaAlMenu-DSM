import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONTSIZE } from '../../../../themes/Theme'

const ProductUpdateStyles = StyleSheet.create({

	productUpdateContainer: {
		flex: 1,
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.generalBackgroundBlack,
	},

	productImages: {
		position: 'relative',
		width: 400,
		height: 400,
	},

	productUpdateText: {
		position: 'absolute',
		color: COLORS.primaryWhite,
		fontFamily: 'Poppins',
		fontSize: FONTSIZE.size_20,
		alignSelf: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		top: "4%",

		backgroundColor: COLORS.generalBackgroundBlack,
		borderColor: COLORS.primaryOrange,
		borderWidth: 1.5,
		borderRadius: 30,
		width: 200,
		height: 40,
		shadowColor: COLORS.generalBackgroundBlack,
		shadowOpacity: 0,
		shadowRadius: 10,

		elevation: 10,

	},

	textContainer: {
		position: 'absolute',
		width: "90%",
		height: 170,
		alignSelf: 'center',
		backgroundColor: `${COLORS.generalBackgroundBlack}70`,
		top: "50%",
		bottom: 0,
		borderRadius: 17,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,

	},

	productName: {
		color: COLORS.primaryWhite,
		fontFamily: 'Poppins',
		textAlign: 'left',
		left: 25,
		fontSize: FONTSIZE.size_18,
		top: 25,
	},

	productDescription: {
		color: COLORS.primaryWhite,
		fontFamily: 'Poppins',
		textAlign: 'left',
		left: 25,
		top: 25,
		flexWrap: 'wrap',
		width: "87%",
	},

	buttonEdit: {
		position: 'relative',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		width: 100,
		height: 40,
		top: "-50%",
		left: "-30%",
		borderRadius: 10,
		fontFamily: 'Poppins',
		fontSize: FONTSIZE.size_15,
		backgroundColor:COLORS.primaryDarkGrey,
		borderColor: COLORS.primaryOrange,
		borderWidth: 1,

	},

	buttonSave: {
		position: 'relative',
		backgroundColor: COLORS.primaryOrange,
		borderRadius: 10,
		width: 150,
		height: 40,
		alignSelf: 'center',
		marginTop: 40,
	},

	changeImageButtonText: {
		fontFamily: 'Poppins',
		fontSize: FONTSIZE.size_10,
		color: COLORS.primaryWhite,
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
	},

	nameInput: {
		fontFamily: 'Poppins',
		backgroundColor: COLORS.backgroundInputGrayRGBA,
		color: COLORS.primaryWhite,
		width: 350,
		height: 40,
		borderRadius: 10,
		
		marginBottom: 10,
		paddingStart: 15,
		paddingEnd: 15,
	},

	descriptionInput: {
		fontFamily: 'Poppins',
		backgroundColor: COLORS.backgroundInputGrayRGBA,
		color: COLORS.primaryWhite,
		width: 350,
		height: 80,
		borderRadius: 10,
		marginBottom: 10,
		paddingStart: 15,
		paddingEnd: 15,
	},

	priceInput: {
		fontFamily: 'Poppins',
		backgroundColor: COLORS.backgroundInputGrayRGBA,
		color: COLORS.primaryWhite,
		width: 350,
		height: 40,
		borderRadius: 10,
		marginBottom: 10,
		paddingStart: 15,
		paddingEnd: 15,
	},

	quantityInput: {
		fontFamily: 'Poppins',
		backgroundColor: COLORS.backgroundInputGrayRGBA,
		color: COLORS.primaryWhite,
		width: 350,
		height: 40,
		borderRadius: 10,
		paddingStart: 15,
		paddingEnd: 15,
	},

	saveButton: {
		position: 'relative',
		backgroundColor: COLORS.primaryDarkGrey,
		borderColor: COLORS.primaryOrange,
		borderWidth: 1.5,
		borderRadius: 10,
		width: 160,
		height: 40,
		alignSelf: 'center',
		marginTop: 10,
	},

	saveText: {
		color: COLORS.primaryWhite,
		fontFamily: 'Poppins',
		textAlign: 'center',
		marginTop: 8,
	},

	cancelButton: {
		position: 'relative',
		backgroundColor: COLORS.borderErrorRed,
		borderColor: COLORS.borderErrorBackgroundBackendRed,
		borderWidth: 1.5,
		borderRadius: 10,
		width: 160,
		height: 40,
		alignSelf: 'center',
		marginTop: 10,
		marginBottom: 40,
	},

	cancelText: {
		color: COLORS.primaryWhite,
		fontFamily: 'Poppins',
		textAlign: 'center',
		marginTop: 8,
	},

	imageContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start', // Alinear las imágenes al principio del contenedor
        alignItems: 'center',
		height: 300
    },


	productImagesContainer: {
		width: 400,
		height: 450,
	},

	imagesContainer: {
        flexDirection: 'column',
		marginTop: 10,
		bottom: 10,
    
    },

	textInputsContainer: {
        
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		top: 20,
    
    },

	userImage: {
        width: 300,
        height: 300,
    },
})

export default ProductUpdateStyles;