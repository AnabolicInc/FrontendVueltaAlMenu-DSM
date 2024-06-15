import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTSIZE } from "../../themes/Theme";

const ClientHomeStyles = StyleSheet.create({
    userContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.generalBackgroundBlack,
    },
    userImage: {
        backgroundColor: COLORS.generalBackgroundBlack,
        position: 'absolute',
        top: "-10%",
        left: "-30%",
        width: 350,
        height: 350,
        opacity: 0.8
    },
    userText: {
        position: 'absolute',
        top: "35%",
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        marginBottom: 20,
    },
    mainText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_24,
        textAlign: 'left',
        marginBottom: 20,
        position: 'absolute',
        top: "15%",
        left: "5%",
    },
    userButton: {
        position: 'absolute',
        top: "50%",
        left: "15%",
        width: 250,
        height: 40,
        backgroundColor: COLORS.primaryOrange,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userButtonText: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_15,
    },
    searchBar: {
        position: 'absolute',
        top: "30%",
        left: "5%",
        width: "90%",
        height: "8%",
        backgroundColor: COLORS.primaryDarkGrey,
        color: COLORS.primaryWhite,
        borderRadius: 10,
        textAlign: 'left',
        fontSize: FONTSIZE.size_15,
        paddingStart: 15,
        paddingEnd: 15,
    },
    productListContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.generalBackgroundBlack,
    },
    productListText: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        top: 10,
    },
    productListTittle: {
        position: 'absolute',
        top: "10%",
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        marginBottom: 20,
    },
    noProductListText: {
        position: 'absolute',
        top: "50%",
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        marginBottom: 20,
    },
    productListInnerContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        width: "92%",
        height: "70%",
        position: 'absolute',
        top: "45%",
    },
    productListElement: {
        backgroundColor: COLORS.secondaryBlackRGBA,
        width: 180,
        height: 400,
        borderRadius: 30,
        marginBottom: 10,
        paddingStart: 15,
        paddingEnd: 15,
        flexDirection: 'column',
        marginRight: 15,
    },
    productListImage: {
        position: 'relative',
        borderRadius: 15,
        width: "100%",
        height: 150,
        top: 17,
        marginRight: '4%',
    },
    productListElementName: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize: FONTSIZE.size_18,
        top: 20,
    },
    productListElementDescription: {
        color: COLORS.primaryLightGrey,
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize: FONTSIZE.size_12,
        top: 20,
    },
    productListPriceAddBoxContainer: {
        position: 'absolute',
        width: "100%",
        bottom: 20,
        alignSelf: 'center',
    },
    productListPriceContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10, // Agregado para espacio vertical
    },
    productListElementPriceSignText: {
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize: FONTSIZE.size_18,
        marginBottom: 5, // Ajuste para subir el precio
    },
    productListElementPriceText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize: FONTSIZE.size_18,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginLeft: -10,
    },
    counterButton: {
        backgroundColor: '#D17842',
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 10,
    },
    counterButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    counterText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    addButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginLeft: 10,
    },
    addButton: {
        backgroundColor: '#D17842',
        borderRadius: 10,
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: COLORS.primaryWhite,
        fontSize: 24,
        bottom: 1,
    },
});

export default ClientHomeStyles;
