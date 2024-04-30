import { StyleSheet } from "react-native";

const CategoryListStyles = StyleSheet.create(

    {

      CategoryListContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C1013',
      },

      CategoryListText: {
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
        top: "79%",
        backgroundColor: '#D17842',
        borderRadius: 10,
        width: 150,
        height: 45,
      },

      buttomAdd: {
        position: 'absolute',
        top: "87%",
        backgroundColor: '#D17842',
        borderRadius: 10,
        width: 150,
        height: 45,
      },
     
      SaveText: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: 11,
      },

      categoryListInnerContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        width: "85%",
        height: "52%",
        position: 'absolute',
        top: "23%",
        alignContent: 'center',
        borderRadius: 10,
      },

        categoryListElement: {
            //backgroundColor: '#262B33',
            flex: 1,
            width: "100%",
            height: 140,
            borderRadius: 30,
            marginBottom: 10,
            paddingStart: 15,
            paddingEnd: 15,
            alignSelf: 'stretch',
        },

        categoryListElementText: {
            color: 'white',
            fontFamily: 'Poppins',
            textAlign: 'left',
            marginTop: '8%',
            marginLeft: '35%',
            fontSize: 18,
        },

        categoryListImage: {
            borderRadius: 30,
            width: 100,
            height: 100,
            position: 'absolute',
            top: "12.5%",
          },

          buttomEdit: {
            position: 'absolute',
            top: "55%",
            left: "40%",
            backgroundColor: 'transparent',
            borderColor: '#D17842',
             borderWidth: 2,
            borderRadius: 10,
            width: 150,
            height: 40,
          },

          editText: {
            color: '#D17842',
            fontFamily: 'Poppins',
            textAlign: 'center',
            marginTop: '5%',
          },

          buttomDelete: {
            position: 'absolute',
            top: "55%",
            left: "96%",
            backgroundColor: 'transparent',
            borderColor: '#ce2029',
             borderWidth: 2,
            borderRadius: 10,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          },
})

export default CategoryListStyles;