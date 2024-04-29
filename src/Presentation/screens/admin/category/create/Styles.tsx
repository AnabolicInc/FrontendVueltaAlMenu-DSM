import { StyleSheet } from "react-native";

const CategoryCreateStyles = StyleSheet.create(

    {

      CategoryCreateContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C1013',
      },

      CategoryCreateText: {
        position: 'absolute',
        top: "19%",
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

})

export default CategoryCreateStyles;