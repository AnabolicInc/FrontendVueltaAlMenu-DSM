import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONTSIZE } from '../../../../themes/Theme'

const CategoryUpdateStyles = StyleSheet.create(

    {

      categoryUpdateContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.generalBackgroundBlack,
      },

      categoryUpdateInnerContainer: {
        position: 'relative',
        width: "100%"
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

      categoryUpdateText: {
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

      categoryUpdateUserImage: {
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

      categoryName: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'left',
        left: 25,
        fontSize: FONTSIZE.size_18,
        top: 25,
      },

      categoryDescription: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'left',
        left: 25,
        top: 25,
        flexWrap: 'wrap',
        width: "87%",
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
        height: 80,
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
})

export default CategoryUpdateStyles;