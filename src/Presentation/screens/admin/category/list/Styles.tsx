import { StyleSheet } from "react-native";

import { COLORS, FONTSIZE } from '../../../../themes/Theme'

const CategoryListStyles = StyleSheet.create(

    {

      categoryListContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.generalBackgroundBlack,
      },

      noCategoryListText: {
        position: 'absolute',
        top: "50%",
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        marginBottom: 20,

      },

      categoryListTittle: {
        position: 'absolute',
        top: "10%",
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        marginBottom: 20,

      },

      buttonAdd: {
        position: 'absolute',
        top: "92%",
        backgroundColor: COLORS.primaryOrange,
        borderRadius: 10,
        width: 150,
        height: 45, 
      },
     
      saveText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: 11,
      },

      categoryListInnerContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        width: "85%",
        height: "70%",
        position: 'absolute',
        top: "18%",
        alignContent: 'center',
        borderRadius: 10,
      },

      categoryListElement: {
        backgroundColor: COLORS.secondaryBlackRGBA,
        flex: 1,
        width: "100%",
        height: 150,
        borderRadius: 30,
        marginBottom: 10,
        paddingStart: 15,
        paddingEnd: 15,
        alignSelf: 'stretch',
        flexDirection: 'row',
      },

      categoryListText: {
        alignSelf: 'stretch',
        flexDirection: 'column',
      },

      categoryListOptions: {
        position: 'absolute',
        alignSelf: 'stretch',
        flexDirection: 'column',
        top: 25,
        right: 17,
      },

      categoryListImage: {
        position: 'relative',
        borderRadius: 30,
        width: 100,
        height: 100,
        top: 25,
        marginRight: '4%',
      },


      categoryListElementName: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize: FONTSIZE.size_18,
        top: 25,
      },

      categoryListElementDescription: {
        color: COLORS.primaryLightGrey,
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize: FONTSIZE.size_14,
        top: 25,
      },

      
      buttonEdit: {
        backgroundColor: 'transparent',
        borderColor: COLORS.primaryOrange,
        borderWidth: 2,
        borderRadius: 10,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '15%',
      },

      editText: {
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: '5%',
      },

      buttonDelete: {
        backgroundColor: 'transparent',
        borderColor: COLORS.deleteButtonRed,
        borderWidth: 2,
        borderRadius: 10,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },


      modalContainer: {
        flex: 1,
        backgroundColor: COLORS.generalBackgroundBlack,
      },

      modalMessageBox: {
        top: '32%',
        borderRadius: 17,
        width: 260,
        height: 140,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.primaryDarkGrey,
        borderColor: COLORS.primaryOrange,
        borderWidth: 3,
      },

      modalMessageText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'center',
        textShadowColor: COLORS.primaryOrange,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        borderColor: COLORS.primaryOrange,
      },

      modalButtonsContainer: {
        top: '71%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 270,
        alignSelf: 'center',
      },

      modalButtonDelete: {
        backgroundColor: COLORS.primaryDarkGrey,
        borderColor: COLORS.deleteButtonRed,
        borderWidth: 2,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 120,
        flexDirection: 'row',
      },

      modalButtonCancel: {
        backgroundColor: COLORS.primaryDarkGrey,
        borderColor: COLORS.primaryWhite,
        borderWidth: 2,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 120,
        flexDirection: 'row',
      },

      modalButtonImageContainer: {
        marginRight: 3
      },

      modalButtonText: {
        color: COLORS.primaryWhite,
        fontSize: FONTSIZE.size_15,
        justifyContent: 'center',
      }
})

export default CategoryListStyles;