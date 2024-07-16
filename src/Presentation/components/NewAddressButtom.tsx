import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { COLORS } from '../themes/Theme'

interface Props {
    onChangeText?: (text:string) => void;
}

export const NewAddressButtom = ({onChangeText}:Props) => {
  return (
        <View
            style={styles.editFieldButton}       
        >
            <Text style = {styles.text}>Agregar dirección</Text>
        </View>
  )
}


const styles = StyleSheet.create({

    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    editFieldButton: {
        backgroundColor: COLORS.backgroundInputGrayRGBA,
        width: 320,
        height: 50,
        borderRadius: 15,
        marginBottom: 10,
        position: 'relative',
        justifyContent: 'center',
    },
    text: {
        color: COLORS.primaryOrange,
        fontSize: 16,
        fontFamily: 'Poppins',
        alignSelf: 'center',
    }
})