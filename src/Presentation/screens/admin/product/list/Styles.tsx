import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from '../../../../themes/Theme';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.generalBackgroundBlack,
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
    noCategoryListText: {
        position: 'absolute',
        top: "50%",
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        marginBottom: 20,

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
    
});

export default Styles;