import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


interface Props {
    fieldLabel: string;      
    onChangeText: (text:string) => void;
}

const RegisterInfo = ({fieldLabel,onChangeText}:Props) => {
  return (
    <TextInput
        style = {styles.fieldLabel}
        placeholder = {fieldLabel}
        placeholderTextColor={'#D17842'}
        onChangeText={onChangeText}
    >
        
    </TextInput>
  )
}

export default RegisterInfo;

const styles = StyleSheet.create({

  fieldLabel: {
	position: 'relative',
    fontFamily: 'Poppins',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    width: 250,
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    paddingStart: 15,
    paddingEnd: 15,
    alignSelf: 'center',
  },

})