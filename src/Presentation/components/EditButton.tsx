import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { COLORS } from '../themes/Theme'

interface Props {
    onChangeText?: (text:string) => void;
}

export const EditButton = ({onChangeText}:Props) => {
  return (
    <View style = {styles.container}>
        <Pressable
            style={styles.editFieldButton}       
        >
            <Text style = {{color:COLORS.primaryOrange, fontFamily:'Poppins'}}>Editar</Text>
        </Pressable>

    </View>
  )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editFieldButton: {
        backgroundColor: COLORS.backgroundInputGrayRGBA,
        width: 320,
        height: 100,
        borderRadius: 15,
        marginBottom: 10,
        position: 'relative',
        alignSelf: 'center',
    },

})