import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from '../../../../themes/Theme';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.generalBackgroundBlack,
        justifyContent: 'space-between',
    },
    headerText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        marginVertical: 40,
    },
    productContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.primaryDarkGrey,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noProductsText: {
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
    },
    productInfo: {
        flex: 1,
        marginLeft: 10,
    },
    productTitle: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_18,
        marginBottom: 5,
    },
    productDescription: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_14,
        marginBottom: 10,
    },
    productActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productQuantity: {
        backgroundColor: COLORS.primaryDarkGrey,
        color: COLORS.primaryWhite,
        fontSize: FONTSIZE.size_15,
        textAlign: 'center',
        borderRadius: 5,
        width: 30,
        height: 30,
        marginRight: 10,
    },
    productPrice: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_18,
        marginRight: 10,
    },
    editButton: {
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_15,
        marginRight: 10,
    },
    deleteButton: {
        color: COLORS.borderErrorRed,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_15,
    },
    newProductButton: {
        backgroundColor: COLORS.primaryOrange,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 20,
    },
    newProductButtonText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_18,
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
});

export default Styles;
