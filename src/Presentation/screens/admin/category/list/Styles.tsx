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

      categoryListText: {
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
        //backgroundColor: COLORS.primaryGrey,
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

      categoryListInnerElement: {
        alignSelf: 'stretch',
        flexDirection: 'column',
      },

      categoryListInnerInnerElement: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        top: 25,
      },

      categoryListImage: {
        position: 'relative',
        borderRadius: 30,
        width: 100,
        height: 100,
        top: 20,
        marginRight: '4%',
      },


      categoryListElementTittle: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize: FONTSIZE.size_16  ,
        top: 17,
      },

      categoryListElementDescription: {
        color: COLORS.primaryLightGrey,
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize: FONTSIZE.size_12  ,
        top: 17,
      },

      
      buttonEdit: {
        backgroundColor: 'transparent',
        borderColor: COLORS.primaryOrange,
        borderWidth: 2,
        borderRadius: 10,
        height: 40,
        width: '60%',
        marginRight: '2%',
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


      modalContent: {
        top: "35%",
        borderRadius: 20,
        width: 360,
        height: 140,
        justifyContent: 'center',
        alignSelf: 'center',
      },

      modalText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'center',
      },

      modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 200,
        alignSelf: 'center',
      },

      modalButtonDelete: {
        backgroundColor: COLORS.borderErrorBackgroundBackendRed,
        borderRadius: 13,
        paddingVertical: 8,
        paddingHorizontal: 12,
      },

      modalButtonCancel: {
        backgroundColor: COLORS.backgroundSuccessGreen,
        borderRadius: 13,
        paddingVertical: 8,
        paddingHorizontal: 12,
      },

      modalButton: {
        color: COLORS.primaryWhite,
      }
          
})

export default CategoryListStyles;