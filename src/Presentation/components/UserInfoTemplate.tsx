import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'


interface Props {
    textCard: String;
    dataUser: String;
}


const UserInfoTemplate = ({ textCard, dataUser }: Props) => {
  return (
    <View style={styles.userInfoContainer}>
        <Text style= {styles.titleText}>{textCard}</Text>
        <Text style= {styles.dataText}>{dataUser}</Text>
        <TouchableOpacity
          style={styles.editFieldButton}
          onPress={() => console.log("Editando", textCard)}
        >
            <Text>Editar</Text>
        </TouchableOpacity>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.25)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 100,
          borderRadius: 15,
        }}
      />
    </View>
  )

}

export default UserInfoTemplate;

const styles = StyleSheet.create({
    userInfoContainer: {
        backgroundColor: 'linear-gradient(90deg, rgba(190,190,190,0.2) 0%, rgba(209,120,66,01) 100%)',
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
        backgroundColor: '#D17842',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        position: 'relative',
        top: "-80%",
        right: "-75%",
        width:"20%",
        alignItems:"center",
    },
})