import { StyleSheet } from "react-native";


const RestoreStyles = StyleSheet.create(
  {

    forgotPasswordContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0C1013',
        padding: 20,
      },
      
      loremIpsumText: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginBottom: 20,
      },
      
      passwordResetInput: {
        backgroundColor: 'white',
        fontFamily: 'Poppins',
        borderRadius: 10,
        width: 250,
        height: 40,
        marginBottom: 20,
        paddingStart: 10,
        paddingEnd: 10,
      },
      
      resetButtonContainer: {
        backgroundColor: '#D17842',
        borderRadius: 10,
        width: 200,
        height: 40,
      },
      
      resetButtonText: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: 10,
      },
      
})

export default RestoreStyles;