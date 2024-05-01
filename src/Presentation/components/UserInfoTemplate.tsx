import { StyleSheet, Text, View,TouchableOpacity, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'


interface Props {
    textCard: String;
    dataUser: String;
}


export const UserInfoTemplate = ({ textCard, dataUser }: Props) => {
  return (
    <View style={styles.userInfoContainer}>

        <Text style= {styles.titleText}>{textCard}</Text>
        <Text style= {styles.dataText}>{dataUser}</Text>
        <Pressable
          style={styles.editFieldButton}
          onPress={() => console.log("Editando", textCard)}
        >
            <Text style = {{color:'#D17842', fontFamily:'Poppins'}}>Editar</Text>
        </Pressable>
    </View>
  )

}



const styles = StyleSheet.create({
    userInfoContainer: {
        backgroundColor: 'rgba(255,255,255, 0.1)',
        width: 320,
        height: 100,
        borderRadius: 15,
        marginBottom: 10,
        position: 'relative',
    },
    titleText: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#ffffff',
        marginBottom: 20,
        position: 'relative',
        top: "18%",
        left: "5%",
    },
    dataText: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#ffffff',
        marginBottom: 20,
        position: 'relative',
        top: "10%",
        left: "8%",
    },
    editFieldButton: {
        backgroundColor:'#141921',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: '#D17842',
        borderWidth: 2,
        borderRadius: 5,
        position: 'relative',
        top: "-65%",
        right: "-75%",
        width:"20%",
        alignItems:"center",
    },
})