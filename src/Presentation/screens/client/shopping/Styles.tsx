import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../../themes/Theme";

const ShoppingCartStyles = StyleSheet.create({
    shoppingCartContainer: {
        flex: 1,
        backgroundColor: COLORS.generalBackgroundBlack,
        alignItems: 'center',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centrar el título
        width: '100%',
        padding: 15,
        marginTop: 20,
        marginBottom: 15,
    },

    backButton: {
        position: 'absolute',
        left: 15,
        width: 30,
        height: 30,
    },

    mainText: {
        fontFamily: 'Poppins',
        fontSize: 20,
        color: COLORS.primaryWhite, // Cambiar a blanco
    },

    noShoppingCartListText: {
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        marginVertical: 20,
    },

    shoppingCartListInnerContainer: {
        flex: 1,
        width: "90%",
        marginTop: 20,
    },

    shoppingCartListElement: {
        backgroundColor: COLORS.secondaryBlackRGBA,
        width: "100%",
        borderRadius: 20, // Redondear más los bordes
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    shoppingCartListImage: {
        borderRadius: 15, // Redondear más los bordes
        width: 100,
        height: 100,
        marginRight: 10,
    },

    shoppingCartListText: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 10, // Aumentar el espacio hacia la derecha
    },

    shoppingCartListElementName: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: 15, // Cambiar tamaño a 15
        marginBottom: 5,
    },

    shoppingCartListElementDescription: {
        color: COLORS.primaryLightGrey,
        fontFamily: 'Poppins',
        fontSize: 9, // Cambiar tamaño a 9
        marginBottom: 5,
    },

    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10, // Añadir espacio debajo del precio
    },

    priceText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: 13, // Cambiar tamaño a 13
        marginRight: 5,
    },

    priceCurrency: {
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        fontSize: 13, // Cambiar tamaño a 13
    },

    priceSign: {
        fontSize: 13, // Cambiar tamaño a 13
        color: COLORS.primaryOrange,
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Distribuir botones a través del contenedor
        width: '100%',
    },

    quantityButton: {
        width: 28.44,
        height: 28.44,
        borderRadius: 5, // Bordes redondeados
        backgroundColor: COLORS.primaryOrange,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },

    quantityButtonText: {
        color: COLORS.primaryWhite,
        fontSize: FONTSIZE.size_15,
    },

    quantityText: {
        color: COLORS.primaryWhite,
        fontSize: FONTSIZE.size_15,
    },

    payTotalBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        padding: 20,
        position: 'absolute',
        bottom: 20,
    },

    totalTitle: {
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhite,
    },

    payButton: {
        flexDirection: 'row',
        backgroundColor: '#D17842',
        padding: 13,
        paddingStart: 35,
        paddingEnd: 35,
        borderRadius: 10,
    },

    payText: {
        fontFamily: 'Poppins',
        fontSize: 20,
        color: '#F6F6F6',
    },

    disabledCounterButton: {
        backgroundColor: COLORS.secondaryDarkGrey,
    },
});

export default ShoppingCartStyles;
