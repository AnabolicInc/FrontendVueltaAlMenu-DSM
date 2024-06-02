import { Dimensions, StyleSheet } from "react-native";

import { COLORS, FONTSIZE } from '../../../../themes/Theme'


const ProductInfoStyles = StyleSheet.create(
    {
  
        productInfoContainer: {
            flex: 1,
            flexGrow: 1,
            backgroundColor: COLORS.generalBackgroundBlack,
            position: 'relative',
        },
  
        categoryUpdateBackground: {
          position: 'relative',
          backgroundColor: COLORS.primaryOrange,
          borderRadius: 10,
          width: 150,
          height: 40,
          alignSelf: 'center',
          marginTop: 40,
        },
  
        productInfoText: {
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
  
        productInfoImage: {
          position: 'relative',
          width: "100%",
          height: Dimensions.get('window').width,
          alignSelf: 'center',
          marginBottom: 20,
  
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
  
        descriptionTitle: {
          color: COLORS.primaryLightGrey,
          fontFamily: 'Poppins',
          textAlign: 'left',
          left: 25,
          fontSize: FONTSIZE.size_16,
        },

        descriptionComplete: {
          color: COLORS.primaryWhite,
          fontFamily: 'Poppins',
          textAlign: 'left',
          left: 25,
          fontSize: FONTSIZE.size_15,
        },

        productListPriceAddBoxContainer: {
          width: "60%",
          marginTop: "42%",
          alignSelf: 'center',
        },

        productListPriceAddBox: {
          color: COLORS.primaryLightGrey,
          fontFamily: 'Poppins',
          fontSize: FONTSIZE.size_12,
          top: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',

        },

        priceBox: {
          flexDirection: 'column',
          justifyContent: 'center',
          top: 15,
        },

        priceText: {
          color: COLORS.primaryLightGrey,
          fontSize: FONTSIZE.size_12,
        },

        productListElementPriceSignText: {
          color: COLORS.primaryOrange,
          fontFamily: 'Poppins',
          textAlign: 'left',
          fontSize: FONTSIZE.size_20,
          right: 20,
        },

        productListElementPriceText: {
          color: COLORS.primaryWhite,
          fontFamily: 'Poppins',
          textAlign: 'left',
          fontSize: FONTSIZE.size_20,
        },
        
        addButton: {
          backgroundColor: '#D17842',
          borderRadius: 15,
          width: 160,
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          top: 15,
          left: 20,
        },

        addButtonText: {
          color: COLORS.primaryWhite,
          fontSize: FONTSIZE.size_15,
          bottom: 1,
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
          width: "70%",
          height: 40,
          borderRadius: 10,
          marginBottom: 10,
          paddingStart: 15,
          paddingEnd: 15,
          alignSelf: 'center',
          
        },
  
        descriptionInput: {
          position: 'relative',
          fontFamily: 'Poppins',
          backgroundColor: COLORS.backgroundInputGrayRGBA,
          color: COLORS.primaryWhite,
          width: "70%",
          height: 240,
          borderRadius: 10,
          marginBottom: 10,
          paddingStart: 15,
          paddingEnd: 15,
          alignSelf: 'center',
          
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
    }
)
export default ProductInfoStyles;