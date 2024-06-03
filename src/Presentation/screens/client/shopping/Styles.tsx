import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../../themes/Theme";

const ShoppingCartStyles = StyleSheet.create(
    {

        shoppingCartContainer: {
            flex: 1,
            backgroundColor: COLORS.generalBackgroundBlack,
            alignItems: 'center',
            justifyContent: 'center',
        },


        shoppingCartInnerContainer: {
            flex: 1,
            flexDirection: 'column',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',

        },

        payTotalBox: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '70%',
            top: "100%",
        },

        totalBox: {
            flexDirection: 'column',
        },

        totalTitle: {
            fontSize: FONTSIZE.size_16,
            color: COLORS.primaryWhite,
        },

        priceSign: {
            fontSize: FONTSIZE.size_18,
            color: COLORS.primaryOrange,
        },

        priceText: {
            fontSize: FONTSIZE.size_18,
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

        backButton: {
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30,
            top: "-8%",
            left: "-38%",
        },


        mainText: {
            
            fontFamily: 'Poppins',
            fontSize: 20,
            color: '#D17842',
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

        noShoppingCartListText: {
            position: 'absolute',
            top: "50%",
            color: COLORS.primaryOrange,
            fontFamily: 'Poppins',
            fontSize: FONTSIZE.size_20,
            textAlign: 'center',
            marginBottom: 20,
    
          },

          shoppingCartListInnerContainer: {
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

          shoppingCartListElement: {
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

          shoppingCartListImage: {
            position: 'relative',
            borderRadius: 30,
            width: 100,
            height: 100,
            top: 25,
            marginRight: '4%',
          },

          shoppingCartListText: {
            alignSelf: 'stretch',
            flexDirection: 'column',
          },

          shoppingCartListElementName: {
            color: COLORS.primaryWhite,
            fontFamily: 'Poppins',
            textAlign: 'left',
            fontSize: FONTSIZE.size_18,
            top: 25,
          },
    
          shoppingCartListElementDescription: {
            color: COLORS.primaryLightGrey,
            fontFamily: 'Poppins',
            textAlign: 'left',
            fontSize: FONTSIZE.size_12,
            top: 25,
          },
    }
);

export default ShoppingCartStyles;