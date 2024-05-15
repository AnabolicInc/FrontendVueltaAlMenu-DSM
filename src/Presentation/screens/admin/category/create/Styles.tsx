import { StyleSheet } from "react-native";


import { COLORS, FONTSIZE } from '../../../../themes/Theme'

const CategoryCreateStyles = StyleSheet.create(

    {

      categoryCreateContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.generalBackgroundBlack,
      },

      categoryCreateInnerContainer: {
        position: 'relative',
      },

      categoryCreateText: {
        position: 'relative',
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        marginBottom: 60,
        marginTop: 70,

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

      buttonSave: {
        position: 'relative',
        backgroundColor: COLORS.primaryOrange,
        borderRadius: 10,
        width: 150,
        height: 40,
        alignSelf: 'center',
      },
     
      saveText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: 10,
      },

      categoryCreateUserImage: {
        width: 100,
        height: 100,
        position: 'relative',
        alignSelf: 'center',
        marginBottom: 30,
      },

      nameInput: {
        fontFamily: 'Poppins',
        backgroundColor: COLORS.backgroundInputGrayRGBA,
        color: COLORS.primaryWhite,
        width: 250,
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
        width: 250,
        height: 240,
        borderRadius: 10,
        marginBottom: 10,
        paddingStart: 15,
        paddingEnd: 15,
        
      },

})

export default CategoryCreateStyles;