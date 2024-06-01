import { StyleSheet } from "react-native";


import { COLORS, FONTSIZE } from "../../themes/Theme";

const ClientHomeStyles = StyleSheet.create(
    {
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
            flexDirection: 'column',
            width: "85%",
            height: "70%",
            position: 'absolute',
            top: "18%",
            alignContent: 'center',
            borderRadius: 10,
          },
          productListElement: {
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
          productListImage: {
            position: 'relative',
            borderRadius: 30,
            width: 100,
            height: 100,
            top: 25,
            marginRight: '4%',
          },
          productListElementName: {
            color: COLORS.primaryWhite,
            fontFamily: 'Poppins',
            textAlign: 'left',
            fontSize: FONTSIZE.size_18,
            top: 25,
          },
          productListElementDescription: {
            color: COLORS.primaryLightGrey,
            fontFamily: 'Poppins',
            textAlign: 'left',
            fontSize: FONTSIZE.size_12,
            top: 25,
          },
          container: {
            flex: 1,
            backgroundColor: '#0C1013',
            padding: 16,
          },
          title: {
            color: '#FFFFFF',
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 16,
            textAlign: 'center',
          },
          searchContainer: {
            backgroundColor: '#1F1F1F',
            borderRadius: 10,
            marginBottom: 16,
            padding: 8,
          },
          searchInput: {
            color: '#FFFFFF',
            fontSize: 16,
          },
          flatListContentContainer: {
            paddingVertical: 16,
          },
          productCard: {
            backgroundColor: '#1F1F1F',
            borderRadius: 10,
            padding: 16,
            marginRight: 16,
            width: 200,
            alignItems: 'center',
          },
          productImage: {
            width: 150,
            height: 150,
            borderRadius: 10,
            marginBottom: 8,
          },
          productName: {
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 4,
          },
          productDescription: {
            color: '#7C7C7C',
            fontSize: 14,
            marginBottom: 8,
            textAlign: 'center',
          },
          productPrice: {
            color: '#D17842',
            fontSize: 16,
            marginBottom: 8,
          },
          addButton: {
            backgroundColor: '#D17842',
            borderRadius: 10,
            padding: 8,
            alignItems: 'center',
            justifyContent: 'center',
          },
          addButtonText: {
            color: '#FFFFFF',
            fontSize: 20,
            fontWeight: 'bold',
          },
    
    }
);

export default ClientHomeStyles;