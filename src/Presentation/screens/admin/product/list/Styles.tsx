import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from '../../../../themes/Theme';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.generalBackgroundBlack,
        justifyContent: 'space-between',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    backButtonImage: {
        width: 24,
        height: 24,
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
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 8,
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
        fontSize: FONTSIZE.size_15,
        marginBottom: 0,
    },
    productDescription: {
        color: '#AEAEAE',
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_10,
        marginBottom: 10,
    },
    productDetails: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    productQuantityPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        width: '100%',
    },
    productQuantityContainer: {
        backgroundColor: COLORS.primaryDarkGrey,
        borderColor: COLORS.primaryOrange,
        borderWidth: 1,
        borderRadius: 5,
        width: 50,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 73,
    },
    productQuantity: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_16,
        textAlign: 'center',
    },
    productPriceWrapper: {
        alignItems: 'center',
        marginRight: 50,
    },
    productPrice: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_15,
        textAlign: 'center',
        width: 100,
    },
    productPriceSymbol: {
        color: COLORS.primaryOrange,
    },
    productButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 5,
    },
    editButtonContainer: {
        alignItems: 'center',
    },
    deleteButtonContainer: {
        alignItems: 'center',
    },
    editButtonImage: {
        width: 32,
        height: 48,
        marginLeft: -5,
    },
    deleteButtonImage: {
        width: 32,
        height: 48,
        marginLeft: 59,
    },
    newProductButton: {
        backgroundColor: COLORS.primaryOrange,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 100, // Ajusta este valor para que el botón no ocupe todo el espacio lateral
        marginBottom: 20,
    },
    newProductButtonText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_18,
    },
});

export default Styles;
