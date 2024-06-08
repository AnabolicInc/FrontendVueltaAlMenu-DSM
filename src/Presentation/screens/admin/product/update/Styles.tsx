import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONTSIZE } from '../../../../themes/Theme'

const ProductUpdateStyles = StyleSheet.create({

  productUpdateContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.generalBackgroundBlack,
  },

  productUpdateInnerContainer: {
    position: 'relative',
    height: 1000,
    top: -150,
  },

  productUpdateImageContainer: {
    position: 'relative',
    width: 400,
    height: 400,
  },

  opacityContainer: {
    position: 'relative',
    backgroundColor: `rgba(${37}, ${42}, ${50}, 0.5)`,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: 400,
    height: 150,
    top: '-18%',
  },

  productUpdateNameText: {
    position: 'relative',
    color: COLORS.primaryWhite,
    fontFamily: 'Poppins',
    fontSize: FONTSIZE.size_20,
    marginLeft: 20,
    textAlign: 'left',
    top: "10%",
  },

  productUpdateDescriptionText: {
    position: 'relative',
    color: COLORS.primaryWhite,
    fontFamily: 'Poppins',
    fontSize: FONTSIZE.size_14,
    marginLeft: 20,
    textAlign: 'left',
    top: "10%",
  },

  buttonBack: {
    position: 'relative',
    backgroundColor: COLORS.generalBackgroundBlack,
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    top: '-62%',
    left: '-38%',
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
  
  saveText: {
    color: COLORS.primaryWhite,
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: 10,
  },

  uploadImageButton: {
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
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadImageButtonText: {
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
    marginBottom: 10,
    paddingStart: 15,
    paddingEnd: 15,
  },

  descriptionInput: {
    fontFamily: 'Poppins',
    backgroundColor: COLORS.backgroundInputGrayRGBA,
    color: COLORS.primaryWhite,
    width: 350,
    height: 100,
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
    marginBottom: 10,
    paddingStart: 15,
    paddingEnd: 15,
  }
})

export default ProductUpdateStyles;