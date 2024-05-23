import { StyleSheet } from "react-native";

const ShoppingCartStyles = StyleSheet.create(
    {

        shoppingCartContainer: {
            flex: 1,
            backgroundColor: '#0C1013',
            alignItems: 'center',
            justifyContent: 'center',
        },


        shopppingCartInnerContainer: {
            flexDirection: 'column',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            top: "30%",

        },
        payButton: {
            flexDirection: 'row',
            backgroundColor: '#D17842',
            padding: 15,
            paddingStart: 30,
            paddingEnd: 30,
            borderRadius: 5,
            marginTop: 20,
        },
        payText: {
            fontFamily: 'Poppins',
            fontSize: 20,
            color: '#F6F6F6',
        },

        backButton: {
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30,
            top: "-38%",
            left: "-40%",
        },


        mainText: {
            
            fontFamily: 'Poppins',
            fontSize: 20,
            color: '#D17842',
            marginBottom: 20,
            position: 'absolute',
            top: "10%",
        },
        userText: {
            fontFamily: 'Poppins',
            fontSize: 20,
            color: '#D17842',
            marginBottom: 20,
        },
        userButton: {
            backgroundColor: '#D17842',
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
        },
        userButtonText: {
            fontFamily: 'Poppins',
            fontSize: 20,
            color: '#F6F6F6',
        },
        titleText: {
            fontFamily: 'Poppins',
            fontSize: 15,
            color: '#ffffff',
            marginBottom: 20,
            position: 'absolute',
            top: "30%",
            left: "10%",
        },

        
        fieldContainer: {
            marginTop: 20,
        },



    }
);

export default ShoppingCartStyles;