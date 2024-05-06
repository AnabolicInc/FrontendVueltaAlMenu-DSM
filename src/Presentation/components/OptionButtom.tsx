import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'



interface Props {
    text: String;
    onPress: () => void;
}


export const OptionButtom = ({text,onPress}:Props) => {
  return (
    <View style={styles.optionButtomContainer}>
        <Pressable
          style={styles.editFieldButton}
          onPress={onPress}
        >
            <Text style = {styles.dataText}>{text}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    optionButtomContainer: {
        marginBottom: 10,
        position: 'relative',
    },
    dataText: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#D17842',
        position: 'relative',
    },
    editFieldButton: {
        backgroundColor:'#141921',
        borderColor: '#D17842',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius:10,
        position: 'relative',
        top: "5%",
        left: "0%",
        alignItems: 'center',
    }

})