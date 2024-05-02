import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const CategoryUpdateStyles = StyleSheet.create(

    {

      CategoryUpdateContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C1013',
      },

      CategoryUpdateText: {
        position: 'absolute',
        top: "15%",
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,

      },

      buttomSave: {
        position: 'absolute',
        top: "77%",
        backgroundColor: '#D17842',
        borderRadius: 10,
        width: 150,
        height: 40,
      },
     
      SaveText: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: 10,
      },

      categoryUpdateUserImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: "25%",
      },

      nameInput: {
        fontFamily: 'Poppins',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        width: 250,
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        paddingStart: 15,
        paddingEnd: 15,
        top: "40%",
        
      },

      DescriptionInput: {
        fontFamily: 'Poppins',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        width: 250,
        height: 240,
        borderRadius: 10,
        marginBottom: 10,
        paddingStart: 15,
        paddingEnd: 15,
        top: "40%",
        
      },

})

export default CategoryUpdateStyles;