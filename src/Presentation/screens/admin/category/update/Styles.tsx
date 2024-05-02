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

      CategoryUpdateInnerContainer: {
        position: 'relative',
      },

      CategoryUpdateText: {
        position: 'relative',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
        textAlign: 'center',
        top: "10%",
        marginBottom: 100,
        marginTop: 60,

      },

      buttomSave: {
        position: 'relative',
        backgroundColor: '#D17842',
        borderRadius: 10,
        width: 150,
        height: 40,
        alignSelf: 'center',
        marginTop: 40,
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
        position: 'relative',
        alignSelf: 'center',
        marginBottom: 30,

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
        
      },

      DescriptionInput: {
        position: 'relative',
        fontFamily: 'Poppins',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        width: 250,
        height: 240,
        borderRadius: 10,
        marginBottom: 10,
        paddingStart: 15,
        paddingEnd: 15,
        
      },

})

export default CategoryUpdateStyles;