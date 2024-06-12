import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONTSIZE } from '../../../../themes/Theme'

const ProductUpdateStyles = StyleSheet.create({

	productUpdateContainer: {
		flex: 1,
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.generalBackgroundBlack,
	},

	productImagesContainer: {

		flex: 1,
		width: 400,
		height: 450,

		marginBottom: 10,
		marginHorizontal: 10,
		justifyContent: 'center',
		alignSelf: 'center',
		flexDirection: 'column',
	},
	productUpdateInnerContainer: {
		position: 'relative',
		height: 1000,
		top: -150,
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
		width: "100%",
		alignSelf: 'center',

		backgroundColor: `${COLORS.generalBackgroundBlack}70`,
		bottom: 0,
		borderRadius: 17,
		height: 175,

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
		fontFamily: 'Poppins',
		fontSize: FONTSIZE.size_15,
		borderRadius: 10,
		width: 200,
		height: 40,
		backgroundColor: COLORS.primaryDarkGrey,
		borderColor: COLORS.primaryOrange,
		borderWidth: 1,
		position: 'relative',
		alignSelf: 'center',
		marginBottom: 10,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
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
		fontSize: FONTSIZE.size_15,
		color: COLORS.primaryOrange,
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
		marginTop: 10,
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
})

export default ProductUpdateStyles;