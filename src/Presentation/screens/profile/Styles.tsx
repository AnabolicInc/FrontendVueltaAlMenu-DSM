import { StyleSheet } from "react-native";



const ProfileStyles = StyleSheet.create(
    {

        profileContainer: {
            flex: 1,
            backgroundColor: '#0C1013',
            alignItems: 'center',
            justifyContent: 'center',
        },

        backgroudField: {
            backgroundColor: 'linear-gradient(90deg, rgba(190,190,190,0.2) 0%, rgba(209,120,66,01) 100%)',
            width: 320,
            height: 100,
            borderRadius: 15,
            marginBottom: 10,
            position: 'absolute',
            top: "27%",
        },

        backButton: {
            width: 30,
            height: 30,
            position: 'absolute',
            top: "10%",
            left: "8%",
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
        dataText: {
            fontFamily: 'Poppins',
            fontSize: 15,
            color: '#ffffff',
            marginBottom: 20,
            position: 'absolute',
            top: "35%",
            left: "12%",
        },
        
        editFieldButton: {
            backgroundColor: '#D17842',
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            position: 'absolute',
            top: "28%",
            right: "10%",
        },

        
        fieldContainer: {
            marginTop: 20,
        },
        input: {
            backgroundColor: '#F6F6F6',
            width: 200,
            height: 40,
            borderRadius: 5,
            marginBottom: 10,
            paddingLeft: 10,
        },


    }
);

export default ProfileStyles;