import { StyleSheet } from "react-native";

const UserHomeStyles = StyleSheet.create(
    {
        userContainer: {
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0C1013',
        },
        userImage: {
            backgroundColor: '#0C1013',
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
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 20,
        },
        mainText: {
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: 25,
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
            backgroundColor: '#D17842',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
            userButtonText: {
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: 15,
        },
        searchBar: {
            position: 'absolute',
            top: "30%",
            left: "5%",
            width: "90%",
            height: "6%",
            backgroundColor: '#141921',
            borderRadius: 10,
            textAlign: 'left',
            fontSize: 15,
        },
    }
);

export default UserHomeStyles;