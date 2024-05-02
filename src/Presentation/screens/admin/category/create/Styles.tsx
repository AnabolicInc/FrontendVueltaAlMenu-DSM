import { StyleSheet } from "react-native";

const CategoryCreateStyles = StyleSheet.create(

    {

      CategoryCreateContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0C1013',
      },

      CategoryCreateInnerContainer: {
        position: 'relative',
      },

      CategoryCreateText: {
        position: 'relative',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60,
        marginTop: 100,

      },

      buttomSave: {
        position: 'relative',
        backgroundColor: '#D17842',
        borderRadius: 10,
        width: 150,
        height: 40,
        alignSelf: 'center',
      },
     
      SaveText: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: 10,
      },

      categoryCreateUserImage: {
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

export default CategoryCreateStyles;