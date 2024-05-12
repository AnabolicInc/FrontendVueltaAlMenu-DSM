import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


import { COLORS } from '../themes/Theme'

interface Props {
    fieldLabel: string;      
    onChangeText: (text:string) => void;
}

const NewCategoryInfo = ({fieldLabel,onChangeText}:Props) => {
  return (
    <TextInput
        style = {styles.fieldLabel}
        placeholder = {fieldLabel}
        placeholderTextColor={COLORS.primaryOrange}
        onChangeText={onChangeText}
    >
        
    </TextInput>
  )
}

export default NewCategoryInfo;

const styles = StyleSheet.create({

  fieldLabel: {
	position: 'relative',
    fontFamily: 'Poppins',
    backgroundColor: COLORS.backgroundInputGrayRGBA,
    color: COLORS.primaryWhite,
    width: 250,
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    paddingStart: 15,
    paddingEnd: 15,
    alignSelf: 'center',
  },

})