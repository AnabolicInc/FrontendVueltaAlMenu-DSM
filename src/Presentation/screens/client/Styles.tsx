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
    }
);

export default ClientHomeStyles;