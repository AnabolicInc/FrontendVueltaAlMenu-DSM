import { StyleSheet } from "react-native";

const CategoryStyles = StyleSheet.create(
    {
        categoryContainer:{
            position: 'relative',
            flex: 1,
            backgroundColor: '#0C1013',
            alignContent: 'center',
            alignItems: 'center',
        },
        categoryMainTitle: {
            position: 'absolute',
            top: "18%",
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: 24,
            textAlign: 'center',
        },
        saveButton: {
            fontFamily: 'Poppins',
            fontSize: 15,
            borderRadius: 10,
            width: 200,
            height: 40,
            backgroundColor: '#D17842',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: "70%",
        },
        saveButtonText: {
            fontFamily: 'Poppins',
            fontSize: 15,
            color: 'white',
        },
    }
)
    



export default CategoryStyles;