import { StyleSheet } from "react-native";

const ProfileInfoStyles = StyleSheet.create(
    {

        profileContainer: {
            flex: 1,
            backgroundColor: '#0C1013',
            alignItems: 'center',
            justifyContent: 'center',
        },


        profileInnerContainer: {
            flex: 1,
            flexGrow: 1,
            flexDirection: 'column',
            position: 'absolute',
            top: "20%",
            width: "90%",
            height: "80%",
            alignSelf: 'center',

        },
        profileUpdateUserImageContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 60,
        },
        profileUpdateUserImage: {
            width: 200,
            height: 200,
            borderRadius: 50,
            position: 'relative',
            top: "10%",
            right: "5%",
            alignSelf: 'flex-end',
            marginLeft: 20,
            marginTop: -10,
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

        
        fieldContainer: {
            marginTop: 20,
        },

        editButton: {
            flexDirection: 'row',
            backgroundColor: '#141921',
            borderWidth: 2,
            borderColor: '#D17842',
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
            marginBottom: 20,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',

        },
        editButtonText: {
            fontFamily: 'Poppins',
            fontSize: 15,
            color: '#F6F6F6',
            
        },


    }
);

export default ProfileInfoStyles;